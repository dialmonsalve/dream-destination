import { Button } from '../Button';
import { HotelCard } from '../card/HotelCard';
import { FormControl } from '../FormControl';


export const ClientHotels = () => {
  return (
    <div className='content-client'>
      <div className='content-client__background'>
        <h1 className='content-client__background--title' >Find your hotel</h1>

        <form className='content-client__background--form' action=''>
          <FormControl
            label='Which is your destination?'
            type='text'
            name='destiny'
          />
          <FormControl
            label='Initial Date'
            type='date'
            name='initial-date'
          />
          <FormControl
            label='Final Date'
            type='date'
            name='final-date'
          />
          <FormControl
            label='rooms'
            type='number'
            name='rooms'
          />
          <Button
            label='search'
            size='medium'
            backgroundColor='primary-dark'
            margin='0 2rem'
            isAnimated
          />
        </form>
      </div>

      <div className='client-hotels' >
        <h2 className='client-hotels__title' >Hotels</h2>
        <div className='client-hotels__cards' >
          <HotelCard />

        </div>
      </div>
    </div>
  )
}
