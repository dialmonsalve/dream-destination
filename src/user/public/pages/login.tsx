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
  const { formState, isFormSubmitted, isTouched, onFieldChange, areFieldsValid, handleBlur } = useForm(loginForm)
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