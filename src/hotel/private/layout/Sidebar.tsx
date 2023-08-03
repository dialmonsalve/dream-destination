
import { useState } from 'react';
import { AnchorTag } from '../../../ui';

interface Props {
  width?: number
}

export const Sidebar = ({ width = 300 }: Props) => {

  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <>
      <nav
        className={`sidebar ${toggleSidebar ? 'show-animation-sidebar' : ''}`}
        style={{ width }}
      >
        <ul className='sidebar__container'>
          <AnchorTag
            href='/api/hotels'
            label='hotels'
            itemClassName={`item`}
            linkClassName={`item__link`}
            onClick={() => setToggleSidebar(!toggleSidebar)}
          />
          <AnchorTag
            href='/api/reservations'
            label='reservations'
            itemClassName={`item`}
            linkClassName={`item__link`}
            onClick={() => setToggleSidebar(!toggleSidebar)}
          />
        </ul>
        <div
          className={`menu ${toggleSidebar ? '' : 'menu-hide'}`}
          onClick={() => setToggleSidebar(!toggleSidebar)}
          style={{ left: `calc(-2rem + ${width}px)` }}
        >
        </div>
      </nav>
    </>
  )
}