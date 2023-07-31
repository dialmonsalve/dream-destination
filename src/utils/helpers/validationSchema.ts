import { formValidator } from './';

export const validationSchema = () => {

  const loginValidationSchema = {
    email: formValidator()
      .string()
      .required('Field email is required')
      .email(),
    password: formValidator()
      .string()
      .required('Field password is required')
  };

  const newClientValidationSchema = {

    name: formValidator()
      .string()
      .required('Field name is required')
      .min(3, 'Field name must be at least 3 characters'),
    lastName: formValidator()
      .string()
      .required('Field last name is required')
      .min(3, 'Field last name must be at least 3 characters'),
    documentType: formValidator()
      .string()
      .required('Field document type is required'),
    document: formValidator()
      .string()
      .required('Field document is required')
      .min(3, 'Field name must be at least 3 characters'),
    bornDate: formValidator()
      .required('Field born date is required')
      .min(3, 'Field born date must be at least 3 characters'),
    email: formValidator()
      .string()
      .required('Field email is required')
      .email(),
    password: formValidator()
      .string()
      .required('Field password is required')
      .min(6, 'Field name must be at least 6 characters'),
    phone: formValidator()
      .string()
      .required('Field phone is required'),
  };

  const newHotelValidationSchema = {
    name: formValidator()
      .string()
      .required('Field hotel name is required')
      .min(3, 'Field hotel name must be at least 3 characters'),
    city: formValidator()
      .string()
      .required('Field city is required')
      .min(3, 'Field city name must be at least 3 characters'),
  };

  const newRoomValidationSchema = {
    numberRoom: formValidator()
      .string()
      .required('Field room is required'),
    roomType: formValidator()
      .string()
      .required('Field type of room is required'),
      basisCost: formValidator()
      .number()
      .required('Field cost base is required')
      .positiveNumber('Field cost base must be greater than 0'),
    taxes: formValidator()
      .number()
      .required('Field taxes is required')
      .positiveNumber('Field taxes must be greater than 0'),
    capacity: formValidator()
      .number()
      .required('Field capacity is required')
      .positiveNumber('Field capacity must be greater than 0')
  };

  return {
    loginValidationSchema,
    newClientValidationSchema,
    newHotelValidationSchema,
    newRoomValidationSchema
  }
}

