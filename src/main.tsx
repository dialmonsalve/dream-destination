import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';

import { router } from './router/AppRouter.tsx';

import './index.scss'
import { HotelProvider } from './context/hotels/index.ts';
import { RoomProvider } from './context/rooms';



ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <RoomProvider>
      <HotelProvider >
        <RouterProvider router={router} />
      </HotelProvider>
    </RoomProvider>
  </React.StrictMode>,
)
