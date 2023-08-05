import { createContext } from 'react';
import { Room } from '../../types';


interface ContextProps {
     rooms: Room[];
     room: Room;
     isLoading: 'loading' | 'ready' | 'error';
     getRoom : (id: number | string)=> Promise<void>
     createRoom:(room: Room)=> Promise<Room>
}

export const RoomContext = createContext({} as ContextProps)