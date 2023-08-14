import { useNavigate } from "react-router-dom";
import { Hotel, Room } from "../../../types";
import { useRoom } from "../hooks/useRoom";
import NotFoundPage from "../../public/pages/notFoundPage";
import { Button } from "../../../ui";
import { convertDate } from "../../../helpers/convertDate";
import { TableContent, Table, Td } from "../../../ui/Table";

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
    navigate(`/api/hotels/${hotelId}/rooms/create`)
    handleClearState();
  }

  if (hotelId === undefined) {
    return <NotFoundPage />
  }

  const handleEditRoom = (roomId: number) => {
    if (Number(hotelId) !== hotel.id) {
      return <NotFoundPage />
    }
    navigate(`/api/hotels/${hotelId}/rooms/edit/${roomId}`)
  }

  const handleDetailRoom = (roomId: number) => {
    navigate(`/api/hotels/${hotelId}/rooms/${roomId}`)
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


          <Table>
            <TableContent type="header" columns={`repeat(5, 1fr) 3fr repeat(2, 1fr)`} >
              <Td >Number room</Td>
              <Td >Room type</Td>
              <Td >Basic Cost</Td>
              <Td >Taxes</Td>
              <Td >Capacity</Td>
              <Td >Actions</Td>
              <Td >Status</Td>
              <Td >date reservation</Td>
            </TableContent>

            {
              hotel.rooms?.map(hotelRoom => (
                rooms.map(room => hotelRoom.id === room.id && (

                  <TableContent type="row" key={room.id} columns={`repeat(10, 1fr)`} >
                    <Td  >{room.numberRoom}</Td>
                    <Td  >{room.roomType}</Td>
                    <Td  >${`${room.basisCost}`}</Td>
                    <Td  >{`${room.taxes * 100}`}%</Td>

                    <Td  >{`${room.capacity}`} person</Td>
                    <Td  > <Button
                      label='detail'
                      size='toTable'
                      backgroundColor='green'
                      onClick={() => handleDetailRoom(room.id!)}

                    /></Td>
                    <Td  ><Button
                      label='edit'
                      size='toTable'
                      backgroundColor='blue'
                      onClick={() => handleEditRoom(room.id!)}

                    /></Td>
                    {
                      room.isActive
                        ?
                        <Td  ><Button
                          label='delete'
                          size='toTable'
                          backgroundColor='red'
                          onClick={() => handleDeleteRoom(room.id!, false)}

                        /></Td>
                        :
                        <Td  > <Button
                          label='activate'
                          size='toTable'
                          backgroundColor='primary-dark'
                          onClick={() => handleDeleteRoom(room.id!, true)}

                        /></Td>
                    }
                    <Td  >{room.isActive ? 'active' : 'inactive'}</Td>

                    {
                      Number(room.finalDate) - Number(room.initialDate) > 0
                        ? <Td> {`${convertDate(Number(room.initialDate))}  -  ${convertDate(Number(room.finalDate))}`} </Td>
                        : <Td>free</Td>
                    }
                  </TableContent>
                ))
              ))
            }
          </Table>
      }
      <div>
        <Button
          label='create rooms'
          backgroundColor='blue'
          margin='1rem 1rem 1rem 0'
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