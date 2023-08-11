import { useParams } from "react-router-dom";
import { useHotel } from "../../../hotel/private/hooks/useHotel"
import { useRoom } from "../../../hotel/private/hooks/useRoom";
import { useEffect } from "react";
import { Button, ErrorMessage, FormControl } from "../../../ui";
import { useForm } from "../../../hooks/useForm";
import { ReactFormEvent, Reservation } from '../../../types'
import { formValidator, validationSchema } from "../../../helpers";

const newReservation: Reservation = {
  clientName: '',
  lastName: '',
  email: '',
  phone: '',
  hotelCity: '',
  hotelName: '',
  numberRoom: '',
  initialDate: '',
  finalDate: '',
  emergencyContact: '',
  emergencyPhone: '',
}

const CreateReservation = () => {

  const { hotel, getHotel } = useHotel();
  const { room, getRoom } = useRoom();
  const { roomId, hotelId } = useParams()
  const { formState, handleFieldChange, handleBlur, areFieldsValid, isFormSubmitted, isTouched } = useForm(newReservation);

  useEffect(() => {
    if (hotelId === undefined) return;
    getHotel(hotelId).then().catch(e => console.log(e))
  }, [hotelId, getHotel]);

  useEffect(() => {
    if (roomId === undefined) return;
    getRoom(roomId).then().catch(e => console.log(e))
  }, [roomId, getRoom]);

  const initialDate = new Date(formState.initialDate).getTime() || 0;
  const finalDate = new Date(formState.finalDate).getTime() || 0;
  const totalDays = (finalDate - initialDate) / (24 * 60 * 60 * 1000)

  const { newReservationValidationSchema } = validationSchema();

  const errors = formValidator().getErrors(formState, newReservationValidationSchema)

  const handleSubmit = (e: ReactFormEvent) => {
    e.preventDefault();

    areFieldsValid(errors)

  }

  return (
    <form className="form-reservation" onSubmit={handleSubmit} >
      <div>
        <FormControl
          label="hotel city"
          type="text"
          name="hotelCity"
          value={hotel.city || ''}
          disabled
        />
      </div>
      <div>
        <FormControl
          label="hotel name"
          type="text"
          name="hotelName"
          value={hotel.name || ''}
          disabled
        />

      </div>
      <div>
        <FormControl
          label="number room"
          type="text"
          name="numberRoom"
          value={room.numberRoom || ''}
          disabled
        />

      </div>
      <div>
        <FormControl
          label="client name"
          type="text"
          name="clientName"
          value={formState.clientName}
          onChange={handleFieldChange}
          onBlur={handleBlur}
        />
        <ErrorMessage
          fieldName={errors?.clientName}
          isFormSubmitted={isFormSubmitted}
          isTouched={isTouched?.clientName} />
      </div>

      <div>
        <FormControl
          label="last name"
          type="text"
          name="lastName"
          value={formState.lastName}
          onChange={handleFieldChange}
          onBlur={handleBlur}
        />
        <ErrorMessage
          fieldName={errors?.lastName}
          isFormSubmitted={isFormSubmitted}
          isTouched={isTouched?.lastName} />
      </div>

      <div>
        <FormControl
          label="email"
          type="email"
          name="email"
          value={formState.email}
          onChange={handleFieldChange}
          onBlur={handleBlur}
        />
        <ErrorMessage
          fieldName={errors?.email}
          isFormSubmitted={isFormSubmitted}
          isTouched={isTouched?.email} />
      </div>

      <div>
        <FormControl
          label="phone"
          type="phone"
          name="phone"
          value={formState.phone}
          onChange={handleFieldChange}
          onBlur={handleBlur}
        />
        <ErrorMessage
          fieldName={errors?.phone}
          isFormSubmitted={isFormSubmitted}
          isTouched={isTouched?.phone} />
      </div>

      <div>
        <FormControl
          label="emergency contact"
          type="text"
          name="emergencyContact"
          value={formState.emergencyContact}
          onChange={handleFieldChange}
          onBlur={handleBlur}
        />
        <ErrorMessage
          fieldName={errors?.emergencyContact}
          isFormSubmitted={isFormSubmitted}
          isTouched={isTouched?.emergencyContact} />

      </div>
      <div>
        <FormControl
          label="emergency phone"
          type="text"
          name="emergencyPhone"
          value={formState.emergencyPhone}
          onChange={handleFieldChange}
          onBlur={handleBlur}
        />
        <ErrorMessage
          fieldName={errors?.emergencyPhone}
          isFormSubmitted={isFormSubmitted}
          isTouched={isTouched?.emergencyPhone} />

      </div>
      <div>
        <FormControl
          label="initial date"
          type="date"
          name="initialDate"
          value={formState.initialDate}
          onChange={handleFieldChange}
          onBlur={handleBlur}
        />
        <ErrorMessage
          fieldName={errors?.initialDate}
          isFormSubmitted={isFormSubmitted}
          isTouched={isTouched?.initialDate} />
      </div>
      <div>
        <FormControl
          label="final date"
          type="date"
          name="finalDate"
          value={formState.finalDate}
          onChange={handleFieldChange}
          onBlur={handleBlur}
        />
        <ErrorMessage
          fieldName={errors?.finalDate}
          isFormSubmitted={isFormSubmitted}
          isTouched={isTouched?.finalDate} />
      </div>

      <div>
        <FormControl
          label="total days"
          type="number"
          name="totalDays"
          value={totalDays <= 0 ? 0 : totalDays + 1}
          disabled
        />
      </div>
      <Button
        label="create reservation"
        type="submit"
        margin="0.5rem 1rem 0 1rem"
        disabled={!!errors}
      />
      <Button
        label="back"
        backgroundColor="red"
        margin="0.5rem 1rem 0 1rem"
      />

    </form>
  )
}

export default CreateReservation