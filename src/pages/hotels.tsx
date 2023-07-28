
import { ClientHotels } from '../components/ui/clients/ClientHotels';

import { StaffHotels } from './api/hotel/hotels';

interface HotelPageProps {
  isStaff?: boolean
}

function HotelPage({ isStaff }: HotelPageProps) {

  return (
    isStaff ? <StaffHotels /> : <ClientHotels />
  )
}

export default HotelPage;
