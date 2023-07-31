import { useNavigate } from "react-router-dom";
import { Hotel } from "../../../types/hotel";
import { Button, ErrorMessage, FormControl } from "../../../utils/components";

import {
  ErrorMessages, IsTouched, ReactChangeEvent, ReactFocusEvent, ReactFormEvent
} from "../../../types";
import { useHotels } from "../hooks/useHotels";

import { formValidator, validationSchema } from "../../../utils/helpers";


interface FormProps {
  id?: string
  name: string
  handlerFieldChange: ((e: ReactChangeEvent) => void)
  handleBlur: ((e: ReactFocusEvent) => void)
  city: string;
  description: string | undefined;
  isFormSubmitted: boolean;
  isTouched: IsTouched;
  areFieldsValid: (errors: ErrorMessages<Hotel> | undefined) => boolean
  handleResetForm?: () => void
}

interface CreateOrEditHotelProps {
  isCreate: boolean;
  formProps: FormProps;
  handleAddComponent?: (id: number) => void
  formState: Hotel
}

export const CreateOrEditHotelForm = ({ isCreate, formProps, handleAddComponent, formState }: CreateOrEditHotelProps) => {

  const {
    city, description, isFormSubmitted, isTouched, name, id,
    areFieldsValid, handlerFieldChange, handleBlur, handleResetForm } = formProps;

  const { createHotel, updateHotel, handlerClearState } = useHotels();
  const navigate = useNavigate();

  const { newHotelValidationSchema } = validationSchema();
  const errors = formValidator().getErrors(formState, newHotelValidationSchema);

  const createOrEditName = (isCreate ? name : name || '');
  const createOrEditCity = (isCreate ? city : city || '');
  const createOrEditDescription = (isCreate ? description : description || '');
  const title = isCreate ? 'create' : 'edit';

  const handleSubmit = (e: ReactFormEvent) => {
    e.preventDefault();

    if (areFieldsValid(errors)) {

      if (isCreate) { // if the user creates a hotel
        const newHotel: Hotel = {
          name,
          city,
          description,
          active: true,
          rooms: []
        }

        createHotel(newHotel).then(data => {
          if (handleAddComponent === undefined) return;
          handleAddComponent(data.id as number)
        }).catch(e => console.log(e))
        handleResetForm!();

      } else { // if the user edits a hotel
        const updatedHotel: Hotel = {
          name,
          city,
          description,
        }
        updateHotel(id!, updatedHotel).then().catch(e => console.log(e))
        navigate(-1)
      }
    }
  }

  const handleBack = () => {
    handlerClearState()
    navigate(-1)
  }

  return (
    <form className='create-hotel__form' onSubmit={handleSubmit} >
      <div className='create-hotel__form--hotel'>

        <div>
          <FormControl
            label='hotel name'
            name='name'
            type='text'
            value={createOrEditName}
            onChange={handlerFieldChange}
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
            value={createOrEditCity}
            onChange={handlerFieldChange}
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
          value={createOrEditDescription}
          onChange={handlerFieldChange}
          onBlur={handleBlur}
        />
      </div>

      <div className='create-hotel__form--buttons' >
        <Button
          margin='2rem 2rem 0 2rem'
          label={`${title} hotel`}
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
  )
}
