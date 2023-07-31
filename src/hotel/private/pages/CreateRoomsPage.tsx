import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useHotels } from '../hooks/useHotels';

import { PrivateResumeHotelView } from '../views/PrivateResumeHotelView';

function CreateRoomsPage() {

  const { id } = useParams();
  const { hotel, getHotel } = useHotels()

  useEffect(() => {
    if (id === undefined) return;

    getHotel(id).
      then()
      .catch(error => console.log(error)
      )
  }, [id, getHotel]);


  return (
    <PrivateResumeHotelView classBase='info' id={Number(id)!} city={hotel.city} name={hotel.name} isInfo={true} />
  )
}

export default CreateRoomsPage