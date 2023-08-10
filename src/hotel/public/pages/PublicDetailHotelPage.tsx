import { useNavigate } from "react-router-dom";
import { Hotel, Room } from "../../../types";
import NotFoundPage from "./notFoundPage";
import { Button } from "../../../ui";
import { convertDate } from "../../../helpers/convertDate";
import { CardDetailHotel } from "../../components/CardDetailHotel";


interface CardProps {
  hotel: Hotel;
  handleClearState: () => void;
  rooms: Room[];
  hotelId: string | undefined
}

export const PublicDetailHotelPage = ({ hotel, rooms, hotelId, handleClearState }: CardProps) => {

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1)
    handleClearState();
  }

  if (hotelId === undefined) {
    return <NotFoundPage />
  }

  const handleDetailRoom = (id: number) => {
    navigate(`/hotel/${hotelId}/room/${id}`)
  }

  const handleCreateReservation = (roomId:number) => {
    navigate(`/hotel/${hotelId}/room/${roomId}/reserve/create`)
  }

  return (
    <>
      <CardDetailHotel hotel={hotel} />
      <Button
        label='back'
        backgroundColor='red'
        onClick={handleBack}
        margin="1.5rem 0 0 0"
      />

      {
        hotel.rooms?.length === 0 ? <h2 className='h2'>No rooms available</h2> :

          <table className='detail-hotel__table' >
            <thead>
              <tr>
                <th>Number room</th>
                <th>Room type</th>
                <th>Basic Cost</th>
                <th>Taxes</th>
                <th>Capacity</th>
                <th >Detail</th>
                <th >Actions</th>
              </tr>
            </thead>

            <tbody>
              {
                hotel.rooms?.map(hotelRoom => (

                  rooms.map(room => hotelRoom.id === room.id && room.isActive && (
                    <tr key={room.id} >
                      {
                        <>
                          <td  >{room.numberRoom}</td>
                          <td  >{room.roomType}</td>
                          <td  >{room.basisCost}</td>
                          <td  >{room.taxes}</td>
                          <td  >{room.capacity}</td>
                          <td><Button
                            label='reserve'
                            size='small'
                            backgroundColor='primary-dark'
                          onClick={() => handleCreateReservation(room.id!)}
                          /></td>
                          <td><Button
                            label='detail'
                            size='small'
                            backgroundColor='green'
                          // onClick={() => handleDetailRoom(room.id!)}
                          /></td>
                        </>
                      }
                    </tr>
                  ))
                ))
              }
            </tbody>
          </table>
      }
      <div>

      </div>
    </>
  )
}
