import { createContext } from 'react';
import { Reservation, Room } from '../../types';


interface ContextProps {
     rooms: Room[];
     room: Room;
     isLoading: 'loading' | 'ready' | 'error';
     showModal:boolean;
     getRoom: (id: number | string) => Promise<void>
     createRoom: (room: Room) => Promise<Room>
     updateRoom: (roomId: string | number, room: Room) => Promise<void>
     changeStatusRoom: (roomId: string | number, statusRoom: string) => Promise<void>
     updateRoomWithReservation: (roomId: number, newReservation: Reservation) => Promise<void>
     handleToggleModal:()=>void;
     cleanStatus:()=>void
}

export const RoomContext = createContext({} as ContextProps)