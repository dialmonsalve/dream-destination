import { InitialForm } from "./";

export interface LoginUser extends InitialForm {
  email: string,
  password: string
}

export interface NewUser extends LoginUser {
  name: string;
  lastName: string;
  documentType: string
  document: string
  birthDate: string;
  country: string;
  genre: string;
  phone: string,
}