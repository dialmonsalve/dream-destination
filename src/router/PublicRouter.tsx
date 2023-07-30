
import { RouteObject, createBrowserRouter }from 'react-router-dom';
import { ClientLayout } from '../components/layouts/clients';

import ApiHomePage from '../pages/api';
import BookingsPage from '../pages/bookings';
import CreateAccountPage from '../pages/createAccount';
import HomePage from '../pages';
import HotelsPage from '../pages/hotels';
import LoginPage from '../pages/login';
import NotFoundPage from '../pages/notFoundPage';
import NewHotelPage from '../pages/api/hotel/createHotel';
import EditHotelPage from '../pages/api/hotel/editHotelPage';
import DetailHotelPage from '../pages/api/hotel/detailHotelPage';
import CreateRooms from '../pages/api/rooms/createRooms';
import ExamplePage from '../pages/examplePage';
import { FormPage } from '../Copy/formPage';


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
      {
        path: 'form',
        element: <FormPage/>
      }
    ]
  },
  {
    path: 'api',
    element: <ApiHomePage />,
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
            element: <NewHotelPage />
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
                element: <CreateRooms/>
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
