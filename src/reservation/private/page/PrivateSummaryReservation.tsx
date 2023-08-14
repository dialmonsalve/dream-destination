import { Table, TableContent, Td } from "../../../ui/Table"

export const PrivateSummaryReservation = () => {
  return (
    <>
      <h1 className='private-container__title' >Reservations</h1>
      <Table >

        <TableContent type="header" columns="repeat(10, 1fr)" >
          <Td>Reservation No</Td>
          <Td>client</Td>
          <Td>phone</Td>
          <Td>Hotel city</Td>
          <Td>Room</Td>
          <Td>Initial date</Td>
          <Td>Final date</Td>
          <Td>total days</Td>
          <Td>Emergencia name</Td>
          <Td>phone</Td>
        </TableContent>

        <TableContent type="row" columns="repeat(10, 1fr)">
          <Td>sdfasdfsdaf</Td>
          <Td>Jhon Doe</Td>
          <Td>320859595</Td>
          <Td>Juarez</Td>
          <Td>204</Td>
          <Td>05/01/2022</Td>
          <Td>10/01/2022</Td>
          <Td>5</Td>
          <Td>Pepe el toto</Td>
          <Td>6589595</Td>
        </TableContent>
        <TableContent type="row" columns="repeat(10, 1fr)">
          <Td>2806565</Td>
          <Td>Jhon Doe</Td>
          <Td>320859595</Td>
          <Td>Juarez</Td>
          <Td>204</Td>
          <Td>05/01/2022</Td>
          <Td>10/01/2022</Td>
          <Td>5</Td>
          <Td>Pepe el toto</Td>
          <Td>6589595</Td>
        </TableContent>
      </Table>
    </>
  )
}
