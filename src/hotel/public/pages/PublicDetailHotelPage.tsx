import { useNavigate } from "react-router-dom";
import { Hotel, Room } from "../../../types";
import NotFoundPage from "./notFoundPage";
import { Button } from "../../../ui";
import { convertDate } from "../../../helpers/convertDate";
import { CardDetailHotel } from "../../components/CardDetailHotel";
import { Table, TableHeader, Row, Td } from "../../../ui/Table";




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
            <TableHeader >
              <Td>Number room</Td>
              <Td>Room type</Td>
              <Td textAlign="center" >Basic Cost</Td>
              <Td textAlign="center" >Taxes</Td>
              <Td textAlign="center" >Capacity</Td>
              <Td >Reserve</Td>
              <Td >Detail</Td>
            </TableHeader>

            <tbody>
              {
                hotel.rooms?.map(hotelRoom => (

                  rooms.map(room => hotelRoom.id === room.id && room.isActive && room.statusRoom !== 'occupied' && (
                    <Row key={room.id} >
                      {
                        <>
                          <Td  >{room.numberRoom}</Td>
                          <Td  >{room.roomType}</Td>
                          <Td textAlign="center" >${`${room.basisCost}`}</Td>
                          <Td textAlign="center" >{`${room.taxes * 100}`}%</Td>
                          <Td textAlign="center" > {`${room.capacity}`}</Td>
                          <Td><Button
                            label='reserve'
                            size='small'
                            backgroundColor='primary-dark'
                            onClick={() => handleCreateReservation(room.id!)}
                          /></Td>
                          <Td  > <Button
                            label='detail'
                            size='small'
                            backgroundColor='green'
                          // onClick={() => handleDetailRoom(room.id!)}
                          /></Td>
                        </>
                      }
                    </Row>
                  ))
                ))
              }
            </tbody>
          </Table>
      }
    </>
  )
}
