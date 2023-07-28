import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '../Button'
import { useValidationSchema } from '../../../hooks/useValidations'
import { useForm } from '../../../hooks/useForm'
import { InitialForm, Room } from '../../../interfaces/types'
import { FormControl } from '../FormControl'
import { ReactNode, useState } from 'react'
import { ErrorMessage } from '../ErrorMessage'
import { useHotels } from '../../../hooks/useHotels'


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

interface FormValidationResult {
  [key: string]: string[];
}

const RoomComponent = () => {


  const { newRoomSchema } = useValidationSchema();
  const { formState, formValidation, isFormSubmitted, onFieldChange, onFormSubmitted, onResetForm, onEndSubmitted } = useForm(newRoomForm, newRoomSchema);

  const { updateHotelWithRoom } = useHotels();
  const navigate = useNavigate()

  const { id } = useParams();

  const { basisCost, capacity, numberRoom, roomType, taxes, description } = formState as NewRoomForm;
  const { capacityValid, basisCostValid, numberRoomValid, taxesValid, roomTypeValid, descriptionValid } = formValidation as FormValidationResult;

  const isFormValid = !!capacityValid || !!basisCostValid || !!numberRoomValid || !!taxesValid || !!roomTypeValid || !!descriptionValid

  if (id === undefined) return;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newRoom: Room = {
      basisCost,
      capacity,
      numberRoom,
      roomType,
      taxes,
      description
    }
    onFormSubmitted();
    if (isFormValid) return;

    try {
      
      updateHotelWithRoom(+id, newRoom).then().catch(error => console.log(error));

    } catch (error) {
      console.log(error);

    } finally {
      onResetForm()
      onEndSubmitted()
    }
  }

  const handleDetailHotel = () => {
    navigate(`/api/hotels/detail/${id}`)
  }


  return (
    <>
      <form className='create-hotel__form--rooms' onSubmit={onSubmit}>
        <FormControl
          label='room'
          name='numberRoom'
          type='text'
          value={numberRoom}
          onChange={onFieldChange}
        />
        <FormControl
          label='type'
          name='roomType'
          type='text'
          value={roomType}
          onChange={onFieldChange}
        />
        <FormControl
          label='costo base'
          name='basisCost'
          type='number'
          value={basisCost}
          onChange={onFieldChange}
        />
        <FormControl
          label='costo impuestos'
          name='taxes'
          type='number'
          value={taxes}
          onChange={onFieldChange}
        />
        <FormControl
          label='capacidad'
          name='capacity'
          type='number'
          value={capacity}
          onChange={onFieldChange}
        />
        <FormControl
          label='description'
          name='description'
          type='text'
          value={description}
          onChange={onFieldChange}
        />

        <Button
          label='create room'
          type='submit'
          disabled={isFormValid}
        />
      </form>
      <Button
        label='detail'
        type='button'
        size='small'
        backgroundColor='green'
        onClick={handleDetailHotel}
      />
      <ErrorMessage
        fieldName={numberRoomValid}
        isFormSubmitted={isFormSubmitted}
      />
      <ErrorMessage
        fieldName={capacityValid}
        isFormSubmitted={isFormSubmitted}
      />
      <ErrorMessage
        fieldName={basisCostValid}
        isFormSubmitted={isFormSubmitted}
      />
      <ErrorMessage
        fieldName={taxesValid}
        isFormSubmitted={isFormSubmitted}
      />
      <ErrorMessage
        fieldName={roomTypeValid}
        isFormSubmitted={isFormSubmitted}
      />
      <ErrorMessage
        fieldName={descriptionValid}
        isFormSubmitted={isFormSubmitted}
      />
    </>

  )
}
