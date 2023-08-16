import { useNavigate } from "react-router-dom";
import { Hotel, Room } from "../../../types";
import { useRoom } from "../hooks/useRoom";
import NotFoundPage from "../../public/pages/notFoundPage";
import { Button } from "../../../ui";
import { convertDate } from "../../../helpers/convertDate";
import { TableHeader, Row, Table, Td } from "../../../ui/Table";
import { ReactNode, useState } from "react";
import { FormEditStatusRoom } from "../../components/FormEditStatusRoom";

interface CardProps {
  hotel: Hotel;
  handleClearState: () => void,
  rooms: Room[];
  hotelId: string | undefined
}

export const PrivateDetailHotelPage = ({ hotel, rooms, hotelId, handleClearState }: CardProps) => {

  const [components, setComponents] = useState<ReactNode[]>([])
  const navigate = useNavigate();
  const { handleToggleModal, cleanStatus } = useRoom();

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

  const changeStatusForm = (roomId: number, numberRoom: string) => {

    handleToggleModal();
    cleanStatus();

    setComponents((prevComponents) => [
      <FormEditStatusRoom
        key={prevComponents.length}
        roomId={roomId}
        numberRoom={numberRoom}
      />
    ]);
  }

  return (
    <>
      <h1 className="private-container__title" >{hotel.name}</h1>
      <h2 className="private-container__subtitle" >City: {hotel.city}</h2>
      {
        hotel.rooms?.length === 0 ? <h2 className='h2'>There's no rooms create yet</h2> :


          <Table>
            <TableHeader >
              <Td >Number room</Td>
              <Td >Room type</Td>
              <Td >Basic Cost</Td>
              <Td textAlign='center' >Taxes</Td>
              <Td textAlign='center'>Capacity</Td>
              <Td colSpan={3} textAlign='center' >Actions</Td>
              <Td >Status</Td>
              <Td >date reservation</Td>
            </TableHeader>
            <tbody>
              {
                hotel.rooms?.map(hotelRoom => (
                  rooms.map(room => hotelRoom.id === room.id && (

                    <Row key={room.id} >
                      <Td  >{room.numberRoom}</Td>
                      <Td  >{room.roomType}</Td>
                      <Td  >${`${room.basisCost}`}</Td>
                      <Td textAlign='center'  >{`${room.taxes * 100}`}%</Td>

                      <Td textAlign='center'   >{`${room.capacity}`} person</Td>
                      <Td  > <Button
                        label='detail'
                        size='small'
                        backgroundColor='green'
                        onClick={() => handleDetailRoom(room.id!)}

                      /></Td>
                      <Td  ><Button
                        label='edit'
                        size='small'
                        backgroundColor='blue'
                        onClick={() => handleEditRoom(room.id!)}

                      /></Td>
                      <Td  > <Button
                        label='status'
                        size='small'
                        backgroundColor='primary-dark'
                        onClick={() => changeStatusForm(room.id!, room.numberRoom)}
                      /></Td>
                      <Td  >{room.statusRoom}</Td>

                      {
                        Number(room.finalDate) - Number(room.initialDate) > 0
                          ? <Td> {`${convertDate(Number(room.initialDate))}  -  ${convertDate(Number(room.finalDate))}`} </Td>
                          : <Td>No reservation</Td>
                      }
                    </Row>
                  ))
                ))
              }
            </tbody>
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
      {components.map((component) => component)}

    </>
  )
}