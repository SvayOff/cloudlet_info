import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectWeatherToday, selectWeatherFavorites } from '../redux/weather/selectors';
import { setWeatherFavorites, removeWeatherFromFavorites } from '../redux/weather/slice';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getWeatherCity } from '../utils/getWeatherCity';
import { getWeatherSky } from '../utils/getWeatherSky';
import { getWeatherImage } from '../utils/getWeatherImage';
import { getWeatherHours } from '../utils/getWeatherHours';
import { getWeatherMinutes } from '../utils/getWeatherMinutes';
import { getWeatherDay } from '../utils/getWeatherDay';
import { getWeatherTemp } from '../utils/getWeatherTemp';
import { getWeatherDayName } from '../utils/getWeatherDayName';
import { getWeatherMonth } from '../utils/getWeatherMonth';

const WeatherToday: React.FC = () => {
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();
  const weatherToday = useSelector(selectWeatherToday);
  const weatherFavorites = useSelector(selectWeatherFavorites);

  const hasWeatherInFavorites =
    weatherToday && weatherFavorites.find((weather) => weather.id === weatherToday.id);

  const addToFavorite = () => {
    weatherToday && dispatch(setWeatherFavorites(weatherToday));
  };

  const removeFromFavorites = () => {
    weatherToday && dispatch(removeWeatherFromFavorites(weatherToday.id));
  };

  return (
    <div className="weather__today today">
      <NavLink className="today-inner" to="/dayfull">
        <div className="today-about">
          <div className="today-time">
            {t('today')}
            <time>
              {t('time')}: {getWeatherHours()}.{getWeatherMinutes()}
            </time>
          </div>
          <div className="today-info">
            <p className="today-city">{weatherToday && getWeatherCity(weatherToday)}</p>
            <time className="today-data">
              {getWeatherDayName(i18n.language)}, {getWeatherDay()} {getWeatherMonth(i18n.language)}
            </time>
          </div>
        </div>
        <div className="today-how">
          <div className="today-desc">
            <span className="today-degree">
              {weatherToday && getWeatherTemp(weatherToday)}
              <span>°C</span>
            </span>
            <p className="today-sky">
              {weatherToday && getWeatherSky(i18n.language, weatherToday.weather[0].main)}
            </p>
          </div>
          <img
            className="today-img"
            src={`/images/icons/${
              weatherToday && getWeatherImage(weatherToday.weather[0].main)
            }.svg`}
            alt="rain"
          />
        </div>
      </NavLink>
      {hasWeatherInFavorites ? (
        <button className="today__favorite today__favorite-remove" onClick={removeFromFavorites}>
          <svg viewBox="0 0 80 80" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
            <title />
            <path d="M40 5.4C20.9 5.4 5.4 20.9 5.4 40s15.5 34.6 34.5 34.6S74.5 59.1 74.6 40C74.5 20.9 59.1 5.5 40 5.4zm0 66.2C22.6 71.6 8.4 57.4 8.4 40 8.4 22.6 22.6 8.4 40 8.4c17.4 0 31.6 14.1 31.6 31.5-.1 17.5-14.2 31.6-31.6 31.7z" />
            <path d="M40 14.9c-13.8 0-25.1 11.2-25.1 25.1h3c0-12.2 9.9-22.1 22.1-22.1v-3zM49.2 28.7 40 37.9l-9.2-9.2-2.1 2.1 9.2 9.2-9.2 9.2 2.1 2.1 9.2-9.2 9.2 9.2 2.1-2.1-9.2-9.2 9.2-9.2z" />
          </svg>
        </button>
      ) : (
        <button className="today__favorite" onClick={addToFavorite}>
          <svg viewBox="0 0 128 128" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
            <g id="Layer_2">
              <path
                className="st2"
                d="M57.3 32.7c-9.2-9.2-24.1-9.2-33.3 0-9.2 9.2-9.2 24.1 0 33.3l6.7 6.7L64 106l33.3-33.3L104 66c9.2-9.2 9.2-24.1 0-33.3s-24.1-9.2-33.3 0L64 39.4"
              />
              <path className="st2" d="M29.1 49.1c0-6.9 5.6-12.4 12.4-12.4" />
            </g>
          </svg>
        </button>
      )}
    </div>
  );
};

export default WeatherToday;
