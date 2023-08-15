import { ReactNode, useCallback, useEffect, useReducer } from 'react';
import { RESERVATION_INITIAL_STATE, ReservationContext, reservationReducer } from './';
import { reservationApi } from '../../api/reservationApi';
import { Reservation } from '../../types';

export interface Props {
  children: ReactNode;
}

export const ReservationProvider = ({ children }: Props) => {

  const [state, dispatch] = useReducer(reservationReducer, RESERVATION_INITIAL_STATE);

  useEffect(() => {
    getReservations()
      .then((data => {
        if (data === undefined) return;
        dispatch({ type: 'reservation/getReservations', payload: data })
      }))
      .catch((error) => {
        console.log(error);
      })
  }, []);

  const getReservations = async () => {
    try {
      const { data } = await reservationApi.get<Reservation[]>('');
      return data;

    } catch (error) {
      console.log(error);
    }
  };

  const getReservation = useCallback(async (idReservation: number | string): Promise<void> => {

    try {
      const { data } = await reservationApi.get<Reservation>(`/${idReservation}`)
      dispatch({ type: 'reservation/getReservation', payload: data })
    } catch (error) {
      console.log(error);
    }
  }, []);

  const createReservation = async (reservation:Reservation): Promise<Reservation> => {
    try {
      const { data } = await reservationApi.post<Reservation>(``, reservation);
      dispatch({type:'reservation/create', payload:data});
      return data;
    } catch (error) {
      console.log(error);
    }
    return reservation;
  }

  return (
    <ReservationContext.Provider value={{
      ...state,
      getReservation,
      createReservation
    }}>
      {children}
    </ReservationContext.Provider>
  )
}