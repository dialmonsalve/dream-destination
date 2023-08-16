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
  id?: number;
  numberRoom: string;
  roomType: string;
  basisCost: number;
  taxes: number;
  capacity: number;
  description?: string;
  initialDate?: number  | string;
  finalDate?: number | string;
  statusRoom?: StatusRoom
}


interface NewRoomForHotel extends Hotel {
  id?: number;
  name: string;
  city: string;
  description?: string;
  active?: boolean;
  rooms?: id;
}

export type StatusRoom = 'occupied' | 'free' |'cleaning' | 'active'| ' inactive'

