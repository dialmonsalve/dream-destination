
import { RouteObject, createBrowserRouter } from 'react-router-dom';

import RegisterPage from '../auth/public/pages/RegisterPage';
import LoginPage from '../auth/public/pages/login';

import HotelsPage from '../hotel/routes/HotelsPage';

import HomePage from '../hotel/public/pages';
import ExamplePage from '../hotel/public/pages/examplePage';
import NotFoundPage from '../hotel/public/pages/notFoundPage';

import ReservationsPage from '../reservation/routes/Reservations';

import CreateHotelPage from '../hotel/private/pages/CreateHotelPage';
import EditHotelPage from '../hotel/private/pages/EditHotelPage';
import DetailHotelPage from '../hotel/private/pages/DetailHotelPage';
import CreateRoomsPage from '../hotel/private/pages/CreateRoomsPage';

import { PublicLayout } from '../hotel/public/layout/PublicLayout';
import { PrivateLayout } from '../hotel/private/layout/PrivateLayout';


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
        path: 'reservations',
        element: <ReservationsPage isStaff={false} />
      },
      {
        path: 'hotels',
        element: <HotelsPage isStaff={false} />
      },
      {
        path: 'create-account',
        element: <RegisterPage />
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
        path: 'reservations',
        element: <ReservationsPage isStaff />
      }

    ]
  }

];



export const router = createBrowserRouter(routes)
