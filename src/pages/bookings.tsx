import { ClientBookings } from "../components/ui/clients/ClientBookings";
import { StaffBooking } from "../components/ui/staff/StaffBooking";

interface BookingPageProps {
  isStaff: boolean
}
function BookingsPage({isStaff}:BookingPageProps) {

  return (
    isStaff ? <StaffBooking /> : <ClientBookings />
  )
}

export default BookingsPage;
