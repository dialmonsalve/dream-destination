
export const PrivateSummaryReservation = () => {
  return (
    <div className='staff-hotels'>
      <h1 className='staff-hotels__title' >Reservations</h1>
      <table className='staff-hotels__table' >
        <thead>
          <tr>
            <th>Reservation No</th>
            <th>client</th>
            <th>phone</th>
            <th>Hotel city</th>
            <th>Room</th>
            <th>Initial date</th>
            <th>Final date</th>
            <th>total days</th>
            <th>Emergencia name</th>
            <th>phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2806565</td>
            <td>Jhon Doe</td>
            <td>320859595</td>
            <td>Juarez</td>
            <td>204</td>
            <td>05/01/2022</td>
            <td>10/01/2022</td>
            <td>5</td>
            <td>Pepe el toto</td>
            <td>6589595</td>
          </tr>
          <tr>
          <td>2806565</td>
            <td>Jhon Doe</td>
            <td>320859595</td>
            <td>Juarez</td>
            <td>204</td>
            <td>05/01/2022</td>
            <td>10/01/2022</td>
            <td>5</td>
            <td>Pepe el toto</td>
            <td>6589595</td>
          </tr>         
        </tbody>
        <tfoot>
          <tr>
            <th>Total</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>$10,500.00</th>
            <th>$10,500.00</th>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
