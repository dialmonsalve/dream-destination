import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { useHotels, useForm, useValidationSchema } from '../../../hooks';

import NotFoundPage from '../../notFoundPage';
import { Button } from '../../../components/ui/Button';
import { ErrorMessage } from '../../../components/ui/ErrorMessage';
import { FormControl } from '../../../components/ui/FormControl';
import { Spinner } from '../../../components/ui/Spinner';

import { Hotel } from '../../../interfaces/types';

interface FormValidationResult {
  [key: string]: string[];
}


function EditHotelPage() {

  const [error, setError] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const { hotel, isLoading, handlerClearState, getHotel, updateHotel } = useHotels();
  const { newHotelSchema } = useValidationSchema();
  const { formState, formValidation, isFormSubmitted, onFieldChange, onFormSubmitted, onResetForm } = useForm(hotel, newHotelSchema);

  useEffect(() => {
    if (id === undefined) return;

    getHotel(id).
      then()
      .catch(error => setError(true))
  }, [id, getHotel]);

  const { name, city, description } = formState as Hotel
  const { cityValid, nameValid } = formValidation as FormValidationResult;

  const isFormValid = cityValid || nameValid ? true : false

  const handleBack = () => {
    handlerClearState()
    navigate('/api/hotels/')
  }
  if (id === undefined) return;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onFormSubmitted();

    const updatedHotel: Hotel = {
      name,
      city,
      description,
    }
    if (!city || !name) return;
    
    updateHotel(id, updatedHotel).then().catch(e => console.log(e))
    onResetForm()
    navigate('/api/hotels/')
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
            <form className='create-hotel__form' onSubmit={onSubmit} >
              <div className='create-hotel__form--hotel'>
                <FormControl
                  label='hotel name'
                  name='name'
                  type='text'
                  value={name || ''}
                  onChange={onFieldChange}
                />
                <FormControl
                  label='city'
                  name='city'
                  type='text'
                  value={city || ''}
                  onChange={onFieldChange}
                />

                <FormControl
                  label='description'
                  name='description'
                  type='text'
                  value={description || ''}
                  onChange={onFieldChange}
                />
              </div>

              <div className='create-hotel__form--buttons' >

                <Button
                  margin='2rem 2rem 0 2rem'
                  label='edit hotel'
                  disabled={isFormValid}
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
              fieldName={nameValid}
              isFormSubmitted={isFormSubmitted}
            />
            <ErrorMessage
              fieldName={cityValid}
              isFormSubmitted={isFormSubmitted}
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