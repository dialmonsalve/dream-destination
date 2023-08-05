import { ReactNode, useCallback, useEffect, useReducer } from 'react';
import { ROOM_INITIAL_STATE, RoomContext, roomReducer } from './';
import { roomsApi } from '../../api/hotelsApi';
import { Room } from '../../types';

export interface Props {
  children: ReactNode;
}


export const RoomProvider = ({ children }: Props) => {

  const [state, dispatch] = useReducer(roomReducer, ROOM_INITIAL_STATE);

  useEffect(() => {
    getRooms().then(data => {
      if (data === undefined) return;
      dispatch({ type: '[Room] - Get rooms', payload: data })
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

    dispatch({ type: '[Room] - Get room', payload: data })
  }, [])

  const createRoom = async (room: Room): Promise<Room> => {

    try {
      const { data } = await roomsApi.post<Room>('', room);

      if (data.id !== undefined) {

        dispatch({ type: '[Room] - create room', payload: data })
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


  return (
    <RoomContext.Provider value={{
      ...state,

      getRoom,
      createRoom
    }}>
      {children}
    </RoomContext.Provider>
  )
}