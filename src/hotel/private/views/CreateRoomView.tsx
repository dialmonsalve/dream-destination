import { useNavigate, useParams } from 'react-router-dom';

import { useHotels } from '../hooks/useHotels';
import { useForm } from '../../../hooks/useForm';

import { validationSchema, formValidator } from '../../../helpers';
import { Button, FormControl, ErrorMessage } from '../../../ui';

import { Room } from '../../../types/hotel';

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


  const { newRoomValidationSchema } = validationSchema();
  const { formState, isFormSubmitted, isTouched, handleBlur, handleFieldChange, areFieldsValid, handleResetForm } = useForm(newRoomForm);

  const { updateHotelWithRoom } = useHotels();
  const navigate = useNavigate()

  const { id } = useParams();
  if (id === undefined) return;

  const errors = formValidator().getErrors(formState, newRoomValidationSchema);

  const { basisCost, capacity, numberRoom, roomType, taxes, description } = formState;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()


    if (areFieldsValid(errors)) {
      const newRoom: Room = {
        basisCost,
        capacity,
        numberRoom,
        roomType,
        taxes,
        description,
        isAvailable: true
      }

      try {
        updateHotelWithRoom(+id, newRoom).then().catch(error => console.log(error));
        handleResetForm()
      } catch (error) {
        console.log(error);
      }
    }
  }

  const handleDetailHotel = () => {
    navigate(`/api/hotels/detail/${id}`)
  }

  return (
    <>
      <form className='create-hotel__form--rooms' onSubmit={handleSubmit}>
        <div>
          <FormControl
            label='Number room'
            name='numberRoom'
            type='text'
            value={numberRoom}
            onChange={handleFieldChange}
            onBlur={handleBlur}
          />
          <ErrorMessage
            fieldName={errors?.numberRoom}
            isFormSubmitted={isFormSubmitted}
            isTouched={isTouched?.numberRoom}
          />
        </div>

        <div>
          <FormControl
            label='Room type'
            name='roomType'
            type='text'
            value={roomType}
            onChange={handleFieldChange}
            onBlur={handleBlur}
          />
          <ErrorMessage
            fieldName={errors?.roomType}
            isFormSubmitted={isFormSubmitted}
            isTouched={isTouched?.roomType}
          />
        </div>

        <div>
          <FormControl
            label='costo base'
            name='basisCost'
            type='number'
            value={basisCost}
            onChange={handleFieldChange}
            onBlur={handleBlur}
          />
          <ErrorMessage
            fieldName={errors?.basisCost}
            isFormSubmitted={isFormSubmitted}
            isTouched={isTouched?.basisCost}
          />
        </div>

        <div>
          <FormControl
            label='costo impuestos'
            name='taxes'
            type='number'
            value={taxes}
            onChange={handleFieldChange}
            onBlur={handleBlur}
          />
          <ErrorMessage
            fieldName={errors?.taxes}
            isFormSubmitted={isFormSubmitted}
            isTouched={isTouched?.taxes}
          />
        </div>

        <div>
          <FormControl
            label='capacidad'
            name='capacity'
            type='number'
            value={capacity}
            onChange={handleFieldChange}
            onBlur={handleBlur}
          />
          <ErrorMessage
            fieldName={errors?.capacity}
            isFormSubmitted={isFormSubmitted}
            isTouched={isTouched?.capacity}
          />
        </div>

        <div>
          <FormControl
            label='description'
            name='description'
            type='text'
            value={description}
            onChange={handleFieldChange}
            onBlur={handleBlur}
          />
        </div>

        <Button
          label='create room'
          type='submit'
          disabled={!!errors}
          margin='2rem 0 0 0 '
        />
      </form>
      <Button
        label='detail'
        type='button'
        size='small'
        backgroundColor='green'
        onClick={handleDetailHotel}
      />
    </>

  )
}