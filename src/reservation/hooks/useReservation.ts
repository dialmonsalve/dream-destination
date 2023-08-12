import { useContext } from 'react';
import { ReservationContext } from '../../context/reservations';


export const useReservation = () => {

  const context = useContext(ReservationContext)
  
  if(context === undefined) throw new Error('Context is not used inside the parent components')

  return context;
}