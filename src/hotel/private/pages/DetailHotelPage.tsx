import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useHotels } from '../hooks/useHotels';
import { HotelDetailCard } from '../components/HotelDetailCard';

import NotFoundPage from '../../../user/public/pages/notFoundPage';
import { Spinner } from '../../../utils/components';


function DetailHotelPage() {

  const [error, setError] = useState(false);
  const { id } = useParams();
  const { hotel, isLoading, getHotel, handlerClearState } = useHotels();

  useEffect(() => {
    if (id === undefined) return;

    getHotel(id).
      then()
      .catch(error => setError(true))
  }, [id, getHotel]);

  return (

    isLoading === 'loading' ? <Spinner type='long-play' /> :

      error ? <NotFoundPage /> :
        <HotelDetailCard hotel={hotel} handlerClearState={handlerClearState} />
  )
}

export default DetailHotelPage;