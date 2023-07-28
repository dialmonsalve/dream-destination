import { useValidator } from '../hooks';

interface Hotel {
  id?: number;
  name: string;
  city: string;
  description?: string;
  active?: boolean;
  rooms?: Room[];
}

interface Room {
  id?: string;
  numberRoom: string;
  roomType: string;
  basisCost: number;
  taxes: number;
  isAvailable?: boolean;
  capacity: number;
  description?: string;
}

export interface InitialForm {
  [key: string]: any;
}

export type ValidFormState = ValidFormField[] | Record<string, string[] >;

export interface ValidFormField {
  [fieldName: string]: ReturnType<typeof useValidator>;
}


