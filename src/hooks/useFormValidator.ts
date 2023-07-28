
export interface ValidationRule {
  test: (value: string) => boolean | string;
  message: string;
}
interface Validator {
  rules: ValidationRule[];
  Required(message: string): Validator;
  Max(length: number, message: string): Validator;
  Min(length: number, message: string): Validator;
  Email(): Validator;
  validate(value: string): string[];
  PositiveNumber(message: string): Validator
  String(): Validator
  Number(): Validator
}

export const useFomValidator = (rules: ValidationRule[]) => {
  const validator: Validator = {
    rules,
    Required(message: string): typeof validator {
      validator.rules.push({
        test: (value: string) => value && value.trim().length > 0,
        message,
      });
      return validator;
    },
    Max(length: number, message: string): typeof validator {
      validator.rules.push({
        test: (value: string) => value && value.length <= length,
        message,
      });
      return validator;
    },
    Min(length: number, message: string): typeof validator {
      validator.rules.push({
        test: (value: string) => value && value.length >= length,
        message,
      });
      return validator;
    },
    Email(): typeof validator {
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
    PositiveNumber(message: string): typeof validator {
      validator.rules.push({
        test: (value: string) => {
          const numberValue = parseFloat(value);
          return !isNaN(numberValue) && numberValue >= 0;
        },
        message,
      });
      return validator;
    },
    String(): typeof validator {
      const defaultMessage = 'Field must be a string';
      validator.rules.push({
        test: (value: string) => typeof value === 'string',
        message: defaultMessage,
      });
      return validator;
    },

    Number(): typeof validator {
      const defaultMessage = 'Field must be a number';
      validator.rules.push({
        test: (value: string) => !isNaN(parseFloat(value)),
        message: defaultMessage,
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

  return validator;
};