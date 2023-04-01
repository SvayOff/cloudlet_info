import React from 'react';
import HomeLayout from './layouts/HomeLayout';
import Weather from './pages/Weather';
import DayFull from './pages/DayFull';
import Maps from './pages/Maps';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import Register from './pages/Register';
import Error from './pages/Error';
import './libs/style.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setWeatherDaily, setWeatherFavoritesFromLS, setWeatherToday } from './redux/weather/slice';
import { setUsersBaseFromLS, setAuthorizedUserFromLS } from './redux/authorization/slice';
import {
  selectWeatherToday,
  selectWeatherDaily,
  selectWeatherFavorites,
} from './redux/weather/selectors';
import { setTheme } from './redux/theme/slice';

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
  const weatherToday = useSelector(selectWeatherToday);
  const weatherDaily = useSelector(selectWeatherDaily);
  const weatherFavorites = useSelector(selectWeatherFavorites);
  const isFavoriteAdded = React.useRef(false);

  React.useEffect(() => {
    const daily = JSON.parse(localStorage.getItem('daily') || 'null');
    const location = JSON.parse(localStorage.getItem('location') || 'null');
    const favorites = weatherFavorites && JSON.parse(localStorage.getItem('favorites') || 'null');
    const themeFromLS = localStorage.getItem('theme');
    const usersBase = JSON.parse(localStorage.getItem('usersBase') || 'null');
    const authorizedUser = JSON.parse(localStorage.getItem('authorizedUser') || 'null');

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
    if (usersBase) {
      dispatch(setUsersBaseFromLS(usersBase));
    }

    if (authorizedUser) {
      dispatch(setAuthorizedUserFromLS(authorizedUser));
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
