import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useHotel } from '../hooks/useHotel';

import { PrivateResumeHotelView } from '../views/PrivateResumeHotelView';

function CreateRoomsPage() {

  const { hotelId } = useParams();
  const { hotel, getHotel } = useHotel()
  
  useEffect(() => {
    if (hotelId === undefined) return;

    getHotel(hotelId).
      then()
      .catch(error => console.log(error)
      )
  }, [hotelId, getHotel]);


  return (
    <> 
        <h1 className='private-container__title' >Create room</h1>
      <PrivateResumeHotelView classBase='create-edit-room__container--info' id={Number(hotelId)!} city={hotel.city} name={hotel.name} isInfo={true} isCreating/>
    </>
  )
}

export default CreateRoomsPage