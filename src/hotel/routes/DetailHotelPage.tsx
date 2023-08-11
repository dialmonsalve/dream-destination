import { useEffect, useState } from "react";
import { PrivateDetailHotelPage } from "../private/pages/PrivateDetailHotelPage"
import { PublicDetailHotelPage } from "../public/pages/PublicDetailHotelPage"
import { useParams } from "react-router-dom";
import { useHotel } from "../private/hooks/useHotel";
import { Spinner } from "../../ui";
import NotFoundPage from "../public/pages/notFoundPage";
import { useRoom } from "../private/hooks/useRoom";

interface HotelDetailPageProps {
  isStaff?: boolean
}

function DetailHotelPage({ isStaff }: HotelDetailPageProps) {

  const [error, setError] = useState(false);
  const { hotelId } = useParams();
  const { hotel,  getHotel, handleClearState } = useHotel();
  const { rooms, isLoading } = useRoom();

  useEffect(() => {
    if (hotelId === undefined) return;

    getHotel(hotelId).
      then()
      .catch(error => setError(true))
  }, [hotelId, getHotel]);

  return (
    <>
      {isLoading === 'loading' && <Spinner type='long-play' />}

      {error && <NotFoundPage />}

      {isStaff
        ? <PrivateDetailHotelPage
          hotel={hotel} handleClearState={handleClearState}
          rooms={rooms}
          hotelId={hotelId}
        />
        : <PublicDetailHotelPage
          hotel={hotel}
          handleClearState={handleClearState}
          rooms={rooms}
          hotelId={hotelId}
        />}
    </>
  )
}

export default DetailHotelPage