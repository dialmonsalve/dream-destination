import { Room, StatusRoom } from '../../types';

export interface RoomState {
  rooms: Room[]
  isLoading: 'loading' | 'ready' | 'error';
  room: Room
  showModal: boolean
}

export const ROOM_INITIAL_STATE: RoomState = {
  isLoading: 'loading',
  rooms: [],
  room: {} as Room,
  showModal: false
}

type RoomActionType =

  | { type: 'room/getRooms', payload: Room[] }
  | { type: 'room/getRoom', payload: Room }
  | { type: 'room/createRoom', payload: Room }
  | { type: 'room/updateRoom', payload: Room }
  | { type: 'room/changeStatusRoom', payload: Room }
  | { type: 'room/toggleShowModal' }
  | { type: 'room/cleanStatus' }

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

    case 'room/changeStatusRoom':
      return {
        ...state,
        rooms: state.rooms.map(room => room.id === action.payload.id ? { ...room, statusRoom: action.payload.statusRoom } : room),
        isLoading: 'ready',
      }
    case 'room/toggleShowModal':
      return {
        ...state,
        showModal: !state.showModal
      }
    case 'room/cleanStatus':
      return {
        ...state,
        room: { ...ROOM_INITIAL_STATE.room, statusRoom: 'active' },
        isLoading: 'ready',
      }


    default:
      return state;
  }
}