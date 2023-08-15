import { RouteObject } from 'react-router-dom';
import DetailHotelPage from '../routes/DetailHotelPage';
import HotelsPage from '../routes/HotelsPage';
import ReservationsPage from '../../reservation/routes/Reservations';

export const PrivateHotelRouts: RouteObject[] = [
  {
    path: 'hotels',
    children: [
      {
        index: true,
        element: <HotelsPage isStaff />,
      },
      {
        path: 'create',
        lazy: () => import("./pages/CreateHotelPage"),
      },
      {
        path: 'edit/:hotelId',
        lazy: () => import("./pages/EditHotelPage"),
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
            lazy: () => import("./pages/CreateRoomsPage"),
          },
          {
            path: 'rooms/edit/:roomId',
            lazy: () => import("./pages/EditRoomPage"),
          },
          {
            path: 'rooms/:roomId',
            lazy: () => import("./pages/DetailRoomPage"),
          },
        ]
      },
    ],
  },
  {
    path: 'reservations',
    element: <ReservationsPage isStaff />
  }
]



