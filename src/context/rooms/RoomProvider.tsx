import { ReactNode, useCallback, useEffect, useReducer } from 'react';
import { ROOM_INITIAL_STATE, RoomContext, roomReducer } from './';
import { roomsApi } from '../../api/hotelsApi';
import { Reservation, Room } from '../../types';
import { useReservation } from '../../reservation/hooks/useReservation';

export interface Props {
  children: ReactNode;
}


export const RoomProvider = ({ children }: Props) => {

  const [state, dispatch] = useReducer(roomReducer, ROOM_INITIAL_STATE);
  const { createReservation } = useReservation();

  useEffect(() => {
    getRooms().then(data => {
      if (data === undefined) return;
      dispatch({ type: 'room/getRooms', payload: data })
    }).catch(error => console.log(error)
    )
  }, [])

  const getRooms = async () => {

    try {
      const { data } = await roomsApi.get<Room[]>("");
      return data

    } catch (error) {
      console.log(error);
    }
  }

  const getRoom = useCallback(async (id: number | string): Promise<void> => {
    const { data } = await roomsApi.get<Room>(`/${id}`);

    dispatch({ type: 'room/getRoom', payload: data })
  }, [])

  const createRoom = async (room: Room): Promise<Room> => {
    try {
      const { data } = await roomsApi.post<Room>('', room);

      if (data.id !== undefined) {

        dispatch({ type: 'room/createRoom', payload: data })
        return data;
      } else {
        console.log('Field "id" does not exist in the server.');
      }

    } catch (error) {
      console.log(error);
      throw error
    }
    return room
  }

  const updateRoom = async (roomId: string | number, room: Room): Promise<void> => {
    try {
      const { data } = await roomsApi.patch<Room>(`/${roomId}`, { roomId, ...room });
      dispatch({ type: 'room/updateRoom', payload: data });
    } catch (error) {
      console.log(error);
    }
  }

  const toggleActiveRoom = async (roomId: string | number, statusRoom: string): Promise<void> => {

    try {
      const { data } = await roomsApi.patch<Room>(`/${roomId}`, { statusRoom });
      if (data.id === undefined) return;
      dispatch({ type: 'room/toggleActiveRoom', payload: data });
    } catch (error) {
      console.log(error);
    }

  }

  const updateRoomWithReservation = async (roomId: number, newReservation: Reservation) => {

    try {
      const createdReservation = await createReservation(newReservation);

      const { initialDate, finalDate } = createdReservation;

      const updatedRoom: Room = {
        ...state.room,
        initialDate,
        finalDate,
        statusRoom: 'occupied'
      };

      await roomsApi.patch(`/${roomId}`, updatedRoom);

      dispatch({ type: 'room/updateRoom', payload: updatedRoom });


    } catch (error) {
      console.log(error);
      throw error;
    }
  }


  return (
    <RoomContext.Provider value={{
      ...state,

      getRoom,
      createRoom,
      updateRoom,
      toggleActiveRoom,
      updateRoomWithReservation
    }}>
      {children}
    </RoomContext.Provider>
  )
}