export interface InitialForm {
  [key: string]: string | number;
}

export type ValidatorFunction = Omit<Validator, 'rules'>

export interface ValidationSchema {
  [key: string]: ValidatorFunction;
}

type ErrorMessage<T extends InitialForm> = { [K in keyof T]: string[] }

export interface ValidationRule {
  test: (value: string) => boolean | string;
  message: string;
}
interface Validator {
  rules: ValidationRule[];
  validate(value: string): string[];

  email(): Validator;
  max(length: number, message: string): Validator;
  min(length: number, message: string): Validator;
  number(): Validator
  password(regex: string, message: string): Validator
  positiveNumber(message: string): Validator
  required(message: string): Validator;
  string(): Validator
}

interface getErrors { getErrors: <T extends InitialForm> (formState: T, objValidations: ValidationSchema) => ErrorMessage<T> | undefined }
type ReturnFunction = Omit<Omit<Validator, 'rules'>, 'validate'> & Pick<getErrors, 'getErrors'>

export const formValidator = (): ReturnFunction => {

  function getErrors<T extends InitialForm>(formState: T, objValidations: ValidationSchema) {
    let formCheckedValues = {} as ErrorMessage<T>;

    for (const fieldRules of Object.keys(objValidations)) {
      const fieldValidator = objValidations[fieldRules];

      if (fieldRules in formState) {
        const fieldValue = fieldValidator.validate(formState[fieldRules] as string);

        if (fieldValue.length) {
          formCheckedValues = {
            ...formCheckedValues,
            [`${fieldRules}`]: fieldValue
          }
        }
      }
    }
    if (Object.keys(formCheckedValues).length === 0) {
      return undefined
    } else {

      return formCheckedValues
    }
  }

  const validator: Validator = {
    rules: [],
    email(): typeof validator {
      const defaultMessage = 'It must be a valid Email'
      validator.rules.push({
        test: (value: string) => {
          const emailRegex = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return emailRegex.test(value);
        },
        message: defaultMessage,
      });
      return validator;
    },
    max(length: number, message: string): typeof validator {
      validator.rules.push({
        test: (value: string) => value && value.length <= length,
        message,
      });
      return validator;
    },
    min(length: number, message: string): typeof validator {
      validator.rules.push({
        test: (value: string) => value && value.length >= length,
        message,
      });
      return validator;
    },
    required(message: string): typeof validator {
      validator.rules.push({
        test: (value: string) => value && value.trim().length > 0,
        message,
      });
      return validator;
    },
    positiveNumber(message: string): typeof validator {
      validator.rules.push({
        test: (value: string) => {
          const numberValue = parseFloat(value);
          return !isNaN(numberValue) && numberValue >= 0;
        },
        message,
      });
      return validator;
    },
    string(): typeof validator {
      const defaultMessage = 'Field must be a string';
      validator.rules.push({
        test: (value: string) => typeof value === 'string',
        message: defaultMessage,
      });
      return validator;
    },
    number(): typeof validator {
      const defaultMessage = 'Field must be a number';
      const numberRegex = /^\d+$/;
      validator.rules.push({
        test: (value: string) => numberRegex.test(value),
        message: defaultMessage,
      });
      return validator;
    },
    password(regex: string, message: string): typeof validator {
      const regExpObject = new RegExp(regex)
      validator.rules.push({
        test: (value: string) => {
          return regExpObject.test(value);
        },
        message,
      });
      return validator;
    },
    validate(value: string): string[] {
      const errors = [];

      for (const rule of validator.rules) {
        if (!rule.test(value)) {
          errors.push(rule.message);
        }
      }
      return errors;
    },
  };
  return {
    email: validator.email.bind(validator),
    max: validator.max.bind(validator),
    min: validator.min.bind(validator),
    number: validator.number.bind(validator),
    password: validator.password.bind(validator),
    positiveNumber: validator.positiveNumber.bind(validator),
    required: validator.required.bind(validator),
    string: validator.string.bind(validator),

    getErrors
  };
};