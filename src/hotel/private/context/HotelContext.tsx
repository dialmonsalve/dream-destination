import { createContext } from 'react';
import { Hotel, Room }  from '../../../types/hotel';

interface ContextProps {
  hotels: Hotel[];
  hotel: Hotel;
  isLoading: 'loading' | 'ready' | 'error';
  getHotel: (id: number | string) => Promise<void>;
  createHotel: (hotel: Hotel) => Promise<Hotel >
  updateHotel: (id: string | number, hotel: Hotel) => Promise<void>
  deleteHotel: (id: string | number) => Promise<void>
  activateHotel: (id: string | number) => Promise<void>
  handlerClearState: () => void

  updateHotelWithRoom: (hotelId: number, newRoom: Room) => Promise<void>
}

export const HotelContext = createContext({} as ContextProps)