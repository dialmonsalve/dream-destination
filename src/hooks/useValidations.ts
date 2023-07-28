import { ValidationRule, useFomValidator } from './useFormValidator';
import { ValidFormState } from '../interfaces/types';

export const useValidationSchema = () => {

  const loginSchema: ValidFormState = [
    {
      email: useFomValidator([] as ValidationRule[])
        .String()
        .Required('Field Email is Required')
        .Email()
    },
    {
      password: useFomValidator([] as ValidationRule[])
        .String()
        .Required('Field password is Required')
    }
  ];
  const newClientSchema: ValidFormState = [
    {
      name: useFomValidator([] as ValidationRule[])
        .String()
        .Required('Field name is Required')
        .Min(3, 'Field name must be at least 3 characters')
    },
    {
      lastName: useFomValidator([] as ValidationRule[])
        .String()
        .Required('Field last name is Required')
        .Min(3, 'Field last name must be at least 3 characters')
    },
    {
      documentType: useFomValidator([] as ValidationRule[])
        .String()
        .Required('Field document type is Required')
        .Min(3, 'Field document type must be at least 3 characters')
    },
    {
      document: useFomValidator([] as ValidationRule[])
        .String()
        .Required('Field document is Required')
        .Min(3, 'Field name must be at least 3 characters')
    },
    {
      bornDate: useFomValidator([] as ValidationRule[])
        // .Number()
        .Required('Field born date is Required')
        .Min(3, 'Field born date must be at least 3 characters')
    },
    {
      email: useFomValidator([] as ValidationRule[])
        .String()
        .Required('Field Email is Required')
        .Email()
    },
    {
      password: useFomValidator([] as ValidationRule[])
        .String()
        .Required('Field password is Required')
        .Min(6, 'Field name must be at least 6 characters')
    },
    {
      phone: useFomValidator([] as ValidationRule[])
        .String()
        .Required('Field phone is Required')
    },
  ];

  const newHotelSchema: ValidFormState = [

    {
      name: useFomValidator([] as ValidationRule[])
        .String()
        .Required('Field hotel name is Required')
        .Min(3, 'Field hotel name must be at least 3 characters')
    },
    {
      city: useFomValidator([] as ValidationRule[])
        .String()
        .Required('Field city is Required')
        .Min(3, 'Field city name must be at least 3 characters')
    },
  ]

  const newRoomSchema: ValidFormState = [

    {
      room: useFomValidator([] as ValidationRule[])
        .String()
        .Required('Field room is Required')
    },
    {
      typeRoom: useFomValidator([] as ValidationRule[])
        .String()
        .Required('Field type of room is Required')
    },
    {
      costBase: useFomValidator([] as ValidationRule[])
        .Number()
        .Required('Field cost base is Required')
        .PositiveNumber('Field cost base must be greater than 0')
    },
    {
      taxes: useFomValidator([] as ValidationRule[])
        .Number()
        .Required('Field taxes is Required')
        .PositiveNumber('Field taxes must be greater than 0')
    },
    {
      capacity: useFomValidator([] as ValidationRule[])
        .Number()
        .Required('Field capacity is Required')
        .PositiveNumber('Field capacity must be greater than 0')
    },
  ]

  return {
    loginSchema,
    newClientSchema,
    newHotelSchema,
    newRoomSchema
  }
}

