import { useContext } from 'react';
import { RoomContext } from '../../../context/rooms';


export const useRoom = () => {

  const context = useContext(RoomContext)
  
  if(context === undefined) throw new Error('Context is not used inside the parent components')

  return context
}
