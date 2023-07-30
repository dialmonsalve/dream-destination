import { useNavigate } from 'react-router-dom';

import { useForm } from '../hooks';

import { Button } from '../components/ui/Button';
import { FormControl } from '../components/ui/FormControl';

import { InitialForm } from '../interfaces/types';
import { validationSchema } from '../utils/validationSchema';
import { formValidator } from '../utils/formValidator';
import { ErrorMessage } from '../components/ui/ErrorMessage';

interface LoginForm extends InitialForm {
  email: string,
  password: string
}

const loginForm: LoginForm = {
  email: '',
  password: ''
}

function LoginPage() {

  const { loginValidationSchema } = validationSchema();
  const { formState, isFormSubmitted, isTouched, onFieldChange, areFieldsValid, handleBlur } = useForm(loginForm)
  const navigate = useNavigate();

  const errors = formValidator().getErrors(formState, loginValidationSchema);

  const { email, password } = formState;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (areFieldsValid(errors)) {
      console.log("Validating user");
      console.log( formState );
    }
  }

  const onCreateAccountClick = () => {
    navigate('/create-account')
  }
  return (
    <div className='new-account'>
      <div className='new-account__container' >
        <h1 className='new-account__container--title'>Login</h1>
        <form className='new-account__container--form' onSubmit={handleSubmit} >
          <div>
            <FormControl
              label='email'
              name='email'
              type='text'
              value={email}
              onChange={onFieldChange}
              onBlur={handleBlur}
            />
            <FormControl
              label='password'
              name='password'
              type='password'
              value={password}
              onChange={onFieldChange}
              onBlur={handleBlur}
            />
          </div>
          <div>

            <ErrorMessage
              fieldName={errors?.email}
              isFormSubmitted={isFormSubmitted}
              isTouched={isTouched?.email}
            />
            <ErrorMessage
              fieldName={errors?.password}
              isFormSubmitted={isFormSubmitted}
              isTouched={isTouched?.password}
            />
          </div>
          <div>
            <Button
              margin='2rem 2rem 0 2rem'
              label='login'
              backgroundColor='red'
              type='submit'
              disabled={!!errors}
            />
            <Button
              margin='2rem 2rem 0 2rem'
              label='create account'
              onClick={onCreateAccountClick}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage;