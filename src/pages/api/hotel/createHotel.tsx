import { ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useValidationSchema, useForm, useHotels } from '../../../hooks';

import { Button } from '../../../components/ui/Button';
import { ErrorMessage } from '../../../components/ui/ErrorMessage';
import { FormControl } from '../../../components/ui/FormControl';
import { ResumeHotel } from '../../../components/ui/staff/ResumeHotel';

import { Spinner } from '../../../components/ui/Spinner';
import { Hotel, InitialForm } from '../../../interfaces/types';

interface NewHotelForm extends InitialForm {
  name: string,
  city: string
  description?: string
}

interface FormValidationResult {
  [key: string]: string[];
}

const newHotelForm: NewHotelForm = {
  name: '',
  city: '',
  description: ''
}

function NewHotelPage() {
  const [components, setComponents] = useState<ReactNode[]>([]);
  const navigate = useNavigate();
  const { createHotel, isLoading } = useHotels()
  const { newHotelSchema } = useValidationSchema();
  const {
    formState,
    formValidation,
    isFormSubmitted,
    onFieldChange,
    onResetForm,
    onFormSubmitted,
    onEndSubmitted
  } = useForm(newHotelForm, newHotelSchema);

  const { city, name, description } = formState as NewHotelForm;
  const { cityValid, nameValid } = formValidation as FormValidationResult;

  const isFormValid = cityValid || nameValid ? true : false

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    onFormSubmitted();
    const newHotel: Hotel = {
      name,
      city,
      description,
      active: true,
      rooms: []
    }
    if (!city || !name) return;

    try {
      const createdHotel = await createHotel(newHotel);

      if (createdHotel.id === undefined) return;

      handleAddComponent(createdHotel.id)
    } catch (error) {
      console.log(error);

    } finally {
      onResetForm()
      onEndSubmitted()
    }

  }

  const handleBack = () => {
    navigate('/api/hotels/');
  }

  const handleAddComponent = (id: number) => {
    setComponents((prevComponents) => [
      <div key={prevComponents.length} >
        {isLoading === 'loading' && <Spinner />}
        <ResumeHotel
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
        <form className='create-hotel__form' onSubmit={onSubmit} >
          <div className='create-hotel__form--hotel'>
            <FormControl
              label='hotel name'
              name='name'
              type='text'
              value={name}
              onChange={onFieldChange}
            />
            <FormControl
              label='city'
              name='city'
              type='text'
              value={city}
              onChange={onFieldChange}
            />

            <FormControl
              label='description'
              name='description'
              type='text'
              value={description}
              onChange={onFieldChange}
            />

          </div>

          <div className='create-hotel__form--buttons' >

            <Button
              margin='2rem 2rem 0 2rem'
              label='create hotel'
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
        {components.map((component) => component)}
      </div>
    </div>
  )
}
export default NewHotelPage;