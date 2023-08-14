import { useNavigate } from 'react-router-dom';

import { useHotel } from '../hooks/useHotel';
import { Button, Spinner } from '../../../ui';
import { TableContent, Table, Td } from '../../../ui/Table';

export const PrivateHotelsPage = () => {

  const navigate = useNavigate();

  const { hotels, isLoading, toggleActiveHotel } = useHotel()

  const handleCreateHotel = () => {
    navigate('/api/hotels/create')
  }

  const handleEditHotel = (id: number) => {
    navigate(`/api/hotels/edit/${id}`)
  }

  const handleDetailHotel = (id: number) => {
    navigate(`/api/hotels/${id}`)
  }

  const handleDeleteHotel = (id: number, active: boolean) => {
    toggleActiveHotel(id, active).then().catch(error => console.log(error))
  }

  if(isLoading === 'loading'){
    return <Spinner type='half-circle' />
  }


  return (
    <>
        <h1 className="private-container__title" >Hotels</h1>
        <div>
          <Button
            label='create'
            margin='0 0 2rem 0'
            hasBackground={false}
            backgroundColor='green'
            onClick={handleCreateHotel}
          />
        </div>

        <Table>
          <TableContent type='header' columns={`repeat(3, 1fr) 3fr 1fr`}>
            <Td >name</Td>
            <Td >city</Td>
            <Td >total rooms</Td>
            <Td >Actions</Td>
            <Td >status</Td>
          </TableContent>
          {
            hotels.map(hotel => (
              <TableContent type='row' key={hotel.id} columns={`repeat(7, 1fr)`} >
                <Td >{hotel.name}</Td>
                <Td >{hotel.city}</Td>
                <Td >{hotel.rooms?.length.toString()}</Td>

                <Td > <Button
                  backgroundColor='blue'
                  size='toTable'
                  label='edit'
                  onClick={() => handleEditHotel(hotel.id!)}

                /></Td>
                <Td ><Button
                  backgroundColor='green'
                  size='toTable'
                  label='detail'
                  onClick={() => handleDetailHotel(hotel.id!)}

                /></Td>
                {
                  hotel.active ?
                    <Td > <Button
                      backgroundColor='red'
                      size='toTable'
                      label='delete'
                      onClick={() => handleDeleteHotel(hotel.id!, false)}

                    /></Td>
                    :
                    <Td > <Button
                      backgroundColor='primary-dark'
                      size='toTable'
                      label='activate'
                      onClick={() => handleDeleteHotel(hotel.id!, true)}

                    /></Td>
                }
                <Td >{hotel.active ? 'active' : 'inactive'}</Td>
              </TableContent>
            ))}
        </Table>
      </>
  )
}
