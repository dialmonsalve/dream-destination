import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useHotels } from '../../../hooks';
import { ResumeHotel } from '../../../components/ui/staff/ResumeHotel';


function CreateRooms() {

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
    <ResumeHotel classBase='info' id={Number(id)!} city={hotel.city} name={hotel.name} isInfo={true} />
  )
}

export default CreateRooms