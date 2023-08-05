import { PublicHotelCard } from '../components/PublicHotelCard';

import { Button, FormControl } from '../../../ui';


export const PublicHotelsPage = () => {
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
            margin='1rem 0rem'
            isAnimated
          />
        </form>
      </div>

      <div className='client-hotels' >
        <h2 className='client-hotels__title' >Hotels</h2>
        <div className='client-hotels__cards' >
          <PublicHotelCard />

        </div>
      </div>
    </div>
  )
}
