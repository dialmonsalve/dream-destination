import { useHotels } from '../../private/hooks/useHotels';

import { Button, CardHead, CardBody, CardFooter } from '../../../utils/components';


export const PublicHotelCard = () => {

  const { hotels } = useHotels();

  return (

    hotels.map(hotel => (

      <div
        className='card'
      >
        <CardHead >
          <h3 className='title-card' >{hotel.city} {hotel.id}</h3>
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
            backgroundColor='primary-dark'
            hasBackground={false}
          // color={'white'}
          />
        </CardFooter>

      </div>

    ))

  )
}
