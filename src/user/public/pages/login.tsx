import { useNavigate } from 'react-router-dom';

import { useForm } from '../../../hooks/useForm';
import { Button, ErrorMessage, FormControl } from '../../../utils/components';
import { validationSchema, formValidator } from '../../../utils/helpers';

import { LoginUser } from '../../../types/user';

const loginForm: LoginUser = {
  email: '',
  password: ''
}

function LoginPage() {

  const { loginValidationSchema } = validationSchema();
  const { formState, isFormSubmitted, isTouched, handleFieldChange, areFieldsValid, handleBlur } = useForm(loginForm)
  const navigate = useNavigate();

  const errors = formValidator().getErrors(formState, loginValidationSchema);

  const { email, password } = formState;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (areFieldsValid(errors)) {
      console.log("Validating user");
      console.log(formState);
    }
  }

  const onCreateAccountClick = () => {
    navigate('/create-account')
  }
  return (
    <div className='login'>
      <div className='login__container' >
        <h1 className='login__container--title'>Login and make your reservations</h1>
        <form className='login__container--form' onSubmit={handleSubmit} >

          <div>
            <FormControl
              label='email'
              name='email'
              type='text'
              value={email}
              onChange={handleFieldChange}
              onBlur={handleBlur}
            />
            <ErrorMessage
              fieldName={errors?.email}
              isFormSubmitted={isFormSubmitted}
              isTouched={isTouched?.email}
            />
            <div>

            </div>
            <FormControl
              label='password'
              name='password'
              type='password'
              value={password}
              onChange={handleFieldChange}
              onBlur={handleBlur}
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