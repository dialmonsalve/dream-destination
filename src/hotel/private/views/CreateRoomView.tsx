import { useParams } from 'react-router-dom';

import { useForm } from '../../../hooks/useForm';

import { Room } from '../../../types/hotel';
import { CreateOrEditRoomForm } from '../components/CreateOrEditRoomForm';

const newRoomForm: Room = {
  numberRoom: '',
  roomType: '',
  basisCost: 0,
  taxes: 0,
  capacity: 0,
  description: '',
  isAvailable: false
}

export const CreateRoomView = () => {

  const { formState, isFormSubmitted, isTouched, handleBlur, handleFieldChange, areFieldsValid, handleResetForm } = useForm(newRoomForm);

  const { hotelId } = useParams();
  if (hotelId === undefined) return;

  const { basisCost, capacity, numberRoom, roomType, taxes, description } = formState;

  const formProps = {
    hotelId,
    numberRoom,
    roomType,
    basisCost,
    taxes,
    capacity,
    description,
    handleFieldChange,
    handleBlur,
    isFormSubmitted,
    isTouched,
    areFieldsValid,
    handleResetForm,
  }

  return (
    <CreateOrEditRoomForm
      isCreating
      formProps={formProps}
      formState={formState}
    />
  )
}