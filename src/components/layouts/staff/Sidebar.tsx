
import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  width?: number
}

export const Sidebar = ({ width = 300, children, }: Props) => {

  // const { onToggleSidebar, toggleSidebar } = useHandlerAnimations()

  const toggleSidebar = true
  // const toggleSidebar = false

  return (
    <>
      <nav
        className={`sidebar animation-sidebar ${toggleSidebar ? '' : `animation-hide-sidebar`} `}
        style={{ width }}
      >
        <ul className='sidebar__container'>
          {children}
        </ul>
        <div
          className={`menu ${toggleSidebar ? '' : 'menu-hide'}`}
          // onClick={onToggleSidebar}
          style={{ left: `calc(-2rem + ${width}px)` }}
        >
        </div>
      </nav>
    </>
  )
}