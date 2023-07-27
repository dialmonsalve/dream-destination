
import { ReactNode } from 'react';


interface CardHeadProps {
  children?: ReactNode | ReactNode[]
}

export const CardHead = ({ children, ...props }: CardHeadProps) => {

  return (
    <div
      className='card__head'
      {...props}
    >
      {children}
    </div>
  )
}