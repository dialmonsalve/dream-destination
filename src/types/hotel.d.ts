interface InitialForm {
  [key: string]: any;
}

export interface Hotel extends InitialForm {
  id?: number;
  name: string;
  city: string;
  description?: string;
  active?: boolean;
  rooms?: Room[];
}

export interface Room extends InitialForm {
  id?: string;
  numberRoom: string;
  roomType: string;
  basisCost: number;
  taxes: number;
  isAvailable?: boolean;
  capacity: number;
  description?: string;
}

// interface NewRoomForm extends Room {
//   numberRoom: string;
//   roomType: '';
//   basisCost: number;
//   taxes: number;
//   capacity: number;
//   description?: string;
// }