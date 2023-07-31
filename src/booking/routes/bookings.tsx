import { PrivateSummaryBooking } from '../private/views/PrivateSummaryBooking';
import { PublicSummaryBooking } from '../public/views/PublicSummaryBooking';


interface BookingPageProps {
  isStaff: boolean
}

function BookingsView({isStaff}:BookingPageProps) {

  return (
    isStaff ? <PrivateSummaryBooking /> : <PublicSummaryBooking />
  )
}

export default BookingsView;
