import { useNavigate } from "react-router-dom";

import { useHotel } from "../hooks/useHotel";
import { formValidator, validationSchema } from "../../../helpers";

import { Button, ErrorMessage, FormControl } from "../../../ui";
import {
  ErrorMessages,
  Hotel,
  IsTouched,
  ReactChangeEvent,
  ReactFocusEvent,
  ReactFormEvent
} from "../../../types";

interface CreateOrEditHotelProps {
  isCreate: boolean;
  formProps: FormProps;
  handleAddComponent?: (id: number) => void
  formState: Hotel
}
interface FormProps {
  id?: string
  name: string
  handleFieldChange: ((e: ReactChangeEvent) => void)
  handleBlur: ((e: ReactFocusEvent) => void)
  city: string;
  description: string | undefined;
  isFormSubmitted: boolean;
  isTouched: IsTouched;
  areFieldsValid: (errors: ErrorMessages<Hotel> | undefined) => boolean
  handleResetForm?: () => void
}


export const CreateOrEditHotelForm = ({ isCreate, formProps, handleAddComponent, formState }: CreateOrEditHotelProps) => {
  
  const {
    city, description, isFormSubmitted, isTouched, name, id,
    areFieldsValid, handleFieldChange, handleBlur, handleResetForm } = formProps;
    
    const { createHotel, updateHotel, handleClearState } = useHotel();
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
    handleClearState()
    navigate(-1)
  }
  

  return (
    <form className='create-edit-hotel__form' onSubmit={handleSubmit} >
      <div>
        <FormControl
          label='hotel name'
          name='name'
          type='text'
          value={createOrEditName}
          onChange={handleFieldChange}
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
          onChange={handleFieldChange}
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
        onChange={handleFieldChange}
        onBlur={handleBlur}
      />
      <Button
        margin='2rem 0 0'
        label={`${title} hotel`}
        disabled={!!errors}
        type='submit'
      />
      <Button
        margin='1rem 0.5rem'
        label='back'
        backgroundColor='red'
        onClick={handleBack}
      />
    </form>
  )
}
