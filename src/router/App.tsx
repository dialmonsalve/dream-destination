
import { RouteObject, createBrowserRouter } from 'react-router-dom';

import ApiHomePage from '../pages/api';
import BookingsPage from '../pages/bookings';
import CreateAccountPage from '../pages/createAccount';
import HomePage from '../pages';
import HotelsPage from '../pages/hotels';
import LoginPage from '../pages/login';
import NotFoundPage from '../pages/notFoundPage';

import { Layout } from '../components/layouts/clients';


const routes: RouteObject[] = [

  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'bookings',
        element: <BookingsPage />
      },
      {
        path: 'hotels',
        element: <HotelsPage />
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
    children: [
      {
        path:'hotels',
        element: <HotelsPage />
      },
      {
        path:'bookings',
        element: <BookingsPage />
      }

    ]
  }

];



export const router = createBrowserRouter(routes)
