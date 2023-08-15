import { ReactNode, useState } from 'react';

import { useHotel } from '../hooks/useHotel';
import { useForm } from '../../../hooks/useForm';

import { PrivateResumeHotelView } from '../views/PrivateResumeHotelView';
import { Spinner } from '../../../ui';

import { Hotel } from '../../../types/hotel';
import { CreateOrEditHotelForm } from '../components/CreateOrEditHotelForm';

const hotel: Hotel = {
  name: '',
  city: '',
  description: ''
}

export function Component() {

  const {
    formState,
    isFormSubmitted,
    isTouched,
    areFieldsValid,
    handleBlur,
    handleResetForm,
    handleFieldChange,
  } = useForm(hotel);

  const [components, setComponents] = useState<ReactNode[]>([]);
  const { isLoading } = useHotel();

  const { city, name, description } = formState;

  const formProps = {
    city,
    description,
    name,
    isFormSubmitted,
    isTouched,
    areFieldsValid,
    handleBlur,
    handleFieldChange,
    handleResetForm
  }

  const handleAddComponent = (id: number) => {
    setComponents((prevComponents) => [
      <div key={prevComponents.length} >

        {isLoading === 'loading' && <Spinner />}
        <PrivateResumeHotelView
          isCreating
          id={id}
          name={name}
          city={city}
          classBase={'hotel-created'}
        />
      </div>

    ]);
  };

  if (isLoading === 'loading') {
    return <Spinner type='half-circle' />
  }

  return (
    <>
      <div className='create-hotel__container' >
        <h1 className='private-container__title' >Create Hotel</h1>

        <CreateOrEditHotelForm
          isCreate={true}
          formProps={formProps}
          handleAddComponent={handleAddComponent}
          formState={formState}
        />
        {components.map((component) => component)}
      </div>
    </>
  )
}
Component.displayName = "CreateHotelPage";