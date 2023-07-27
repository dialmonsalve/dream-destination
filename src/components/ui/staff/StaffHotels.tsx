import { useNavigate } from "react-router-dom"
import { Button } from "../Button"

export const StaffHotels = () => {

  const navigate = useNavigate()

  const handleCreateHotel = ()=>{
    navigate('/api/hotels/create')
  }

  return (
    <div className="staff-hotels">
      <h1 className="staff-hotels__title" >Hotels</h1>
      <Button
        label="create"
        hasBackground={false}
        backgroundColor="green"
        margin="-2rem 10rem"
        onClick={handleCreateHotel}
      />
      <table className='staff-hotels__table' >
      <thead>
        <tr>
          <th>name</th>
          <th>city</th>
          <th>total rooms</th>
          <th>Available rooms</th>
          <th>edit</th>
          <th>delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
          <td><Button backgroundColor="blue" label="edit" hasBackground={false}  /></td>
          <td><Button backgroundColor="red" label="delete" hasBackground={false}  /></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>Total</th>
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
