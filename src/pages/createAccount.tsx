import { useNavigate } from 'react-router-dom';

import { useForm } from '../hooks';

import { Button } from '../components/ui/Button';
import { FormControl } from '../components/ui/FormControl';

import { InitialForm } from '../interfaces/types';
import { validationSchema } from '../utils/validationSchema';
import { formValidator } from '../utils/formValidator';
import { ErrorMessage } from '../components/ui/ErrorMessage';

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
  phone: string,
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

  const { newClientValidationSchema } = validationSchema();
  const { formState, isFormSubmitted, isTouched,
    onFieldChange, areFieldsValid, handleBlur } = useForm(newAccountForm);
  const navigate = useNavigate();

  const errors = formValidator().getErrors(formState, newClientValidationSchema);

  const {
    birthDate,
    country,
    document,
    documentType,
    email,
    //! genre,
    lastName,
    name,
    password,
    phone } = formState;

    console.log(errors);
    

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (areFieldsValid(errors)) {
      console.log("Creating user");

      console.log(formState);
      
    }
  }

  const handleLoginClick = () => {
    navigate('/login')
  }
  return (

    <div className='new-account'>
      <div className='new-account__container' >
        <h1 className='new-account__container--title'>Create account</h1>
        <form className='new-account__container--form' onSubmit={handleSubmit}>

          <div>
            <FormControl
              label='name'
              name='name'
              type='text'
              value={name}
              onChange={onFieldChange}
              onBlur={handleBlur}
            />
            <ErrorMessage
              fieldName={errors?.name}
              isFormSubmitted={isFormSubmitted}
              isTouched={isTouched?.name}
            />
          </div>

          <div>
            <FormControl
              label='last Name'
              name='lastName'
              type='text'
              value={lastName}
              onChange={onFieldChange}
              onBlur={handleBlur}
            />
            <ErrorMessage
              fieldName={errors?.lastName}
              isFormSubmitted={isFormSubmitted}
              isTouched={isTouched?.lastName}
            />
          </div>

          <div className='form-control'>
          <label className='form-control--label' htmlFor='document-type'>Document type</label>
            <select value={documentType} className='form-control--select' name='documentType' onChange={onFieldChange}  >
              <option  value=""></option>
              <option  value="dni">DNI</option>
              <option  value="extranjero">Extranjero</option>
              <option  value="other">Other</option>
            </select>
            <ErrorMessage
              fieldName={errors?.documentType}
              isFormSubmitted={isFormSubmitted}
              isTouched={isTouched?.documentType}
            />
          </div>

          <div>
            <FormControl
              label='Document number'
              name='document'
              type='text'
              value={document}
              onChange={onFieldChange}
              onBlur={handleBlur}
            />
            <ErrorMessage
              fieldName={errors?.document}
              isFormSubmitted={isFormSubmitted}
              isTouched={isTouched?.document}
            />
          </div>
          <div>
            <FormControl
              label='Birth date'
              name='birthDate'
              type='date'
              value={birthDate}
              onChange={onFieldChange}
              onBlur={handleBlur}
            />
          </div>

          <div>
            <FormControl
              label='country'
              name='country'
              type='text'
              value={country}
              onChange={onFieldChange}
              onBlur={handleBlur}
            />

          </div>

          <div className='form-control'>
            <label className='form-control--label' htmlFor='genre'>Genre</label>
            <select className='form-control--select' name='genre'>
              <option value='male'>male</option>
              <option value='female'>Female</option>
              <option value='other'>Other</option>
            </select>
          </div>

          <div>
            <FormControl
              label='email'
              name='email'
              type='email'
              value={email}
              onChange={onFieldChange}
              onBlur={handleBlur}
            />
            <ErrorMessage
              fieldName={errors?.email}
              isFormSubmitted={isFormSubmitted}
              isTouched={isTouched?.email}
            />
          </div>

          <div>
            <FormControl
              label='password'
              name='password'
              type='password'
              value={password}
              onChange={onFieldChange}
              onBlur={handleBlur}
            />
            <ErrorMessage
              fieldName={errors?.password}
              isFormSubmitted={isFormSubmitted}
              isTouched={isTouched?.password}
            />
          </div>

          <div>
            <FormControl
              label='phone'
              name='phone'
              type='phone'
              value={phone}
              onChange={onFieldChange}
              onBlur={handleBlur}
            />

            <ErrorMessage
              fieldName={errors?.phone}
              isFormSubmitted={isFormSubmitted}
              isTouched={isTouched?.phone}
            />
          </div>

          <Button
            margin='2rem 2rem 0 2rem'
            label='create account'
            type='submit'
            disabled={!!errors}
          />

          <Button
            margin='2rem 2rem 0 2rem'
            label='login'
            backgroundColor='red'
            onClick={handleLoginClick}
          />
        </form>
      </div>
    </div>
  )
}


export default CreateAccountPage;