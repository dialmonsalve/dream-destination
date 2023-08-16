import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useForm } from '../../../hooks/useForm';
import { useHotel } from '../hooks/useHotel';

import NotFoundPage from '../../public/pages/notFoundPage';
import { Button, Spinner } from '../../../ui';

import { CreateOrEditHotelForm } from '../components/CreateOrEditHotelForm';

export function Component() {

  const [error, setError] = useState(false);
  const { hotelId } = useParams();
  const navigate = useNavigate();

  const { hotel, isLoading, handleClearState, getHotel, } = useHotel();
  const { formState, isFormSubmitted, isTouched,
    handleBlur, handleFieldChange, areFieldsValid } = useForm(hotel);

    console.log(isLoading);

  useEffect(() => {
    if (hotelId === undefined) return;
    getHotel(hotelId).
      then()
      .catch((error) => setError(true))
  }, [hotelId, getHotel]);

  const handleCreateRoom = () => {
    handleClearState();
    if (hotelId === undefined) return;
    navigate(`/api/hotels/${hotelId}/rooms/create`)
  }

  const formProps = {
    id: hotelId,
    city: formState.city,
    description: formState.description,
    name: formState.name,
    isFormSubmitted,
    isTouched,
    handleBlur,
    handleFieldChange,
    areFieldsValid
  }
  

  if(isLoading === 'loading'){
    return <Spinner type='half-circle' />
  }

  return (

      error ? <NotFoundPage /> :
        <div className='create-hotel__container'>
          <h1 className="private-container__title">Edit Hotel</h1>

          <CreateOrEditHotelForm
            isCreate={false}
            formProps={formProps}
            formState={formState}
          />
          <Button
            label='create rooms'
            backgroundColor='green'
            onClick={handleCreateRoom}
            margin='0 0 0 2rem'
            size='small'
          />
        </div>
  )
}

Component.displayName = "EditHotelPage";