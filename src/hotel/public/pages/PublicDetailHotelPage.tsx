import { useNavigate } from "react-router-dom";
import { Hotel, Room } from "../../../types";
import NotFoundPage from "./notFoundPage";
import { Button } from "../../../ui";
import { convertDate } from "../../../helpers/convertDate";
import { CardDetailHotel } from "../../components/CardDetailHotel";
import { Table, TableContent, Td } from "../../../ui/Table";




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
    navigate(`/hotels/${hotelId}/rooms/${id}`)
  }

  const handleCreateReservation = (roomId: number) => {
    navigate(`/hotels/${hotelId}/rooms/${roomId}/reserve/create`)
  }


  return (
    <>
      <CardDetailHotel hotel={hotel} />
      <Button
        label='back'
        backgroundColor='red'
        onClick={handleBack}
        margin="1.5rem 0"
      />
      {
        hotel.rooms?.length === 0 ? <h2 className='h2'>No rooms available</h2> :

          <Table >
            <TableContent type='header' columns={`repeat(7, 1fr)`}>
              <Td>Number room</Td>
              <Td>Room type</Td>
              <Td>Basic Cost</Td>
              <Td>Taxes</Td>
              <Td>Capacity</Td>
              <Td >Reserve</Td>
              <Td >Detail</Td>
            </TableContent>

            {
              hotel.rooms?.map(hotelRoom => (

                rooms.map(room => hotelRoom.id === room.id && room.isActive && (
                  <TableContent type='row' columns={`repeat(7, 1fr)`} key={room.id} >
                    {
                      <>
                        <Td  >{room.numberRoom}</Td>
                        <Td  >{room.roomType}</Td>
                        <Td  >${`${room.basisCost}`}</Td>
                        <Td  >{`${room.taxes * 100}`}%</Td>
                        <Td  > {`${room.capacity}`}</Td>
                        <Button
                          label='reserve'
                          size='toTable'
                          backgroundColor='primary-dark'
                          onClick={() => handleCreateReservation(room.id!)}
                        />
                        <Button
                          label='detail'
                          size='toTable'
                          backgroundColor='green'
                        // onClick={() => handleDetailRoom(room.id!)}
                        />
                      </>
                    }
                  </TableContent>
                ))
              ))
            }
          </Table>
      }
    </>
  )
}
