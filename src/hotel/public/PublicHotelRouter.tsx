import { RouteObject } from 'react-router-dom';
import HotelsPage from '../routes/HotelsPage';
import DetailHotelPage from '../routes/DetailHotelPage';
import ReservationsPage from '../../reservation/routes/Reservations';

export const PublicHotelRouts: RouteObject[] = [
  {
    index: true,
    lazy: () => import('./pages'),
  },
  {
    path: 'reservations',
    element: <ReservationsPage isStaff={false} />
  },
  {
    path: 'hotels',
    children: [
      {
        index: true,
        element: <HotelsPage isStaff={false} />,
      },
      {
        path: ':hotelId',
        children: [
          {
            index: true,
            element: <DetailHotelPage isStaff={false} />,
          },
          {
            path: 'rooms/:roomId/reserve/create',
            lazy: () => import('../../reservation/public/pages/CreateReservation'),
          }
        ]
      }
    ]
  },
  {
    path: 'create-account',
    lazy: () => import('../../auth/public/pages/RegisterPage'),
  },
  {
    path: 'login',
    lazy: () => import('../../auth/public/pages/login'),
  },
  {
    path: 'companies',
    lazy: () => import('./pages/examplePage'),
  },

  {
    path: 'discover',
    lazy: () => import('./pages/examplePage'),
  },
  {
    path: 'help',
    lazy: () => import('./pages/examplePage'),
  },
  {
    path: 'logout',
    lazy: () => import('./pages/examplePage'),
  },
]