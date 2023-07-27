import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';

import { router } from './router/App.tsx';

import './index.scss'
import { HotelProvider } from './context/hotel/index.ts';
import { HandleUIProvider } from './context/handleUI/HandleUIProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HandleUIProvider>
      <HotelProvider>
        <RouterProvider router={router} />
      </HotelProvider>
    </HandleUIProvider>
  </React.StrictMode>,
)
