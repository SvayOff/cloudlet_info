import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './libs/style.scss';
import HomeLayout from './layouts/HomeLayout';
import Weather from './pages/Weather';
import DayFull from './pages/DayFull';
import Maps from './pages/Maps';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import Register from './pages/Register';
import Empty from './pages/Empty';
import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: '/',
        element: <Empty />,
      },
      {
        path: '/dayfull',
        element: <DayFull />,
      },
      {
        path: 'weather',
        element: <Weather />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'maps',
        element: <Maps />,
      },
      {
        path: 'favorites',
        element: <Favorites />,
      },
      {
        path: '*',
        element: <Error />,
      },
    ],
  },
]);

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
