import { BookingCard } from '../components/BookingCard';

export const PublicSummaryBooking = () => {
  return (
    <div className='client-bookings' >
      <h2 className='client-bookings__title' >Bookings</h2>
      <div className='client-bookings__cards' >
        <BookingCard >

        </BookingCard>
      </div>
    </div>
  )

}
