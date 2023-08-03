import { Hotel, Room }  from '../../types';


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
  | { type: '[Hotel] - Get hotels', payload: Hotel[] }
  | { type: '[Hotel] - Get hotel', payload: Hotel }
  | { type: '[Hotel] - Create hotel', payload: Hotel }
  | { type: '[Hotel] - Update hotel', payload: Hotel }
  | { type: '[Hotel] - Active hotel', payload: string | number }
  | { type: '[Hotel] - Delete hotel', payload: string | number }
  | { type: '[Hotel] - Clear state' }


export const hotelReducer = (state: HotelState, action: HotelActionType): HotelState => {

  switch (action.type) {
    
    case '[Hotel] - Get hotels':
      return {
        ...state,
        hotels: [...action.payload],
        isLoading: 'ready',
      }

    case '[Hotel] - Get hotel':
      return {
        ...state,
        hotel: state.hotels.find(hotel => hotel.id === action.payload?.id) || action.payload,
        isLoading: 'ready',
      }

    case '[Hotel] - Create hotel':
      return {
        ...state,
        hotels: [...state.hotels, action.payload],
        isLoading: 'ready',
      }

    case '[Hotel] - Update hotel':
      return {
        ...state,
        hotels: state.hotels.map(hotel => {
          if (hotel.id === action.payload.id) {
            return action.payload
          }
          return hotel
        }),
        isLoading: 'ready',
      }

    case '[Hotel] - Delete hotel':
      return {
        ...state,
        hotels: state.hotels.map(hotel => {
          if (hotel.id === action.payload) {
            return { ...hotel, active: false }
          }
          return hotel
        }),
        isLoading: 'ready',
      }

    case '[Hotel] - Active hotel':
      return {
        ...state,
        hotels: state.hotels.map(hotel => {
          if (hotel.id === action.payload) {
            return { ...hotel, active: true }
          }
          return hotel
        }),
        isLoading: 'ready',
      }

    case '[Hotel] - Clear state':
      return {
        ...state,
        hotel: HOTEL_INITIAL_STATE.hotel,
      }

    default:
      return state;
  }
}