import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useForm } from '../../../hooks/useForm';
import { useHotel } from '../hooks/useHotel';

import NotFoundPage from '../../public/pages/notFoundPage';
import { Button, Spinner } from '../../../ui';

import { CreateOrEditHotelForm } from '../components/CreateOrEditHotelForm';

function EditHotelPage() {

  const [error, setError] = useState(false);
  const { hotelId } = useParams();
  const navigate = useNavigate();

  const { hotel, isLoading, handleClearState, getHotel } = useHotel();
  const { formState, isFormSubmitted, isTouched,
    handleBlur, handleFieldChange, areFieldsValid } = useForm(hotel);

  useEffect(() => {
    if (hotelId === undefined) return;
    getHotel(hotelId).
      then()
      .catch((error) => setError(true))
  }, [hotelId, getHotel]);
  
  const handleCreateRoom = () => {
    if (hotelId === undefined) return;
    navigate(`/api/hotel/${hotelId}/rooms/create`)
    handleClearState();
  }

  const formProps = {
    id:hotelId,
    city: formState.city,
    description: formState.description,
    name: formState.name,
    isFormSubmitted,
    isTouched,
    handleBlur,
    handleFieldChange,
    areFieldsValid
  }

  return (
    isLoading === 'loading' ? <Spinner type='long-play' /> :

      error ? <NotFoundPage /> :
        <div className='create-hotel'>
          <div className='create-hotel__container' >
            <h1 className='create-hotel__container--title'>Edit Hotel</h1>

            <CreateOrEditHotelForm
              isCreate={false}
              formProps={formProps}
              formState={formState}
            />
            <Button
              label='create rooms'
              backgroundColor='blue'
              onClick={handleCreateRoom}
              margin='0 0 0 2rem'
            />
          </div>
        </div>
  )
}

export default EditHotelPage