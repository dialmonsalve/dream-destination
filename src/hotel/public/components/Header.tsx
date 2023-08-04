import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  children: ReactNode | ReactNode[],
  isClient: boolean
}


export const Header = ({ children, isClient }: HeaderProps) => {
  return (
    <header className='header'>
      <div className='header__brand'>
        <Link to='/'>
          <img src='/assets/brand.svg' alt='dream-destination' />
        </Link>
      </div>

      <div className='header__user' >

        {
          isClient &&
          <div className='header__user--search'>
            <Link to='#'>
              <img src='/assets/icon-search.svg' alt='icon-search' />
            </Link>
          </div>
        }

        <ul className='header__user--nav' >
          {children}
        </ul>

        <div className='header__user--avatar' >
          <Link to='#'>
            <img src='/assets/avatar.svg' alt='avatar' />
          </Link>
        </div>
      </div>
    </header>
  )
}
