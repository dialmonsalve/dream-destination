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

  | { type: '[Room] - Get rooms', payload: Room[] }
  | { type: '[Room] - Get room', payload: Room }
  | { type: '[Room] - create room', payload: Room }

export const roomReducer = (state: RoomState, action: RoomActionType): RoomState => {

  switch (action.type) {

    case '[Room] - Get rooms':
      return {
        ...state,
        rooms: [...action.payload],
        isLoading: 'ready',
      }
    case '[Room] - Get room':
      return {
        ...state,
        room: state.rooms.find(room => room.id == action.payload.id) || action.payload,
        isLoading: 'ready'
      }
    case '[Room] - create room':
      return {
        ...state,
        rooms: [...state.rooms, action.payload],
        isLoading: 'ready',
      }

    default:
      return state;
  }
}