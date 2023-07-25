
import { RouteObject, createBrowserRouter } from 'react-router-dom';

import NotFoundPage from '../pages/NotFoundPage';
import HomePage from '../pages';

import { Layout } from '../components/layouts/clients';
import BookingsPage from '../pages/bookings';
import HotelsPage from '../pages/hotels';


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
    ]
  }
];



export const router = createBrowserRouter(routes)
