import {  FocusEvent  } from 'react';

interface FormControlProps {
  label: string;
  type: string;
  name: string;
  value?: string | number | readonly string[] | undefined;
  defaultValue?: string | number | readonly string[] | undefined;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}

export const FormControl = ({ label, type, name, value, defaultValue, onBlur, onChange }: FormControlProps) => {
  const handleFocus = (e: FocusEvent<HTMLInputElement, Element>) => {
    e.target.style.borderBottom = `3px solid #6aff00`;
  };

  return (
    <div className='form-control'>
      <label className='form-control--label' htmlFor=''>{label}</label>
      <input
        className='form-control--input'
        type={type}
        name={name}
        onFocus={handleFocus}
        onBlur={onBlur}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </div>
  )
}
