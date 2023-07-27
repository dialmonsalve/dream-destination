
import { ClientHotels } from '../components/ui/clients/ClientHotels';

import { StaffHotels } from '../components/ui/staff/StaffHotels';
// import { useHotels } from '../hooks/useHotels';

interface HotelPageProps {
  isStaff: boolean
}

function HotelPage({ isStaff }: HotelPageProps) {

  // ! const { hotels } = useHotels();

  return (
    isStaff ? <StaffHotels /> : <ClientHotels />
  )
}

export default HotelPage;
