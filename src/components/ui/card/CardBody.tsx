import { ReactNode } from 'react';

interface CardBodyProps {

  children?: ReactNode | ReactNode[];
}

export const CardBody = ({ children }: CardBodyProps) => {

  return (
    <div className='card__body'
    >
      {children}
    </div>

  )
}