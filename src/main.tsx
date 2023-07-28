import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';

import { router } from './router/PublicRouter.tsx';

import './index.scss'
import { HotelProvider } from './context/hotel/index.ts';


ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <HotelProvider >
      <RouterProvider router={router} />
    </HotelProvider>
  </React.StrictMode>,
)
