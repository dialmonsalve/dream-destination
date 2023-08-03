import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import { CardHead, CardBody, Button } from '../../../ui';

import { Hotel } from '../../../types/hotel';

interface CardProps {
  hotel: Hotel;
  children?: ReactNode | ReactNode[];
  handleClearState: () => void
}

export const HotelDetailCard = ({ children, hotel, handleClearState, ...props }: CardProps) => {

  const navigate = useNavigate();

  const { description, name, rooms, city, id } = hotel;
  if (description === undefined) return;

  const countWordsHotel = description?.length > 80 ? description?.substring(0, 80) + '...' : description;

  const handleBack = () => {
    navigate(-1)
    handleClearState();
  }

  const handleCreateRoom = () => {
    if (id === undefined) return;
    navigate(`/api/hotels/${id}/rooms/create`)
    handleClearState();
  }

  return (
    <div className='detail-hotel'>
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
          <p className='card__body--room' >Rooms: {rooms?.length}</p>
        </CardBody>
      </div>

      <div >
        {
          hotel.rooms?.length === 0 ? <h2 className='h2'>There's no rooms create yet</h2> :
            <div className='detail-hotel__container-table' >
              <table className='detail-hotel__container-table--table header_fijo' >
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
                      hotel.rooms?.map(room => (
                        <tr key={room.id} >
                          <td  >{room.numberRoom}</td>
                          <td  >{room.roomType}</td>
                          <td  >{room.basisCost}</td>
                          <td  >{room.taxes}</td>
                          <td  >{room.isAvailable ? 'Available' : 'Not available'}</td>
                          <td  >{room.capacity}</td>
                          <td  >{room.description?.length || 0 > 20 ? description?.substring(0, 20) + '...' : room.description}</td>
                        </tr>
                      ))
                    }
                </tbody>
              </table>
            </div>
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
    </div>
  )
}