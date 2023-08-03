import { ReactNode } from 'react';

import { CardHead, CardBody, CardFooter } from '../../../ui';


interface CardProps {

  children?: ReactNode | ReactNode[];
}

export const ReservationCard = ({ children, ...props }: CardProps) => {

  return (
    <div
      className='card-reservation'
      {...props}
    >
      {children}

      <CardHead >
        <h3 className='title-card' >Reservation No</h3>
        <p className='card__head--client' ><span>client</span></p>
        <p className='card__head--client' >Phone: <span>325656595</span> </p>
      </CardHead>

      <CardBody>
        <p className='card__body--room' >Ciudad: <span>Juarez</span> </p>
        <p className='card__body--room' >Hotel: <span>Pepito</span> </p>

        <div className='card__body--reservation'>
          <p className='card__body--room' >Number Room: <span>200</span> </p>
          <p className='card__body--room' >tipo: <span>doble</span> </p>
          <p className='card__body--room' >Precio: <span>250</span> </p>
          <p className='card__body--room' >impuesto: <span>10%</span> </p>
          <p className='card__body--room' >Fecha inicial: <span>20-01-2022</span> </p>
          <p className='card__body--room' >Fecha final: <span>23-01-2022</span> </p>
          <p className='card__body--room' >Total días: <span>3 dias</span> </p>
        </div>
        <div className='card__body--reservation'>
          <p className='card__body--room' >Number Room: <span>201</span> </p>
          <p className='card__body--room' >tipo: <span>Individual</span> </p>
          <p className='card__body--room' >Precio: <span>180</span> </p>
          <p className='card__body--room' >impuesto: <span>5%</span> </p>
          <p className='card__body--room' >Fecha inicial: <span>20-01-2022</span> </p>
          <p className='card__body--room' >Fecha final: <span>25-01-2022</span> </p>
          <p className='card__body--room' >Total días: <span>5 dias</span> </p>

        </div>
      </CardBody>

      <CardFooter>
        <p className='card__body--room' >Costo Total: <span>{(250 * 1.1 * 3) + (180 * 1.05 * 5)}</span> </p>
        <p className='card__body--room' >Contacto emergencia: <span>Fulanito</span> </p>
        <p className='card__body--room' >teléfono de emergencia: <span>3199856565</span> </p>
      </CardFooter>

    </div>
  )
}
