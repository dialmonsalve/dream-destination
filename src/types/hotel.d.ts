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
  isActive?: boolean;
  capacity: number;
  description?: string;
  initialDate?: number  | string;
  finalDate?: number | string;
  statusRoom?: 'occupied' | 'free' |'cleaning'
}

interface NewRoomForHotel extends Hotel {
  id?: number;
  name: string;
  city: string;
  description?: string;
  active?: boolean;
  rooms?: id;
}

