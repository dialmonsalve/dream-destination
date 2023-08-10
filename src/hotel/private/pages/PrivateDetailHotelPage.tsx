import { useNavigate } from "react-router-dom";
import { Hotel, Room } from "../../../types";
import { useRoom } from "../hooks/useRoom";
import NotFoundPage from "../../public/pages/notFoundPage";
import { Button } from "../../../ui";
import { convertDate } from "../../../helpers/convertDate";

interface CardProps {
  hotel: Hotel;
  handleClearState: () => void,
  rooms: Room[];
  hotelId: string | undefined
}

export const PrivateDetailHotelPage = ({ hotel, rooms, hotelId, handleClearState }: CardProps) => {

  const navigate = useNavigate();
  const { toggleActiveRoom } = useRoom()

  const { description } = hotel;
  if (description === undefined) return;

  const handleBack = () => {
    navigate(-1)
    handleClearState();
  }

  const handleCreateRoom = () => {
    if (hotelId === undefined) return;
    navigate(`/api/hotel/${hotelId}/room/create`)
    handleClearState();
  }

  if (hotelId === undefined) {
    return <NotFoundPage />
  }

  const handleEditRoom = (roomId: number) => {
    if (Number(hotelId) !== hotel.id) {
      return <NotFoundPage />
    }
    navigate(`/api/hotel/${hotelId}/room/edit/${roomId}`)
  }

  const handleDetailRoom = (roomId: number) => {
    navigate(`/api/hotel/${hotelId}/room/${roomId}`)
  }

  const handleDeleteRoom = (roomId: number, isActive: boolean) => {
    toggleActiveRoom(roomId, isActive).then().catch(error => console.log(error))
  }

  return (
    <>
      <h1 className="private-container__title" >{hotel.name}</h1>
      <h2 className="private-container__subtitle" >City: {hotel.city}</h2>
      {
        hotel.rooms?.length === 0 ? <h2 className='h2'>There's no rooms create yet</h2> :
          <div className='private-detail__container-table' >
            <table className='private-detail__container-table--table' >
              <thead>
                <tr>
                  <th>Number room</th>
                  <th>Room type</th>
                  <th>Basic Cost</th>
                  <th>Taxes</th>
                  <th>Capacity</th>
                  <th colSpan={3} >Actions</th>
                  <th>Status</th>
                  <th>date reservation</th>
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

                        <td  >{room.capacity}</td>
                        <td><Button
                          label='detail'
                          size='small'
                          backgroundColor='green'
                          onClick={() => handleDetailRoom(room.id!)}
                        /></td>
                        <td><Button
                          label='edit'
                          size='small'
                          backgroundColor='blue'
                          onClick={() => handleEditRoom(room.id!)}
                        /></td>
                        {
                          room.isActive
                            ?
                            <td><Button
                              label='delete'
                              size='small'
                              backgroundColor='red'
                              onClick={() => handleDeleteRoom(room.id!, false)}
                            /></td>
                            :
                            <td><Button
                              label='activate'
                              size='small'
                              backgroundColor='primary-dark'
                              onClick={() => handleDeleteRoom(room.id!, true)}
                            /></td>
                        }
                        <td  >{room.isActive ? 'active' : 'inactive'}</td>

                        {
                          room.finalDate! - room.initialDate! > 0 ?
                            <td> {`${convertDate(room.initialDate!)}  -  ${convertDate(room.finalDate!)}`} </td>
                            : <td>free</td>
                        }
                      </tr>
                    ))
                  ))
                }
              </tbody>
            </table>
          </div>
      }
      <div>
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

    </>
  )
}