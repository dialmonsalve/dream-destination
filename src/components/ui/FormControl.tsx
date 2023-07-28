import { FocusEvent } from 'react';

interface FormControlProps {
  label: string;
  type: string;
  name: string;
  value?: string | number | readonly string[] | undefined;
  defaultValue?: string | number | readonly string[] | undefined;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}

const handleFocus = (e: FocusEvent<HTMLInputElement, Element>) => {
  e.target.style.borderBottom = `3px solid #6aff00`;
};

const handleBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
  e.target.style.borderBottom = '3px solid rgb(233, 233, 233)';
};

export const FormControl = ({ label, type, name, value, defaultValue, onChange }: FormControlProps) => {
  return (
    <div className='form-control'>
      <label className='form-control--label' htmlFor=''>{label}</label>
      <input
        className='form-control--input'
        type={type}
        name={name}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </div>
  )
}
