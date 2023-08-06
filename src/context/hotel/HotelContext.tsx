import { createContext } from 'react';
import { Hotel, Room } from '../../types';

interface ContextProps {
  hotels: Hotel[];
  hotel: Hotel;
  isLoading: 'loading' | 'ready' | 'error';
  getHotel: (hotelId: string | number) => Promise<void>;
  createHotel: (hotel: Hotel) => Promise<Hotel>
  updateHotel: (hotelId: string | number, hotel: Hotel) => Promise<void>
  toggleActiveHotel: (hotelId: string | number, active:boolean) => Promise<void>

  handleClearState: () => void

  updateHotelWithRoom: (hotelId: number, newRoom: Room) => Promise<void>
}


export const HotelContext = createContext({} as ContextProps)