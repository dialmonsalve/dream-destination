import { useNavigate } from 'react-router-dom';

import { Button, ErrorMessage, FormControl } from '../../../ui';

import { formValidator, validationSchema } from '../../../helpers';
import { useForm } from '../../../hooks/useForm';

import { NewUser } from '../../../types/user';

const newAccountForm: NewUser = {
  name: '',
  lastName: '',
  documentType: '',
  document: '',
  birthDate: Number('0'),
  country: '',
  genre: '',
  email: '',
  password: '',
  phone: '',
}

export function Component() {

  const { newClientValidationSchema } = validationSchema();
  const { formState, isFormSubmitted, isTouched,
    handleFieldChange, areFieldsValid, handleBlur } = useForm(newAccountForm);
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

  const selectedDate = new Date(birthDate);
  const timeSinceEpoch = selectedDate.getTime();

  const millisecondsPerDay = (24 * 60 * 60);


  //Time since birth Date in milliseconds
  const daysSinceEpoch = Math.floor((timeSinceEpoch / millisecondsPerDay) + 209);

  // birth Date on date format
  const bir = new Date((daysSinceEpoch * 24 * 60 * 60));

  return (

    <>
      <div className='create-account__container' >
        <h1 className='create-account__container--title'>Create account and make your reservations</h1>
        <form className='create-account__container--form' onSubmit={handleSubmit}>

          <div>
            <FormControl
              label='name'
              name='name'
              type='text'
              value={name}
              onChange={handleFieldChange}
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
              onChange={handleFieldChange}
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
            <select value={documentType} className='form-control--select' name='documentType' onChange={handleFieldChange}  >
              <option value=""></option>
              <option value="dni">DNI</option>
              <option value="extranjero">Extranjero</option>
              <option value="other">Other</option>
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
              onChange={handleFieldChange}
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
              onChange={handleFieldChange}
              onBlur={handleBlur}
            />
          </div>

          <div>
            <FormControl
              label='country'
              name='country'
              type='text'
              value={country}
              onChange={handleFieldChange}
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
              onChange={handleFieldChange}
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
            <FormControl
              label='phone'
              name='phone'
              type='phone'
              value={phone}
              onChange={handleFieldChange}
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
    </>
  )
}


Component.displayName = 'RegisterPage';