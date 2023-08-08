interface InitialForm {
  [key: string]: string | number;
}

interface Reservation extends InitialForm {
  reservationNumber: string;
  client: number;
  phone: string;
  hotelCity: string;
  hotelName: string;
  numberRoom: string;
  initialDate: number;
  finalDate: number;
  totalDays: number;
  contactEmergency: string;
  emergencyPhone: string
  status: 'active' | 'cancel' | 'suspended' | 'finished'
}