import { useNavigate, useParams } from "react-router-dom";
import { formValidator, validationSchema } from "../../../helpers";
import { ErrorMessages, IsTouched, ReactChangeEvent, ReactFocusEvent, Room } from "../../../types";
import { useRoom } from "../hooks/useRoom";
import { Button, ErrorMessage, FormControl } from "../../../ui";
import { useHotel } from "../hooks/useHotel";


interface CreateOrEditRoomProps {
  isCreating: boolean;
  formProps: FormProps;
  formState: Room
}

interface FormProps {
  basisCost: number;
  capacity: number;
  description: string | undefined;
  numberRoom: string
  roomType: string
  taxes: number;
  handleFieldChange: ((e: ReactChangeEvent) => void)
  handleBlur: ((e: ReactFocusEvent) => void)
  isFormSubmitted: boolean;
  isTouched: IsTouched;
  areFieldsValid: (errors: ErrorMessages<Room> | undefined) => boolean
  handleResetForm?: () => void
}

export const CreateOrEditRoomForm = ({ isCreating, formProps, formState }: CreateOrEditRoomProps) => {

  const navigate = useNavigate();
  const { roomId, hotelId } = useParams();
  const { updateHotelWithRoom } = useHotel();
  const { updateRoom } = useRoom();

  if (hotelId === undefined) return;

  const {
    numberRoom, description, isFormSubmitted, isTouched, roomType, basisCost, taxes, capacity,
    areFieldsValid, handleFieldChange, handleBlur, handleResetForm } = formProps;

  const { newRoomValidationSchema } = validationSchema();

  const errors = formValidator().getErrors(formState, newRoomValidationSchema);

  const createOrEditNumberRoom = (isCreating ? numberRoom : numberRoom || '');
  const createOrEditRoomType = (isCreating ? roomType : roomType || '');
  const createOrEditBasisCost = (isCreating ? basisCost : basisCost || '');
  const createOrEditTaxes = (isCreating ? taxes : taxes || '');
  const createOrEditCapacity = (isCreating ? capacity : capacity || '');
  const createOrEditDescription = (isCreating ? description : description || '');

  const title = isCreating ? 'create' : 'edit';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (areFieldsValid(errors)) {

      if (isCreating) { // If the user create room
        const newRoom: Room = {
          basisCost: Number(basisCost),
          capacity: Number(capacity),
          numberRoom,
          roomType,
          taxes:  parseFloat((taxes / 100).toFixed(2)),
          description,
          isActive: true,
          initialDate: 0,
          finalDate: 0,
          statusRoom:'free',
        }
        try {
          updateHotelWithRoom(+hotelId, newRoom).then().catch(error => console.log(error));
          handleResetForm!()
        } catch (error) {
          console.log(error);
        }
      } else { // If the user update room

        const updatedRoom: Room = {
          basisCost: Number(basisCost),
          capacity: Number(capacity),
          numberRoom,
          roomType,
          taxes: Number(taxes),
          description,
        }
        updateRoom(roomId!, updatedRoom).then().catch(e => console.log(e))
        navigate(-1)
      }
    }
  }

  const handleDetailHotel = () => {
    navigate(`/api/hotel/${hotelId}`)
  }

  return (
    <>
      <form className='create-hotel__form--rooms' onSubmit={handleSubmit}>
        <div>
          <FormControl
            label='Number room'
            name='numberRoom'
            type='text'
            value={createOrEditNumberRoom}
            onChange={handleFieldChange}
            onBlur={handleBlur}
          />
          <ErrorMessage
            fieldName={errors?.numberRoom}
            isFormSubmitted={isFormSubmitted}
            isTouched={isTouched?.numberRoom}
          />
        </div>

        <div style={{ marginTop: '1.4rem' }}>
          <label className='form-control--label label-room' htmlFor='document-type'>Room type</label>
          <select
            value={createOrEditRoomType}
            className='form-control--select select-room'
            name='roomType'
            onChange={handleFieldChange}
            onFocus={handleBlur}
          >
            <option value=""></option>
            <option value="single">single</option>
            <option value="double">double</option>
            <option value="suite">suite</option>
          </select>
          <ErrorMessage
            fieldName={errors?.roomType}
            isFormSubmitted={isFormSubmitted}
            isTouched={isTouched?.roomType}
          />
        </div>

        <div>
          <FormControl
            label='basis cost'
            name='basisCost'
            type='number'
            value={createOrEditBasisCost}
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
            label='taxes'
            name='taxes'
            type='number'
            value={createOrEditTaxes}
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
            label='capacity'
            name='capacity'
            type='number'
            value={createOrEditCapacity}
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
            value={createOrEditDescription}
            onChange={handleFieldChange}
            onBlur={handleBlur}
          />
        </div>

        <Button
          label={`${title} room`}
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
        margin="1.5rem 0 0"
        onClick={handleDetailHotel}
      />
    </>
  )
}
