
import { RouteObject, createBrowserRouter } from 'react-router-dom';

import NotFoundPage from '../hotel/public/pages/notFoundPage';


import { PublicLayout } from '../hotel/public/layout/PublicLayout';
import { PublicHotelRouts } from '../hotel/public/PublicHotelRouter';

import { PrivateLayout } from '../hotel/private/layout/PrivateLayout';
import { PrivateHotelRouts } from '../hotel/private/PrivateHotelRouter';

const routes: RouteObject[] = [

  {
    path: '/',
    element: <PublicLayout />,
    errorElement: <NotFoundPage />,
    children: PublicHotelRouts
  },
  {
    path: 'api',
    element: <PrivateLayout />,
    errorElement: <NotFoundPage />,
    children: PrivateHotelRouts
  }
]

export const router = createBrowserRouter(routes)
