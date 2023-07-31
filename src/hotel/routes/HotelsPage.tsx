
import { PrivateHotelsPage } from '../private/pages/PrivateHotelsPage';
import { PublicHotelsPage } from '../public/pages/PublicHotelsPage';

interface HotelPageProps {
  isStaff?: boolean
}

function HotelsPage({ isStaff }: HotelPageProps) {

  return (
    isStaff ? <PrivateHotelsPage /> : <PublicHotelsPage />
  )
}

export default HotelsPage;
