import { useNavigate, useParams } from "react-router-dom";
import { useHotel } from "../../../hotel/private/hooks/useHotel"
import { useRoom } from "../../../hotel/private/hooks/useRoom";
import { useEffect } from "react";
import { Button, ErrorMessage, FormControl, Spinner } from "../../../ui";
import { useForm } from "../../../hooks/useForm";
import { ReactFormEvent, Reservation } from '../../../types'
import { formValidator, validationSchema } from "../../../helpers";
import NotFoundPage from "../../../hotel/public/pages/notFoundPage";

const newReservation: Reservation = {
  clientName: '',
  lastName: '',
  email: '',
  phone: '',
  initialDate: '',
  finalDate: '',
  emergencyContact: '',
  emergencyPhone: '',
  roomId: 0,
  hotelId: 0,
  price: 0,
  tax: 0,
  totalPaid: 0,
}

export function Component () {

  const { hotel, getHotel } = useHotel();
  const { isLoading, room, getRoom, updateRoomWithReservation } = useRoom();
  const { roomId, hotelId } = useParams();
  const { formState, handleFieldChange, handleBlur, areFieldsValid, isFormSubmitted, isTouched, handleResetForm } = useForm(newReservation);
  const existRoomInHotel = hotel.rooms?.some(room => room.id === Number(roomId));
  const navigate = useNavigate()

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
  const totalDays = ((finalDate - initialDate) / (24 * 60 * 60 * 1000))
  const isInTotalDays = finalDate === 0 || initialDate === 0 || totalDays < 0 ? 0 : totalDays + 1

  const { newReservationValidationSchema } = validationSchema();

  const errors = formValidator().getErrors(formState, newReservationValidationSchema);

  const handleSubmit = (e: ReactFormEvent) => {
    e.preventDefault();

    if (areFieldsValid(errors)) {
      const newReservation: Reservation = {
        clientName: formState.clientName,
        lastName: formState.lastName,
        email: formState.email,
        phone: formState.phone,
        hotelId: Number(hotelId),
        roomId: Number(roomId),
        initialDate,
        finalDate,
        emergencyContact: formState.emergencyContact,
        emergencyPhone: formState.emergencyPhone,
        price: room.basisCost,
        tax: room.taxes,
        totalPaid: Number((room.basisCost * (1 + room.taxes) * isInTotalDays).toFixed(2)),
        totalDays: isInTotalDays
      }
      updateRoomWithReservation(Number(room.id), newReservation).then().catch(e => console.log(e))
      handleResetForm();
    }
  }

  const handleBack = () =>{
    navigate(-1)
  }

  if(isLoading === 'loading'){
    return <Spinner type="half-circle" />
  }

  if(room.statusRoom === 'occupied'){
    return <NotFoundPage />
  }

  return (

      !existRoomInHotel ? <NotFoundPage /> :
        <>
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
                value={isInTotalDays}
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
              onClick={handleBack}
            />
          </form>

          <div className="totalPaid">
            <label >Price x day: <span>${room.basisCost}</span></label>
            <label >Taxes: <span>{room.taxes * 100}%</span></label>
            {/* <label >days: {isInTotalDays} day(s)</label> */}
            <label >Total: <span>$ {(room.basisCost * (1 + room.taxes) * isInTotalDays).toFixed(2)}</span></label>
          </div>
        </>

  )
}

Component.displayName = "CreateReservation"