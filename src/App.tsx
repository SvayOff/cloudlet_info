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
import Error from './pages/Error';
import {
  setWeatherDaily,
  setWeatherFavoritesFromLS,
  setWeatherToday,
} from './redux/slices/weatherSlice';
import { setTheme } from './redux/slices/themeSlice';

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
  const isFavoriteAdded = React.useRef(false);

  React.useEffect(() => {
    if (localStorage.length) {
      const daily = JSON.parse(localStorage.getItem('daily') || '');
      const location = JSON.parse(localStorage.getItem('location') || '');
      const favorites = weatherFavorites && JSON.parse(localStorage.getItem('favorites') || '');
      const themeFromLS = localStorage.getItem('theme');
      if (daily) {
        dispatch(setWeatherDaily(daily));
      }
      if (location) {
        dispatch(setWeatherToday(location));
      }
      if (themeFromLS) {
        dispatch(setTheme(themeFromLS));
      }
      if (favorites) {
        dispatch(setWeatherFavoritesFromLS(favorites));
        isFavoriteAdded.current = true;
      }
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('location', JSON.stringify(weatherToday));

    localStorage.setItem('daily', JSON.stringify(weatherDaily));

    if (isFavoriteAdded.current === false) {
      localStorage.setItem('favorites', JSON.stringify([]));
    }
  }, [weatherToday, weatherDaily]);

  return (
    <div className="wrapper">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
