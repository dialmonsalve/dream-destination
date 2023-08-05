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
    <div className='create-room'>
      <div className='create-room__container' >
        <h1 className='create-room__container--title' >Create room</h1>
      <PrivateResumeHotelView classBase='create-room--info' id={Number(hotelId)!} city={hotel.city} name={hotel.name} isInfo={true} />
      </div>

    </div>
  )
}

export default CreateRoomsPage