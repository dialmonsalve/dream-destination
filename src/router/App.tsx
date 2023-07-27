
import { RouteObject, createBrowserRouter } from 'react-router-dom';

import ApiHomePage from '../pages/api';
import BookingsPage from '../pages/bookings';
import CreateAccountPage from '../pages/createAccount';
import HomePage from '../pages';
import HotelsPage from '../pages/hotels';
import LoginPage from '../pages/login';
import NotFoundPage from '../pages/notFoundPage';

import { ClientLayout } from '../components/layouts/clients';
import NewHotelPage from '../pages/api/createHotel';


const routes: RouteObject[] = [

  {
    path: '/',
    element: <ClientLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'bookings',
        element: <BookingsPage isStaff={false}/>
      },
      {
        path: 'hotels',
        element: <HotelsPage isStaff={false} />
      },
      {
        path: 'create-account',
        element: <CreateAccountPage />
      },
      {
        path: 'login',
        element: <LoginPage />
      },
    ]
  },
  {
    path: 'api',
    element: <ApiHomePage />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path:'hotels',
        children:[
          {
            index:true,
            element: <HotelsPage isStaff />,
          },
          {
            path:'create',
            element:<NewHotelPage/>
          }
        ]
      },
      {
        path:'bookings',
        element: <BookingsPage isStaff />
      }

    ]
  }

];



export const router = createBrowserRouter(routes)
