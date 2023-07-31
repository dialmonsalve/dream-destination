import { ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useHotels } from '../hooks/useHotels';
import { useForm } from '../../../hooks/useForm';

import {  PrivateResumeHotelView} from '../views/PrivateResumeHotelView';
import { Button, ErrorMessage, FormControl, Spinner, } from '../../../utils/components';

import { formValidator, validationSchema } from '../../../utils/helpers';

import { Hotel }  from '../../../types/hotel';

const newHotelForm: Hotel = {
  name: '',
  city: '',
  description: ''
}

function CreateHotelPage() {

  const {
    formState, isFormSubmitted, isTouched,
    areFieldsValid, handleBlur, handleResetForm, onFieldChange, } = useForm(newHotelForm);
  const [components, setComponents] = useState<ReactNode[]>([]);
  const navigate = useNavigate();
  const { createHotel, isLoading } = useHotels()

  const { newHotelValidationSchema } = validationSchema();

  const { city, name, description } = formState;

  const errors = formValidator().getErrors(formState, newHotelValidationSchema);

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newHotel: Hotel = {
      name,
      city,
      description,
      active: true,
      rooms: []
    }
    if (areFieldsValid(errors)) {

      createHotel(newHotel).then(data => {

        handleAddComponent(data.id as number)

      }).catch(e => console.log(e))

    }
    handleResetForm();

  }

  const handleBack = () => {
    navigate('/api/hotels/');
  }

  const handleAddComponent = (id: number) => {
    setComponents((prevComponents) => [
      <div key={prevComponents.length} >
        {isLoading === 'loading' && <Spinner />}
        <PrivateResumeHotelView
          id={id}
          name={name}
          city={city}
          classBase={'created'}
        />
      </div>

    ]);
  };
  return (

    <div className='create-hotel'>
      <div className='create-hotel__container' >
        <h1 className='create-hotel__container--title'>Create Hotel</h1>
        <form className='create-hotel__form' onSubmit={handlerSubmit} >
          <div className='create-hotel__form--hotel'>

            <div>
              <FormControl
                label='hotel name'
                name='name'
                type='text'
                value={name}
                onChange={onFieldChange}
                onBlur={handleBlur}
              />
              <ErrorMessage
                fieldName={errors?.name}
                isFormSubmitted={isFormSubmitted}
                isTouched={isTouched?.name}
              />

            </div>

            <div>
              <FormControl
                label='city'
                name='city'
                type='text'
                value={city}
                onChange={onFieldChange}
                onBlur={handleBlur}
              />
              <ErrorMessage
                fieldName={errors?.city}
                isFormSubmitted={isFormSubmitted}
                isTouched={isTouched?.city}
              />
            </div>

            <FormControl
              label='description'
              name='description'
              type='text'
              value={description}
              onChange={onFieldChange}
              onBlur={handleBlur}
            />

          </div>

          <div className='create-hotel__form--buttons' >

            <Button
              margin='2rem 2rem 0 2rem'
              label='create hotel'
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
        {components.map((component) => component)}
      </div>
    </div>
  )
}
export default CreateHotelPage;