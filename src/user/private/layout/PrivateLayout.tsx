import { Outlet } from 'react-router-dom';

import { Sidebar } from './Sidebar';

import { AnchorTag } from '../../../utils/components/AnchorTag'
import { Header } from '../../public/components'

export const PrivateLayout = () => {

  return (
    <>
      <Sidebar/>
      <Header
        isClient={false}
      >
        <AnchorTag
          href='/logout'
          label='logout'
          itemClassName='header__user--nav-item'
          linkClassName='header__user--nav-link'
        />
      </Header>
      <Outlet />
    </>

  )
}
