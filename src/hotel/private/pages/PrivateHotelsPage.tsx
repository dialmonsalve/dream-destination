import { useNavigate } from 'react-router-dom';

import { useHotel } from '../hooks/useHotel';
import { Button, Spinner } from '../../../ui';
import { TableHeader, Table, Td, Row } from '../../../ui/Table';

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

  if (isLoading === 'loading') {
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
        <TableHeader  >
          <Td >name</Td>
          <Td >city</Td>
          <Td textAlign='center' >total rooms</Td>
          <Td colSpan={3} textAlign='center'  >Actions</Td>
          <Td >status</Td>
        </TableHeader>
        <tbody>
          {
            hotels.map(hotel => (
              <Row key={hotel.id} >
                <Td >{hotel.name}</Td>
                <Td >{hotel.city}</Td>
                <Td textAlign='center' >{hotel.rooms?.length.toString()}</Td>

                <Td > <Button
                  backgroundColor='blue'
                  size='small'
                  label='edit'
                  onClick={() => handleEditHotel(hotel.id!)}

                /></Td>
                <Td ><Button
                  backgroundColor='green'
                  size='small'
                  label='detail'
                  onClick={() => handleDetailHotel(hotel.id!)}

                /></Td>
                {
                  hotel.active ?
                    <Td > <Button
                      backgroundColor='red'
                      size='small'
                      label='delete'
                      onClick={() => handleDeleteHotel(hotel.id!, false)}

                    /></Td>
                    :
                    <Td > <Button
                      backgroundColor='primary-dark'
                      size='small'
                      label='activate'
                      onClick={() => handleDeleteHotel(hotel.id!, true)}

                    /></Td>
                }
                <Td >{hotel.active ? 'active' : 'inactive'}</Td>
              </Row>
            ))}
        </tbody>
      </Table>
    </>
  )
}
