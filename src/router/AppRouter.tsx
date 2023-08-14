
import { RouteObject, createBrowserRouter } from 'react-router-dom';

import RegisterPage from '../auth/public/pages/RegisterPage';
import LoginPage from '../auth/public/pages/login';

import HotelsPage from '../hotel/routes/HotelsPage';
import DetailHotelPage from '../hotel/routes/DetailHotelPage';

import HomePage from '../hotel/public/pages';
import ExamplePage from '../hotel/public/pages/examplePage';
import NotFoundPage from '../hotel/public/pages/notFoundPage';

import ReservationsPage from '../reservation/routes/Reservations';

import CreateHotelPage from '../hotel/private/pages/CreateHotelPage';
import EditHotelPage from '../hotel/private/pages/EditHotelPage';

import CreateRoomsPage from '../hotel/private/pages/CreateRoomsPage';

import { PublicLayout } from '../hotel/public/layout/PublicLayout';
import { PrivateLayout } from '../hotel/private/layout/PrivateLayout';
import EditRoomPage from '../hotel/private/pages/EditRoomPage';
import DetailRoomPage from '../hotel/private/pages/DetailRoomPage';
import CreateReservation from '../reservation/public/pages/CreateReservation';


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
        element: <HotelsPage isStaff={false} />,
      },
      {
        path: 'hotels',
        children: [
          {
            path: ':hotelId',
            children: [
              {
                index: true,
                element: <DetailHotelPage isStaff={false} />,
              },
              {
                path:'rooms/:roomId/reserve/create',
                element: <CreateReservation />
              }
            ]
          }
        ]
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
        element: <HotelsPage isStaff />,
      },
      {
        path: 'hotels',
        children: [
          {
            path: 'create',
            element: <CreateHotelPage />
          },
          {
            path: 'edit/:hotelId',
            element: <EditHotelPage />
          },
          {
            path: ':hotelId',
            children: [
              {
                index: true,
                element: <DetailHotelPage isStaff />,
              },
              {
                path: 'rooms/create',
                element: <CreateRoomsPage />
              },
              {
                path: 'rooms/edit/:roomId',
                element: <EditRoomPage />
              },
              {
                path: 'rooms/:roomId',
                element: <DetailRoomPage />
              },
            ]
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
