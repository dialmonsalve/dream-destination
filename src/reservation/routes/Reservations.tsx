import { PrivateSummaryReservation } from '../private/views/PrivateSummaryReservation';
import { PublicSummaryReservation } from '../public/views/PublicSummaryReservation';


interface ReservationPageProps {
  isStaff: boolean
}

function ReservationsView({isStaff}:ReservationPageProps) {

  return (
    isStaff ? <PrivateSummaryReservation /> : <PublicSummaryReservation />
  )
}

export default ReservationsView;
