import { ReactNode } from 'react';

import { CardHead, CardBody, CardFooter } from '.';
import { Button } from '../Button';


interface CardProps {

  children?: ReactNode | ReactNode[];
}

export const HotelCard = ({children,...props}: CardProps) => {

  const description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ipsa nemo, impedit sunt inventore odio qui accusamus magnam minus dolor quasi iure? Maiores, cum ea architecto id iusto reprehenderit sunt?'

  const countWords = description.length > 80 ? description.substring(0, 80) + "..." : description;

  return (
    <div
      className='card'
      {...props}
    >
      {children}

      <CardHead >
        <h3 className='title-card' >Hotel pepipito</h3>
      </CardHead>

      <CardBody>
        <img className='card__body--img' src="/assets/hotel-bg.svg" alt="hotel" />
        <p className='card__body--city' >Ciudad: Juarez</p>
        <p className='card__body--desc' >Descripción: {countWords} </p>
        <p className='card__body--room' >Rooms: 5</p>
      </CardBody>      

      <CardFooter>
        <Button
          label='booking'
          backgroundColor='primary-dark'
          hasBackground={false}
          // color={'white'}
        />
      </CardFooter>

    </div>
  )
}
