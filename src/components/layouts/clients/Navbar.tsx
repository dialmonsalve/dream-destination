import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../../../utils/navItems';

interface NavbarProps {
  children?: ReactNode
}


export const Navbar = ({ children }: NavbarProps) => {
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
