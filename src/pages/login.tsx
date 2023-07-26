import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { FormControl } from '../components/ui/FormControl';

function LoginPage() {

  const navigate = useNavigate()

  const onCreateAccountClick = () => {
    navigate('/create-account')
  }
  return (
    <div className='new-account'>
      <div className='new-account__container' >
        <h1 className='new-account__container--title'>Login</h1>
        <form className='new-account__container--form' action=''>
          <FormControl
            label='email'
            name='email'
            type='email'
          />
          <FormControl
            label='password'
            name='password'
            type='password'
          />
          <Button
            margin='2rem 2rem 0 2rem'
            label='login'
            backgroundColor='red'
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