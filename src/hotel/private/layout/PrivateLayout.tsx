import { Outlet } from 'react-router-dom';


import { AnchorTag } from '../../../ui';
import { Sidebar } from './Sidebar';
import { Header } from '../../public/components';

export const PrivateLayout = () => {

  return (
    <>
      <Sidebar />
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
      <main className='private-container'>
        <Outlet />
      </main>
    </>

  )
}
