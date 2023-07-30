import { ReactNode, useCallback, useEffect, useReducer } from 'react';

import { HOTEL_INITIAL_STATE, HotelContext, hotelReducer } from './';
import { hotelsApi, roomsApi } from '../../api/hotelsApi';

import { Hotel,  Room } from '../../interfaces/types';


export interface Props {
  children: ReactNode;
}

export interface HotelState {
  isLoading: 'loading' | 'ready' | 'error';
  hotels: Hotel[];
  hotel: Hotel;
  rooms?: Room[]
}



export const HotelProvider = ({ children }: Props) => {

  const [state, dispatch] = useReducer(hotelReducer, HOTEL_INITIAL_STATE);

  useEffect(() => {
    getHotels()
      .then((data => {
        if (data === undefined) return;
        dispatch({ type: '[Hotel] - Get hotels', payload: data })
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

  const getHotel = useCallback(async (id: number | string): Promise<void> => {
    const { data } = await hotelsApi.get<Hotel>(`/${id}`);

    dispatch({ type: '[Hotel] - Get hotel', payload: data })
  }, [])


  const createHotel = async (hotel: Hotel): Promise<Hotel> => {

    try {
      const { data } = await hotelsApi.post<Hotel>('', hotel);
      if (data.id !== undefined) {
        dispatch({ type: '[Hotel] - Create hotel', payload: data });
        return data;
      } else {
        console.log('Field "id" does not exist in the server.');
      }
    } catch (error) {
      console.log(error);
      throw error
    }
    return hotel

  }

  const updateHotel = async (id: number | string, hotel: Partial<Hotel>): Promise<void> => {

    try {
      const { data } = await hotelsApi.patch<Hotel>(`/${id}`, { id, ...hotel });
      dispatch({ type: '[Hotel] - Update hotel', payload: data });
    } catch (error) {
      console.log(error);
    }

  }

  const deleteHotel = async (id: number | string) => {
    try {
      const { data } = await hotelsApi.patch<Hotel>(`/${id}`, { active: false });
      if (data.id === undefined) return;
      dispatch({ type: '[Hotel] - Delete hotel', payload: data.id });
    } catch (error) {
      console.log(error);
    }
  }
  const activateHotel = async (id: number | string) => {
    try {
      const { data } = await hotelsApi.patch<Hotel>(`/${id}`, { active: true });
      if (data.id === undefined) return;
      dispatch({ type: '[Hotel] - Active hotel', payload: data.id });
    } catch (error) {
      console.log(error);
    }
  }

  const handlerClearState = () => {
    dispatch({ type: '[Hotel] - Clear state' })
  }

  //! ROOMS

  const createRoom = async (room: Room): Promise<Room> => {

    try {
      const { data } = await roomsApi.post<Room>(``, room);
      if (data.id !== undefined) {
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

  const updateHotelWithRoom = async (hotelId: number, newRoom: Room): Promise<void> => {
    try {

      const createdRoom = await createRoom(newRoom);

      const updatedHotel = {
        ...state.hotel,
        rooms: [...state.hotel.rooms || [], createdRoom],
      };

      await hotelsApi.patch(`/${hotelId}`, updatedHotel);

      dispatch({ type: '[Hotel] - Update hotel', payload: updatedHotel });
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
      deleteHotel,
      activateHotel,
      handlerClearState,
      //! Rooms
      updateHotelWithRoom,
    }}>
      {children}
    </HotelContext.Provider>
  )
}