import { useParams } from "react-router-dom";
import { useHotel } from "../../../hotel/private/hooks/useHotel"
import { useRoom } from "../../../hotel/private/hooks/useRoom";
import { useEffect } from "react";
import { FormControl } from "../../../ui";
import { useForm } from "../../../hooks/useForm";
import { Reservation } from '../../../types'

const newReservation: Reservation = {
  name: '',
  lastName: '',
  email: '',
  phone: '',
  hotelCity: '',
  hotelName: '',
  numberRoom: '',
  initialDate: Number('0'),
  finalDate: Number('0'),
  totalDays: 0,
  emergencyContact: '',
  emergencyPhone: '',
}

const CreateReservation = () => {

  const { hotel } = useHotel();
  const { room, getRoom } = useRoom();
  const { roomId } = useParams()
  const { formState, handleFieldChange } = useForm(newReservation);
 
  return (
    <form className="form-reservation" >
      <FormControl
        label="name"
        type="text"
        name="name"
        value={formState.name}
        onChange={handleFieldChange}
      />
      <FormControl
        label="last name"
        type="text"
        name="lastName"
        value={formState.lastName}
        onChange={handleFieldChange}
      />
      <FormControl
        label="email"
        type="email"
        name="email"
        value={formState.email}
        onChange={handleFieldChange}
      />
      <FormControl
        label="phone"
        type="phone"
        name="phone"
        value={formState.phone}
        onChange={handleFieldChange}
      />
      <FormControl
        label="hotel city"
        type="text"
        name="hotelCity"
        value={hotel.city}
        onChange={handleFieldChange}
        disabled
      />
      <FormControl
        label="hotel name"
        type="text"
        name="hotelName"
        value={hotel.name}
        onChange={handleFieldChange}
        disabled
      />
      <FormControl
        label="number room"
        type="text"
        name="numberRoom"
        value={room.numberRoom}
        onChange={handleFieldChange}
        disabled
      />
      <FormControl
        label="initial date"
        type="date"
        name="initialDate"
        value={formState.initialDate}
        onChange={handleFieldChange}
      />
      <FormControl
        label="final date"
        type="date"
        name="finalDate"
        value={formState.finalDate}
        onChange={handleFieldChange}
      />
      <FormControl
        label="totalDays"
        type="number"
        name="totalDays"
        value={formState.totalDays}
        onChange={handleFieldChange}
      />
      <FormControl
        label="emergency contact"
        type="text"
        name="emergencyContact"
        value={formState.emergencyContact}
        onChange={handleFieldChange}
      />
      <FormControl
        label="emergency phone"
        type="number"
        name="emergencyPhone"
        value={formState.emergencyPhone}
        onChange={handleFieldChange}
      />
    </form>
  )
}

export default CreateReservation