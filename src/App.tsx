import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './libs/style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import HomeLayout from './layouts/HomeLayout';
import Weather from './pages/Weather';
import DayFull from './pages/DayFull';
import Maps from './pages/Maps';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import Register from './pages/Register';
import Empty from './pages/Empty';
import Error from './pages/Error';
import { setWeatherDaily, setWeatherFavorites, setWeatherToday } from './redux/slices/weatherSlice';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: '/',
        element: <Weather />,
      },
      {
        path: '/dayfull',
        element: <DayFull />,
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
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: '*',
        element: <Error />,
      },
    ],
  },
]);

const App: React.FC = () => {
  const dispatch = useDispatch();
  const weatherToday = useSelector((state: RootState) => state.weatherSlice.weatherToday);
  const weatherDaily = useSelector((state: RootState) => state.weatherSlice.weatherDaily);
  const weatherFavorites = useSelector((state: RootState) => state.weatherSlice.weatherFavorites);

  React.useEffect(() => {
    if (localStorage.length) {
      const daily = JSON.parse(localStorage.getItem('daily') || '');
      const location = JSON.parse(localStorage.getItem('location') || '');

      if (daily) {
        dispatch(setWeatherDaily(daily));
      }

      if (location) {
        dispatch(setWeatherToday(location));
      }
    }
  }, []);

  React.useEffect(() => {}, [weatherFavorites]);

  React.useEffect(() => {
    localStorage.setItem('location', JSON.stringify(weatherToday));

    localStorage.setItem('daily', JSON.stringify(weatherDaily));

    localStorage.setItem('favorites', JSON.stringify(weatherFavorites));
  }, [weatherToday, weatherDaily, weatherFavorites]);

  return (
    <div className="wrapper">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
