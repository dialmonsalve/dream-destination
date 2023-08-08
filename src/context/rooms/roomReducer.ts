import { Room } from '../../types';

export interface RoomState {
  rooms: Room[]
  isLoading: 'loading' | 'ready' | 'error';
  room: Room
}

export const ROOM_INITIAL_STATE: RoomState = {
  isLoading: 'loading',
  rooms: [],
  room: {} as Room
}

type RoomActionType =

  | { type: 'room/getRooms', payload: Room[] }
  | { type: 'room/getRoom', payload: Room }
  | { type: 'room/createRoom', payload: Room }
  | { type: 'room/updateRoom', payload: Room }
  | { type: 'room/toggleActiveRoom', payload: Room }

export const roomReducer = (state: RoomState, action: RoomActionType): RoomState => {

  switch (action.type) {

    case 'room/getRooms':
      return {
        ...state,
        rooms: [...action.payload],
        isLoading: 'ready',
      }
    case 'room/getRoom':
      return {
        ...state,
        room: state.rooms.find(room => room.id == action.payload.id) || action.payload,
        isLoading: 'ready'
      }
    case 'room/createRoom':
      return {
        ...state,
        rooms: [...state.rooms, action.payload],
        isLoading: 'ready',
      }
    case 'room/updateRoom':
      return {
        ...state,
        rooms: state.rooms.map(room => room.id === action.payload.id ? action.payload : room),
        isLoading: 'ready',
      }

    case 'room/toggleActiveRoom':
      return {
        ...state,
        rooms: state.rooms.map(room => room.id === action.payload.id ? { ...room, isActive: !room.isActive } : room),
        isLoading: 'ready',
      }


    default:
      return state;
  }
}