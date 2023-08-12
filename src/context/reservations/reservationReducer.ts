import { Reservation } from "../../types";

export interface ReservationState {
  isLoading: 'loading' | 'ready' | 'error';
  reservations: Reservation[];
  reservation: Reservation;
}


export const RESERVATION_INITIAL_STATE: ReservationState = {
  isLoading: 'loading',
  reservations: [],
  reservation: {} as Reservation
}


type ReservationActionType =
  | { type: 'reservation/getReservations', payload: Reservation[] }
  | { type: 'reservation/getReservation', payload: Reservation }
  | { type: 'reservation/create', payload: Reservation }

export const reservationReducer = (state: ReservationState, action: ReservationActionType): ReservationState => {

  switch (action.type) {

    case 'reservation/getReservations':
      return {
        ...state,
        reservations: [...action.payload],
        isLoading: 'ready'
      }
    case 'reservation/getReservation':
      return {
        ...state,
        reservation: state.reservations.find(reservation => reservation.id === action.payload.id) || action.payload,
        isLoading: 'ready'
      }
    case 'reservation/create':
      return {
        ...state,
        reservations: [...state.reservations, action.payload],
        isLoading: 'ready',
      }

    default:
      return state;
  }
}