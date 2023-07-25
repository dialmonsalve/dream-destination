import { FocusEvent } from 'react';

interface FormControlProps {
  label: string;
  type: string;
  name: string;
}

const handleFocus = (e: FocusEvent<HTMLInputElement, Element>) => {
  e.target.style.borderBottom = `3px solid #6aff00`;
};

const handleBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
  e.target.style.borderBottom = '3px solid rgb(233, 233, 233)';
};

export const FormControl = ({label, type, name}:FormControlProps) => {
  return (
    <div className="form-control">
      <label className="form-control--label" htmlFor="">{label}</label>
      <input 
      className="form-control--input" 
      type={type} 
      name={name} 
      onFocus={handleFocus}
      onBlur={handleBlur}
      />
    </div>
  )
}
