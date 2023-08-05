import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import { CardHead, CardBody, Button } from '../../../ui';

import { Hotel } from '../../../types/hotel';
import { useRoom } from '../hooks/useRoom';

interface CardProps {
  hotel: Hotel;
  children?: ReactNode | ReactNode[];
  handleClearState: () => void
}

export const HotelDetailCard = ({ children, hotel, handleClearState, ...props }: CardProps) => {

  const { rooms } = useRoom()
  const navigate = useNavigate();

  const { description, name, rooms: totalHotelRooms, city, id } = hotel;
  if (description === undefined) return;

  const countWordsHotel = description?.length > 80 ? description?.substring(0, 80) + '...' : description;

  const handleBack = () => {
    navigate(-1)
    handleClearState();
  }

  const handleCreateRoom = () => {
    if (id === undefined) return;
    navigate(`/api/hotel/${id}/rooms/create`)
    handleClearState();
  }

  return (
    <div className='detail-hotel'>
      <h1 className='detail-hotel__title' >Detail hotel: {hotel.name}</h1>
      <div
        className='card'
        {...props}
      >
        {children}

        <CardHead >
          <h3 className='title-card' >{name}</h3>
        </CardHead>

        <CardBody>
          <img className='card__body--img' src='/assets/hotel-bg.svg' alt='hotel' />
          <p className='card__body--city' >City: {city}</p>
          <p className='card__body--desc' >Descripción: {countWordsHotel} </p>
          <p className='card__body--room' >Rooms: {totalHotelRooms?.length}</p>
        </CardBody>
      </div>


      {
        hotel.rooms?.length === 0 ? <h2 className='h2'>There's no rooms create yet</h2> :

          <table className='detail-hotel__table' >
            <thead>
              <tr>
                <th>Number room</th>
                <th>Room type</th>
                <th>Basic Cost</th>
                <th>Taxes</th>
                <th>Available?</th>
                <th>Capacity</th>
                <th>Description</th>
              </tr>
            </thead>

            <tbody>
              {
                hotel.rooms?.map(hotelRoom => (

                  rooms.map(room => hotelRoom.id === room.id && (
                    <tr key={room.id} >
                      <td  >{room.numberRoom}</td>
                      <td  >{room.roomType}</td>
                      <td  >{room.basisCost}</td>
                      <td  >{room.taxes}</td>
                      <td  >{room.isAvailable ? 'Available' : 'Not available'}</td>
                      <td  >{room.capacity}</td>
                      <td  >{
                        room.description && (room.description.length > 20 ?
                          room.description.substring(0, 20) + '...'
                          : room.description)
                      }</td>
                    </tr>
                  ))
                ))
              }

            </tbody>
          </table>
      }

      <div>

      </div>
      <Button
        label='create rooms'
        backgroundColor='blue'
        margin='0 1rem 1rem 0'
        onClick={handleCreateRoom}
      />
      <Button
        label='back'
        backgroundColor='red'
        onClick={handleBack}
      />

    </div>
  )
}