import { HotelState } from './HotelProvider';


type HotelActionType = 
  | { type: '[Hotel] - Get hotels', payload:Hotel[] }

export const hotelReducer = (state: HotelState, action: HotelActionType): HotelState => {

  switch (action.type) {
    case '[Hotel] - Get hotels':
      return {
        ...state,
        hotels:[...action.payload]
      }

    default:
      return state;
  }
}