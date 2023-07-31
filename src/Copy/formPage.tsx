import { formValidator, useForm } from "."

import { Button, ErrorMessage, FormControl } from '../utils/components';


export interface InitialForm {
  [key: string]: string | number;
}

interface LoginForm extends InitialForm {
  numero: string,
  prueba: string,
}

const initialForm: LoginForm = {
  numero: "",
  prueba: "",
}

export const FormPage = () => {

  const { formState, isFormSubmitted, isTouched, onFieldChange, areFieldsValid, handleBlur } = useForm<LoginForm>(initialForm);

  const objValidations = {
    prueba: formValidator()
      .email()
      .min(3, "Min 3 caracteres")
      .required("Requerido"),
    numero: formValidator()
      .number()
      .max(7, "Max 7 caracteres").positiveNumber('positivo'),
  }

  const { getErrors } = formValidator();

  const errors = getErrors(formState, objValidations);

  const { prueba, numero } = formState;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!areFieldsValid(errors)) {
      console.log("todo mal");
    } else {
      console.log("todo bien");
    }
  }


  return (
    <form onSubmit={handleSubmit} >
      <FormControl
        label='prueba'
        onChange={onFieldChange}
        value={prueba}
        type="text"
        name="prueba"
        onBlur={handleBlur}
      />
      <ErrorMessage
        fieldName={errors?.prueba}
        isFormSubmitted={isFormSubmitted}
        isTouched={isTouched?.prueba}
      />
      <FormControl
        label='numero'
        onChange={onFieldChange}
        value={numero}
        type="texto"
        name="numero"
        onBlur={handleBlur}
      />
      <Button
        type='submit'
        label="Hola"
      />
      <ErrorMessage
        fieldName={errors?.numero}
        isFormSubmitted={isFormSubmitted}
        isTouched={isTouched?.numero}
      />

    </form>
  )
}


