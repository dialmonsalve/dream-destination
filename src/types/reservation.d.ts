interface InitialForm {
  [key: string]: string | number;
}

export interface Reservation extends InitialForm {
  reservationNumber?: string;
  name: string;
  lastName: string;
  email: string;
  phone: string;
  hotelCity: string;
  hotelName: string;
  numberRoom: string;
  initialDate: number;
  finalDate: number;
  totalDays: number;
  emergencyContact: string;
  emergencyPhone: string
  status?: 'active' | 'cancel' | 'suspended' | 'finished'
}