import { ReservationCard} from '../components/ReservationCard';

export const PublicSummaryReservation = () => {
  return (
    <div className='public-reservation' >
      <h2 className='public-reservation__title' >Reservations</h2>
      <div className='public-reservation__cards' >
        <ReservationCard >

        </ReservationCard>
      </div>
    </div>
  )

}
