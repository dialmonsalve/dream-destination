import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { FormControl } from '../components/ui/FormControl';

function CreateAccountPage() {

  const navigate = useNavigate()

  const onLoginClick = () => {
    navigate('/login')
  }
  return (
    
    <div className='new-account'>
      <div className='new-account__container' >
        <h1 className='new-account__container--title'>Create account</h1>
        <form className='new-account__container--form'>
          <FormControl
            label='name'
            name='name'
            type='text'
          />
          <FormControl
            label='last Name'
            name='lastName'
            type='text'
          />
          <div className='form-control'>
            <label className='form-control--label' htmlFor='document-type'>Tipo doc</label>
            <select className='form-control--select' name='dni'>
              <option value='cc'>Cedula</option>
              <option value='dni'>DNI</option>
              <option value='extranjero'>Extranjero</option>
              <option value='other'>Other</option>
            </select>
          </div>
          <FormControl
            label='Numero de documento'
            name='document-number'
            type='number'
          />
          <FormControl
            label='fecha de nacimiento'
            name='fecha de nacimiento'
            type='date'
          />
          <FormControl
            label='country'
            name='country'
            type='text'
          />
          <div className='form-control'>
            <label className='form-control--label' htmlFor='genre'>Genre</label>
            <select className='form-control--select' name='genre'>
              <option value='male'>male</option>
              <option value='female'>Female</option>
              <option value='other'>Other</option>
            </select>
          </div>

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
          <FormControl
            label='phone'
            name='phone'
            type='phone'
          />
          <Button
            margin='2rem 2rem 0 2rem'
            label='create account'
          />

          <Button
            margin='2rem 2rem 0 2rem'
            label='login'
            backgroundColor='red'
            onClick={onLoginClick}
          />
        </form>
      </div>
    </div>
  )
}


export default CreateAccountPage;