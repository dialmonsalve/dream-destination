import { ReactNode } from 'react';

interface CardFooterProps {
  children?: ReactNode | ReactNode[]
}

export const CardFooter = ({children, ...props }: CardFooterProps) => {

  return (
    <div
      className='card__footer'
      {...props}
    >
      {children}
    </div>
  )
}