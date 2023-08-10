import { ReservationCard} from '../components/ReservationCard';

export const PublicSummaryReservation = () => {
  return (
    <>
      <h2 className='container__reservation__title' >Reservations</h2>
      <div className='container__reservation__cards' >
        <ReservationCard >

        </ReservationCard>
      </div>
    </>
  )

}
