import { useNavigate } from 'react-router-dom';

import { useForm, useValidationSchema } from '../hooks';

import { Button } from '../components/ui/Button';
import { FormControl } from '../components/ui/FormControl';

import { InitialForm } from '../interfaces/types';

interface LoginForm extends InitialForm {
  email: string,
  password: string
}

interface FormValidationResult {
  [key: string]: string[];
}

const loginForm: LoginForm = {
  email: '',
  password: ''
}

function LoginPage() {

  const { loginSchema } = useValidationSchema();
  const { formState, formValidation, onFieldChange } = useForm(loginForm, loginSchema)

  const { email, password } = formState as LoginForm;
  const { emailValid, passwordValid } = formValidation as FormValidationResult;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (emailValid !== undefined || passwordValid !== undefined) return;    
  }

  const navigate = useNavigate()

  const onCreateAccountClick = () => {
    navigate('/create-account')
  }
  return (
    <div className='new-account'>
      <div className='new-account__container' >
        <h1 className='new-account__container--title'>Login</h1>
        <form className='new-account__container--form' onSubmit={onSubmit} >
          <FormControl
            label='email'
            name='email'
            type='text'
            value={email}
            onChange={onFieldChange}
          />
          <FormControl
            label='password'
            name='password'
            type='password'
            value={password}
            onChange={onFieldChange}
          />
          <Button
            margin='2rem 2rem 0 2rem'
            label='login'
            backgroundColor='red'
            type='submit'
          />
          <Button
            margin='2rem 2rem 0 2rem'
            label='create account'
            onClick={onCreateAccountClick}
          />
        </form>
      </div>
    </div>
  )
}

export default LoginPage;