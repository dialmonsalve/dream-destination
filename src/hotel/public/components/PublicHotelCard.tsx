import { useHotel } from '../../private/hooks/useHotel';

import { Button, CardHead, CardBody, CardFooter } from '../../../ui';
import { useNavigate } from 'react-router-dom';


export const PublicHotelCard = () => {

  const { hotels } = useHotel();
  const navigate = useNavigate()

  const handleReservation = (hotelId: number | undefined) => {
    if (!hotelId) return
    navigate(`/hotel/${hotelId}`)
  }

  return (

    <div className='client-hotels__cards' >
      {hotels.map(hotel => hotel.active && (

        <div className='card' key={hotel.id} >
          <CardHead >
            <h3 className='title-card' >{hotel.name}</h3>
          </CardHead>

          <CardBody>
            <img className='card__body--img' src='/assets/hotel-bg.svg' alt='hotel' />
            <p className='card__body--city' >Ciudad: {hotel.city}</p>
            <p
              className='card__body--desc'
            >Descripción: {hotel.description!.length > 90 ? hotel.description?.substring(0, 90).concat('...') : hotel.description}
            </p>
            <p className='card__body--room' >Rooms: {hotel.rooms?.length}</p>
          </CardBody>
          <CardFooter>
            <Button
              label='booking'
              backgroundColor='primary'
              hasBackground={false}
              onClick={() => handleReservation(hotel.id)}
            />
          </CardFooter>
        </div>
      ))}
    </div>
  )
}
