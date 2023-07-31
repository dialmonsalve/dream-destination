import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useForm } from '../../../hooks/useForm';
import { useHotels } from '../hooks/useHotels';

import { formValidator, validationSchema } from '../../../utils/helpers';
import { Button, FormControl, ErrorMessage, Spinner } from '../../../utils/components';
import NotFoundPage from '../../../user/public/pages/notFoundPage';

import { Hotel } from '../../../types/hotel';

function EditHotelPage() {

  const [error, setError] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const { hotel, isLoading, handlerClearState, getHotel, updateHotel } = useHotels();
  const { newHotelValidationSchema } = validationSchema();
  const { formState, isFormSubmitted, isTouched, handleBlur, onFieldChange, areFieldsValid } = useForm(hotel);

  useEffect(() => {
    if (id === undefined) return;

    getHotel(id).
      then()
      .catch(error => setError(true))
  }, [id, getHotel]);

  const { name, city, description } = formState

  const errors = formValidator().getErrors(formState, newHotelValidationSchema);

  const handleBack = () => {
    handlerClearState()
    navigate('/api/hotels/')
  }
  if (id === undefined) return;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const updatedHotel: Hotel = {
      name,
      city,
      description,
    }
    if (areFieldsValid(errors)) {
      updateHotel(id, updatedHotel).then().catch(e => console.log(e))
      navigate('/api/hotels/')
    }
  }

  const handleCreateRoom = () => {
    navigate(`/api/hotels/${id}/rooms/create`)
    handlerClearState();
  }

  return (
    isLoading === 'loading' ? <Spinner type='long-play' /> :

      error ? <NotFoundPage /> :
        <div className='create-hotel'>
          <div className='create-hotel__container' >
            <h1 className='create-hotel__container--title'>Edit Hotel</h1>
            <form className='create-hotel__form' onSubmit={handleSubmit} >
              <div className='create-hotel__form--hotel'>
                <FormControl
                  label='hotel name'
                  name='name'
                  type='text'
                  value={name || ''}
                  onChange={onFieldChange}
                  onBlur={handleBlur}
                />
                <FormControl
                  label='city'
                  name='city'
                  type='text'
                  value={city || ''}
                  onChange={onFieldChange}
                  onBlur={handleBlur}
                />

                <FormControl
                  label='description'
                  name='description'
                  type='text'
                  value={description || ''}
                  onChange={onFieldChange}
                  onBlur={handleBlur}
                />
              </div>

              <div className='create-hotel__form--buttons' >

                <Button
                  margin='2rem 2rem 0 2rem'
                  label='edit hotel'
                  disabled={!!errors}
                  type='submit'
                />

                <Button
                  margin='2rem 2rem 0 2rem'
                  label='back'
                  backgroundColor='red'
                  onClick={handleBack}
                />
              </div>
            </form>
            <ErrorMessage
              fieldName={errors?.name}
              isFormSubmitted={isFormSubmitted}
              isTouched={isTouched?.name}
            />
            <ErrorMessage
              fieldName={errors?.city}
              isFormSubmitted={isFormSubmitted}
              isTouched={isTouched?.city}
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