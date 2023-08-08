import { ReactNode, useCallback, useEffect, useReducer } from 'react';

import { HOTEL_INITIAL_STATE, HotelContext, hotelReducer } from '.';
import { hotelsApi } from '../../api/hotelsApi';

import { Hotel, NewRoomForHotel, Room } from '../../types';
import { useRoom } from '../../hotel/private/hooks/useRoom';

export interface Props {
  children: ReactNode;
}

export const HotelProvider = ({ children }: Props) => {

  const [state, dispatch] = useReducer(hotelReducer, HOTEL_INITIAL_STATE);
  const { createRoom } = useRoom()

  useEffect(() => {
    getHotels()
      .then((data => {
        if (data === undefined) return;
        dispatch({ type: 'hotel/getHotels', payload: data })
      }))
      .catch((error) => {
        console.log(error);
      })
  }, [])

  //! HOTEL
  const getHotels = async () => {

    try {
      const { data } = await hotelsApi.get<Hotel[]>('');
      return data

    } catch (error) {
      console.log(error);
    }
  }

  const getHotel = useCallback(async (hotelId: number | string): Promise<void> => {
    const { data } = await hotelsApi.get<Hotel>(`/${hotelId}`);

    dispatch({ type: 'hotel/getHotel', payload: data })
  }, [])

  const createHotel = async (hotel: Hotel): Promise<Hotel> => {

    try {
      const { data } = await hotelsApi.post<Hotel>('', hotel);
      if (data.id !== undefined) {
        dispatch({ type: 'hotel/createHotel', payload: data });
        return data;
      } else {
        console.log('Field "id" does not exist in the server.');
      }
    } catch (error) {
      console.log(error);
      throw error
    }
    return hotel;

  }

  const updateHotel = async (hotelId: number | string, hotel: Partial<Hotel>): Promise<void> => {

    try {
      const { data } = await hotelsApi.patch<Hotel>(`/${hotelId}`, { hotelId, ...hotel });
      dispatch({ type: 'hotel/updateHotel', payload: data });
    } catch (error) {
      console.log(error);
    }
  }

  const toggleActiveHotel = async (id: number | string, active: boolean) => {
    try {
      const { data } = await hotelsApi.patch<Hotel>(`/${id}`, { active });
      if (data.id === undefined) return;
      dispatch({ type: 'hotel/toggleActiveHotel', payload: data });
    } catch (error) {
      console.log(error);
    }
  }

  const handleClearState = () => {
    dispatch({ type: 'hotel/handleClearState' })
  }


  const updateHotelWithRoom = async (hotelId: number, newRoom: Room): Promise<void> => {
    try {

      const createdRoom = await createRoom(newRoom);

      const { id } = createdRoom;

      const updateRooms = [...state.hotel.rooms || [], { id }]

      const updatedHotel: NewRoomForHotel = {
        ...state.hotel,
        rooms: updateRooms,
      };

      await hotelsApi.patch(`/${hotelId}`, updatedHotel);

      dispatch({ type: 'hotel/updateHotel', payload: updatedHotel });
    } catch (error) {
      console.log(error);
      throw error;
    }

  };

  return (
    <HotelContext.Provider value={{
      ...state,

      // ! Hotel
      getHotel,
      createHotel,
      updateHotel,
      toggleActiveHotel,
      handleClearState,
      //! Rooms
      updateHotelWithRoom,
    }}>
      {children}
    </HotelContext.Provider>
  )
}