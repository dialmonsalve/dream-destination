interface InitialForm {
  [key: string]: string | number;
}

export interface Reservation extends InitialForm {
  reservationNumber?: string;
  clientName: string;
  lastName: string;
  email: string;
  phone: string;
  hotelCity: string;
  hotelName: string;
  numberRoom: string;
  initialDate:string | number;
  finalDate:string | number;
  totalDays?: number;
  emergencyContact: string;
  emergencyPhone: string
  status?: 'active' | 'cancel' | 'suspended' | 'finished'
}