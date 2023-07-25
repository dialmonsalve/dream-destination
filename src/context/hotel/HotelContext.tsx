import { createContext } from 'react';


interface ContextProps {
  hotels: Hotel[]
}

export const HotelContext = createContext({} as ContextProps)