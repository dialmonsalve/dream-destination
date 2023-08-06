import { useForm } from '../../../hooks/useForm';

import { CreateOrEditRoomForm } from '../components/CreateOrEditRoomForm';
import { useRoom } from '../hooks/useRoom';

export const EditRoomView = () => {

  const { room } = useRoom();  
  const { formState, isFormSubmitted, isTouched, handleBlur, handleFieldChange, areFieldsValid, handleResetForm } = useForm(room);

  const { basisCost, capacity, numberRoom, roomType, taxes, description } = formState;

  const formProps = {

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
      isCreating={false}
      formProps={formProps}
      formState={formState}
    />
  )
}
