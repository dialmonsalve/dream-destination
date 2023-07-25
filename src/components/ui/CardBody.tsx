import { ReactNode } from 'react';

interface Props {
  children?: ReactNode | ReactNode[];
  color?: string
}

export const CardBody = ({ color = 'white', children }: Props) => {
  return (
    <div
      className='card__body'
      style={{ color }}
    >

      {children}
    </div>
  )
}