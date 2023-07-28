import { useNavigate } from 'react-router-dom';

import { useForm , useValidationSchema} from '../hooks';

import { Button } from '../components/ui/Button';
import { FormControl } from '../components/ui/FormControl';

import { InitialForm } from '../interfaces/types';


interface FormValidationResult {
  [key: string]: string[];
}

interface NewAccount extends InitialForm {
  name: string;
  lastName: string;
  documentType: string
  document: string
  birthDate: string;
  country: string;
  genre: string;
  email: string;
  password: string;
  phone: string
}

const newAccountForm: NewAccount = {
  name: '',
  lastName: '',
  documentType: '',
  document: '',
  birthDate: '',
  country: '',
  genre: '',
  email: '',
  password: '',
  phone: '',
}

function CreateAccountPage() {

  const { newClientSchema } = useValidationSchema();
  const { formState, formValidation, onFieldChange } = useForm(newAccountForm, newClientSchema)

  const {
    birthDate,
    country,
    document,
    //! documentType,
    email,
    //! genre,
    lastName,
    name,
    password,
    phone } = formState as NewAccount;

  const {
    bornDateValid,
    documentValid,
    documentTypeValid,
    emailValid,
    lastNameValid,
    nameValid,
    passwordValid,
    phoneValid
  } = formValidation as FormValidationResult;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(bornDateValid);
    console.log(documentValid);
    console.log(documentTypeValid);
    console.log(emailValid);
    console.log(lastNameValid);
    console.log(nameValid);
    console.log(passwordValid);
    console.log(phoneValid);    
  }

  const navigate = useNavigate()

  const onLoginClick = () => {
    navigate('/login')
  }
  return (

    <div className='new-account'>
      <div className='new-account__container' >
        <h1 className='new-account__container--title'>Create account</h1>
        <form className='new-account__container--form' onSubmit={onSubmit}>
          <FormControl
            label='name'
            name='name'
            type='text'
            value={name}
            onChange={onFieldChange}
          />
          <FormControl
            label='last Name'
            name='lastName'
            type='text'
            value={lastName}
            onChange={onFieldChange}
          />
          <div className='form-control'>
            <label className='form-control--label' htmlFor='document-type'>Document type</label>
            <select className='form-control--select' name='dni'>
              <option value='cc'>identification card</option>
              <option value='dni'>DNI</option>
              <option value='extranjero'>Extranjero</option>
              <option value='other'>Other</option>
            </select>
          </div>
          <FormControl
            label='Document number'
            name='document'
            type='text'
            value={document}
            onChange={onFieldChange}
          />
          <FormControl
            label='Birth date'
            name='birthDate'
            type='date'
            value={birthDate}
            onChange={onFieldChange}
          />
          <FormControl
            label='country'
            name='country'
            type='text'
            value={country}
            onChange={onFieldChange}
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
          <FormControl
            label='phone'
            name='phone'
            type='phone'
            value={phone}
            onChange={onFieldChange}
          />
          <Button
            margin='2rem 2rem 0 2rem'
            label='create account'
            type='submit'
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