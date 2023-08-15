import { useHotel } from "../../../hotel/private/hooks/useHotel";
import { Row, Table, TableHeader, Td } from "../../../ui/Table"
import { useReservation } from "../../hooks/useReservation"
import { useRoom } from "../../../hotel/private/hooks/useRoom";
import { convertDate } from "../../../helpers/convertDate";
import { Button, Spinner } from "../../../ui";

export const PrivateSummaryReservation = () => {

  const { reservations, isLoading } = useReservation();
  const { hotels } = useHotel();
  const { rooms  } = useRoom();

  if(isLoading === 'loading'){
    return <Spinner type="half-circle" />
  }

  const getHotelCity = (reservationId: number) => hotels.find(hotel => Number(hotel.id) === Number(reservationId))?.city

  const getNumberRoom = (reservationId: number) => rooms.find(room => Number(room.id) === Number(reservationId))?.numberRoom;
 
  return (
    <>
      <h1 className='private-container__title' >Reservations</h1>
      <Table >
        <TableHeader>
          <Td textAlign="center" >Reservation No</Td>
          <Td textAlign="center" >client</Td>
          <Td textAlign="center" >phone</Td>
          <Td textAlign="center" >Hotel city</Td>
          <Td textAlign="center" >Room</Td>
          <Td textAlign="center" >Initial date</Td>
          <Td textAlign="center" >Final date</Td>
          <Td textAlign="center" >total days</Td>
          <Td textAlign="center" >Emergencia name</Td>
          <Td textAlign="center" >phone</Td>
          <Td textAlign="center" >Actions</Td>
        </TableHeader>
        <tbody>
          {
            reservations.map(reservation => (
              <Row key={reservation.id} >
                <Td textAlign="center" >{reservation.id}</Td>
                <Td>{reservation.clientName} {reservation.lastName} </Td>
                <Td>{reservation.phone}</Td>
                <Td>{getHotelCity(reservation.hotelId)}</Td>
                <Td textAlign="center">{getNumberRoom(reservation.hotelId)}</Td>
                <Td>{convertDate(Number(reservation.initialDate))}</Td>
                <Td>{convertDate(Number(reservation.finalDate))}</Td>
                <Td textAlign="center" >{reservation.totalDays}</Td>
                <Td>{reservation.emergencyContact}</Td>
                <Td>{reservation.emergencyPhone}</Td>
                <Td><Button label="detail" size="small" backgroundColor="green"  /></Td>
              </Row>
            ))
          }
        </tbody>
      </Table>
    </>
  )
}
