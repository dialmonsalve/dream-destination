import { Hotel, NewRoomForHotel, Room } from '../../types';


interface HotelState {
  isLoading: 'loading' | 'ready' | 'error';
  hotels: Hotel[];
  hotel: Hotel;
  rooms?: Room[]
}

export const HOTEL_INITIAL_STATE: HotelState = {
  isLoading: 'loading',
  hotels: [],
  hotel: {} as Hotel,
  rooms: []
}

type HotelActionType =
  | { type: 'hotel/getHotels', payload: Hotel[] }
  | { type: 'hotel/getHotel', payload: Hotel }
  | { type: 'hotel/createHotel', payload: Hotel }
  | { type: 'hotel/updateHotel', payload: Hotel | NewRoomForHotel }
  | { type: 'hotel/toggleActiveHotel', payload: Hotel }
  | { type: 'hotel/handleClearState' }


export const hotelReducer = (state: HotelState, action: HotelActionType): HotelState => {

  switch (action.type) {

    case 'hotel/getHotels':
      return {
        ...state,
        hotels: [...action.payload],
        isLoading: 'ready',
      }

    case 'hotel/getHotel':
      return {
        ...state,
        hotel: state.hotels.find(hotel => hotel.id === action.payload?.id) || action.payload,
        isLoading: 'ready',
      }

    case 'hotel/createHotel':
      return {
        ...state,
        hotels: [...state.hotels, action.payload],
        isLoading: 'ready',
      }

    case 'hotel/updateHotel':
      return {
        ...state,
        hotels: state.hotels.map(hotel => hotel.id === action.payload.id ? action.payload : hotel),
        isLoading: 'ready',
      }

    case 'hotel/toggleActiveHotel':
      return {
        ...state,
        hotels: state.hotels.map(hotel => hotel.id === action.payload.id ? { ...hotel, active: !hotel.active }
          : hotel),
        isLoading: 'ready',
      }
    case 'hotel/handleClearState':
      return {
        ...state,
        ...HOTEL_INITIAL_STATE.hotel,
        isLoading:state.isLoading
      }

    default:
      return state;
  }
}