import { Outlet } from 'react-router-dom';

import { Footer, Header, Navbar } from './';


export const Layout = () => {
  return (
    <div className='container'>
      <Header />
      <Navbar />
      <div className='content'  >
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
