import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

import { useHotels } from '../../../hooks';

import { CardDetailHotel } from '../../../components/ui/card/CardDetailHotel';
import NotFoundPage from '../../notFoundPage';

import { Spinner } from '../../../components/ui/Spinner';

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
        <CardDetailHotel hotel={hotel} handlerClearState={handlerClearState} />
  )
}

export default DetailHotelPage;