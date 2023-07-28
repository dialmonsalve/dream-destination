import { Outlet } from 'react-router-dom';

import { Footer,  Navbar } from '.';
import { Header } from '../../ui/Header';
import { AnchorTag } from '../../ui/AnchorTag';


export const ClientLayout = () => {
  
  return (
    <div className=''>
      <Header
        isClient
      >
        <AnchorTag
          href='/companies'
          label='companies'
          itemClassName='header__user--nav-item'
          linkClassName='header__user--nav-link'
        />
        <AnchorTag
          href='/discover'
          label='discover'
          itemClassName='header__user--nav-item'
          linkClassName='header__user--nav-link'
        />
        <AnchorTag
          href='/help'
          label='help'
          itemClassName='header__user--nav-item'
          linkClassName='header__user--nav-link'
        />
        <AnchorTag
          href='/create-account'
          label='create account'
          itemClassName='header__user--nav-item'
          linkClassName='header__user--nav-link'
        />
        <AnchorTag
          href='/login'
          label='login'
          itemClassName='header__user--nav-item'
          linkClassName='header__user--nav-link'
        />
        <AnchorTag
          href='/logout'
          label='logout'
          itemClassName='header__user--nav-item'
          linkClassName='header__user--nav-link'
        />
      </Header>

      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
