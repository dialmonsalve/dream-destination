import { createContext } from 'react';
import { Reservation } from '../../types';


interface ContextProps {
  reservations: Reservation[];
  reservation: Reservation;
  getReservation:(idReservation: number | string)=> Promise<void>;
  createReservation:(reservation: Reservation)=> Promise<Reservation>;
}

export const ReservationContext = createContext({} as ContextProps)