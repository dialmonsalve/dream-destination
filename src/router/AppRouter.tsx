
import { RouteObject, createBrowserRouter } from 'react-router-dom';

import BookingsPage from '../reservations/routes/bookings';
import HomePage from '../user/public/pages';

import NotFoundPage from '../user/public/pages/notFoundPage';
import ExamplePage from '../user/public/pages/examplePage';

import CreateAccountPage from '../user/public/pages/createAccount';
import LoginPage from '../user/public/pages/login';

import HotelsPage from '../hotel/routes/HotelsPage';
import CreateHotelPage from '../hotel/private/pages/CreateHotelPage';
import EditHotelPage from '../hotel/private/pages/EditHotelPage';
import DetailHotelPage from '../hotel/private/pages/DetailHotelPage';
import CreateRoomsPage from '../hotel/private/pages/CreateRoomsPage';

import { PrivateLayout } from '../user/private/layout/PrivateLayout';
import { PublicLayout } from '../user/public/layout/PublicLayout';


const routes: RouteObject[] = [

  {
    path: '/',
    element: <PublicLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'bookings',
        element: <BookingsPage isStaff={false} />
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
      {
        path: 'companies',
        element: <ExamplePage />
      },
      {
        path: 'discover',
        element: <ExamplePage />
      },
      {
        path: 'help',
        element: <ExamplePage />
      },
      {
        path: 'logout',
        element: <ExamplePage />
      },
    ]
  },
  {
    path: 'api',
    element: <PrivateLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: 'hotels',
        children: [
          {
            index: true,
            element: <HotelsPage isStaff />,
          },
          {
            path: 'create',
            element: <CreateHotelPage />
          },
          {
            path: ':id',
            children: [
              {
                index: true,
                element: <EditHotelPage />,
              },
              {
                path: 'rooms/create',
                element: <CreateRoomsPage />
              }
            ]
          },
          {
            path: 'detail/:id',
            element: <DetailHotelPage />
          },
        ]
      },
      {
        path: 'bookings',
        element: <BookingsPage isStaff />
      }

    ]
  }

];



export const router = createBrowserRouter(routes)
