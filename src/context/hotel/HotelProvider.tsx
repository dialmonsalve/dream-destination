import { ReactNode, useEffect, useReducer } from 'react';
import { HotelContext, hotelReducer } from './';
import hotelsApi from '../../api/hotelsApi';

export interface Props {
  children: ReactNode;
}

export interface HotelState {
  hotels: Hotel[];
}


const HOTEL_INITIAL_STATE: HotelState = {
  hotels: [],
}

export const HotelProvider = ({ children }: Props) => {

  const [state, dispatch] = useReducer(hotelReducer, HOTEL_INITIAL_STATE);

  const { hotels } = state

  useEffect(() => {
    getHotels()
      .then((data => {
        dispatch({ type: '[Hotel] - Get hotels', payload: data })
      }))
      .catch((error) => {
        console.log(error);
      })
  }, [])

  const getHotels = async () => {
    const { data } = await hotelsApi.get<Hotel[]>('');
    return data
  }

  return (
    <HotelContext.Provider value={{
      ...state,
      hotels
    }}>
      {children}
    </HotelContext.Provider>
  )
}