import { useNavigate } from 'react-router-dom';

import { useHotels } from '../../../hooks';

import { Button } from '../../../components/ui/Button'
import { Spinner } from '../../../components/ui/Spinner';

export const StaffHotels = () => {

  const navigate = useNavigate();

  const { hotels, isLoading, deleteHotel, activateHotel } = useHotels()

  const handleCreateHotel = () => {
    navigate('/api/hotels/create')
  }

  const handleEditHotel = (id: number) => {
    navigate(`/api/hotels/${id}`)
  }

  const handleDetailHotel = (id: number) => {
    navigate(`/api/hotels/detail/${id}`)
  }

  const handleDeleteHotel = (id: number) => {
    deleteHotel(id).then().catch(error => console.log(error))
  }

  const handleActiveHotel = (id: number) => {
    activateHotel(id).then().catch(error => console.log(error))
  }


  return (
    isLoading === 'loading' ? <Spinner type='long-play' /> :

      <div className='staff-hotels'>
        <h1 className='staff-hotels__title' >Hotels</h1>
        <Button
          label='create'
          hasBackground={false}
          backgroundColor='green'
          margin='-2rem 10rem'
          onClick={handleCreateHotel}
        />
        <table className='staff-hotels__table' >
          <thead>
            <tr>
              <th>name</th>
              <th>city</th>
              <th>total rooms</th>
              <th>edit</th>
              <th>detail</th>
              <th>delete</th>
              <th>status</th>
              <th>Active</th>
            </tr>
          </thead>
          <tbody>

            {
              hotels.map(hotel => (

                <tr key={hotel.id} >
                  <td>{hotel.name}</td>
                  <td>{hotel.city}</td>
                  <td>{hotel.rooms?.length}</td>

                  <td><Button
                    backgroundColor='blue'
                    size='small'
                    label='edit'
                    onClick={() => handleEditHotel(hotel.id!)}
                  /></td>
                  <td><Button
                    backgroundColor='green'
                    size='small'
                    label='detail'
                    onClick={() => handleDetailHotel(hotel.id!)}
                  /></td>
                  {
                    hotel.active ?
                      <td><Button
                        backgroundColor='red'
                        size='small'
                        label='delete'
                        onClick={() => handleDeleteHotel(hotel.id!)}
                      /></td> : <td></td>
                  }
                  <td>{hotel.active ? 'active' : 'inactive'}</td>
                  {
                    !hotel.active ?
                      <td>
                        <Button
                          backgroundColor='primary-dark'
                          size='small'
                          label='active'
                          onClick={() => handleActiveHotel(hotel.id!)}
                        /></td>
                      : <td> </td>
                  }
                </tr>
              ))
            }
          </tbody>

        </table>
      </div>
  )
}
