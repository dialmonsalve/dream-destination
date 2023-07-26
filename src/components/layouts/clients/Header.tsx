import { Link } from 'react-router-dom';

import { headerLinks } from '../../../utils/navItems';


export const Header = () => {
  return (
    <header className='header'>
      <Link className='header__brand' to='/'>
        <img src='/assets/brand.svg' alt='dream-destination' />
      </Link>

      <div className='header__user' >

        <div className='header__user--search'>
          <Link to='#'>
            <img className='header__user--search-img' src='/assets/icon-search.svg' alt='icon-search' />
          </Link>
        </div>

        <ul className='header__user--nav' >
          {
            headerLinks.map(link => (
              <li className='header__user--nav-item' key={link.id} >
                <Link className='header__user--nav-link' to={link.href}>{link.name}</Link>
              </li>
            ))
          }
        </ul>

        <div className='header__user--avatar' >
          <Link to='#'>
            <img className='header__user--avatar-img' src='/assets/avatar.svg' alt='avatar' />
          </Link>
        </div>
      </div>
    </header>
  )
}
