import { useEffect, useState } from 'react';
type ErrorMessage<T> = { [K in keyof T]: string[] }

export const useForm = <T>(initialForm: T) => {

  const [formState, setFormState] = useState(initialForm);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isTouched, setIsTouched] = useState<{ [key: string]: boolean  } | null >(null)

  useEffect(() => {
    setFormState(initialForm);
  }, [initialForm]);


  const onFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value
    }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setIsTouched((prevIsTouched) => ({ ...prevIsTouched, [name]: true }));

    if (!isTouched?.name) {
      e.target.style.borderBottom = '3px solid rgb(233, 233, 233)';
    }
  };

  const areFieldsValid = (errors: ErrorMessage<typeof initialForm | undefined>) => {
    setIsFormSubmitted(true);
    if (errors) {
      return false;
    }
    setIsTouched(null);
    setIsFormSubmitted(false);
    return true;
  };
  const handleResetForm = () => {
    setFormState(initialForm);
  };

  return {
    formState,
    isFormSubmitted,
    isTouched,

    onFieldChange,
    handleResetForm,
    areFieldsValid,
    handleBlur
  };
};