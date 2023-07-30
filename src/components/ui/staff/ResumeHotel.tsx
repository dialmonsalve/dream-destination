import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '../Button'
import { validationSchema } from '../../../utils/validationSchema'
import { useForm } from '../../../hooks/useForm'
import { InitialForm, Room } from '../../../interfaces/types'
import { FormControl } from '../FormControl'
import { ReactNode, useState } from 'react'
import { ErrorMessage } from '../ErrorMessage'
import { useHotels } from '../../../hooks/useHotels'
import { formValidator } from '../../../utils/formValidator'


interface ResumeHotelProps {
  id: number
  name: string
  city: string
  isInfo?: boolean
  classBase: string
}

export const ResumeHotel = ({ id, name, city, classBase, isInfo = false }: ResumeHotelProps) => {

  const [components, setComponents] = useState<ReactNode[]>([]);
  const navigate = useNavigate();

  const handleCreateRoom = () => {
    navigate(`/api/hotels/${id}/rooms/create`)
  }

  const handleAddComponent = () => {
    setComponents((prevComponents) => [
      <div key={prevComponents.length} >
        <RoomComponent />
      </div>
    ]);
  };

  const handleRemoveComponent = () => {
    setComponents((prevComponents) => {
      const updatedComponents = [...prevComponents];
      updatedComponents.pop();
      return updatedComponents;
    });
  };


  return (
    <div className={`hotel-${classBase}`} >
      <h2 className={`hotel-${classBase}--title`}>Create room</h2>
      <h3 className={`hotel-${classBase}--subtitle`} >Hotel as been created</h3>
      <p className={`hotel-${classBase}--content`}>Name: <span>{name}</span></p>
      <p className={`hotel-${classBase}--content`}>City: <span>{city}</span></p>
      {
        isInfo
          ?
          <div>
            <Button
              label='add room'
              size='small'
              margin='0rem 2rem'
              onClick={handleAddComponent}
            />

            {components.length > 0 &&
              <Button
                label='remove room'
                size='small'
                backgroundColor='red'
                onClick={handleRemoveComponent}
              />
            }
          </div>
          :
          <Button label='create a rooms' onClick={handleCreateRoom} />
      }
      {components.map((component) => component)}

    </div>
  )
}


interface NewRoomForm extends InitialForm {
  numberRoom: string;
  roomType: '';
  basisCost: number;
  taxes: number;
  capacity: number;
  description?: string;
}

const newRoomForm: NewRoomForm = {
  numberRoom: '',
  roomType: '',
  basisCost: 0,
  taxes: 0,
  capacity: 0,
  description: '',

}
const RoomComponent = () => {


  const { newRoomValidationSchema } = validationSchema();
  const { formState, isFormSubmitted, isTouched, handleBlur, onFieldChange, areFieldsValid, handleResetForm } = useForm(newRoomForm);

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
            onChange={onFieldChange}
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
            onChange={onFieldChange}
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
            onChange={onFieldChange}
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
            onChange={onFieldChange}
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
            onChange={onFieldChange}
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
            onChange={onFieldChange}
            onBlur={handleBlur}
          />
        </div>

        <Button
          label='create room'
          type='submit'
          disabled={!!errors}
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
