import { NavLink } from 'react-router-dom';
import { navLinks } from '../../../helpers/navItems';

export const Navbar = () => {
  
  return (
    <nav className='navbar'>
      <ul className='navbar__nav' >
        {
          navLinks.map(link => (
            <li className='navbar__nav-item' key={link.id} >
              <NavLink className='navbar__nav-link' to={link.href}>{link.name}</NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}
