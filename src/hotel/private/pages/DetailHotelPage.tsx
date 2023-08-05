import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useHotel } from '../hooks/useHotel';
import { HotelDetailCard } from '../components/HotelDetailCard';


import { Spinner } from '../../../ui';
import NotFoundPage from '../../public/pages/notFoundPage';


function DetailHotelPage() {

  const [error, setError] = useState(false);
  const { hotelId } = useParams();
  const { hotel, isLoading, getHotel, handleClearState } = useHotel();

  useEffect(() => {
    if (hotelId === undefined) return;

    getHotel(hotelId).
      then()
      .catch(error => setError(true))
  }, [hotelId, getHotel]);

  return (

    isLoading === 'loading' ? <Spinner type='long-play' /> :

      error ? <NotFoundPage /> :
        <HotelDetailCard hotel={hotel} handleClearState={handleClearState} />
  )
}

export default DetailHotelPage;