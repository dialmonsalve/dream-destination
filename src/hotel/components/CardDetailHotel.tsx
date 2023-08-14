import { Hotel } from "../../types";
import { CardBody, CardHead } from "../../ui";

interface CardDetailHotelProps {
  hotel: Hotel
}

export const CardDetailHotel = ({ hotel }: CardDetailHotelProps) => {

  const { name, city, rooms, description } = hotel;
  
  if (description === undefined) return;

  const countWordsHotel = description?.length > 80 ? description?.substring(0, 80).concat('...') : description;

  return (
    <>
      <h1 className="container__title" >Detail hotel</h1>
      <div className='card'>

        <CardHead >
          <h3 className='title-card' >{name}</h3>
        </CardHead>

        <CardBody>
          <img className='card__body--img' src='/assets/hotel-bg.svg' alt='hotel' />
          <p className='card__body--city' >City: {city}</p>
          <p className='card__body--desc' >Descripción: {countWordsHotel} </p>
          <p className='card__body--room' >Rooms: {rooms?.length}</p>
        </CardBody>
      </div>
    </>
  )
}
