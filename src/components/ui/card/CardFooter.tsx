import { ReactNode } from 'react';
type Content =
  'center' | 'flex-end' | 'flex-start' |
  'space-around' | 'space-between' | 'space-evenly'

interface CardFooterProps {
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';
  color?: string,
  justifyContent?: Content;
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