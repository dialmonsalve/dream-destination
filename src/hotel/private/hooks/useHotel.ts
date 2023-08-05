import { useContext } from 'react';
import { HotelContext } from '../../../context/hotel';


export const useHotel = () => {

  const context = useContext(HotelContext)
  
  if(context === undefined) throw new Error('Context is not used inside the parent components')

  return context
}
