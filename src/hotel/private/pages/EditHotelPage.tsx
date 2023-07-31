import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useForm } from '../../../hooks/useForm';
import { useHotels } from '../hooks/useHotels';

import { Button, Spinner } from '../../../utils/components';
import NotFoundPage from '../../../user/public/pages/notFoundPage';

import { CreateOrEditHotelForm } from '../components/CreateOrEditHotelForm';

function EditHotelPage() {

  const [error, setError] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const { hotel, isLoading, handlerClearState, getHotel } = useHotels();
  const { formState, isFormSubmitted, isTouched,
    handleBlur, handlerFieldChange, areFieldsValid } = useForm(hotel);

  useEffect(() => {
    if (id === undefined) return;
    getHotel(id).
      then()
      .catch((error) => setError(true))
  }, [id, getHotel]);
  
  const handleCreateRoom = () => {
    if (id === undefined) return;
    navigate(`/api/hotels/${id}/rooms/create`)
    handlerClearState();
  }

  const formProps = {
    id,
    city: formState.city,
    description: formState.description,
    name: formState.name,
    isFormSubmitted,
    isTouched,
    handleBlur,
    handlerFieldChange,
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
              margin='1rem 0'
              backgroundColor='blue'
              onClick={handleCreateRoom}
            />
          </div>
        </div>
  )
}

export default EditHotelPage