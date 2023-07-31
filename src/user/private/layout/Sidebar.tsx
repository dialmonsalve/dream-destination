
import { useState } from 'react';
import { AnchorTag } from '../../../utils/components/AnchorTag';

interface Props {
  width?: number
}

export const Sidebar = ({ width = 300 }: Props) => {

  const [toggleSidebar, setToggleSidebar] = useState(false)

  return (
    <>
      <nav
        className={`sidebar animation-sidebar ${toggleSidebar ? '' : `animation-hide-sidebar`} `}
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
            href='/api/bookings'
            label='bookings'
            itemClassName={`item`}
            linkClassName={`item__link`}  /* item__link--medium */
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