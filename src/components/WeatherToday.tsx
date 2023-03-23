import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setWeatherFavorites, removeWeatherFromFavorites } from '../redux/slices/weatherSlice';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const days = [
  ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  ['Недiля', 'Понедiлок', 'Вiвторок', 'Середа', 'Четвер', "П'ятниця", 'Субота'],
];
export const months = [
  [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'Novermber',
    'December',
  ],
  [
    'Ciчня',
    'Лютого',
    'Березня',
    'Квiтня',
    'Травня',
    'Червня',
    'Липня',
    'Серпня',
    'Вересня',
    'Жовтня',
    'Листопада',
    'Грудня',
  ],
];

export const weatherTodayImage = (status: string | null) => {
  switch (status) {
    case 'Clouds':
      return 'cloud';
    case 'Clear':
      return 'cloud_sun';
    case 'Snow':
      return 'cloud_snow';
    case 'Rain':
      return 'cloud_rain';
    case 'Thunderstorm':
      return 'cloud_thunder';
    default:
      return 'cloud_danger';
  }
};
 
export const weatherTodaySky = (lang: string, sky: string) => {
  switch (sky) {
    case 'Clouds':
      return lang === 'en' ? 'Clouds' : 'Хмарно';
    case 'Clear':
      return lang === 'en' ? 'Clear' : 'Ясно';
    case 'Snow':
      return lang === 'en' ? 'Snow' : 'Снiг';
    case 'Rain':
      return lang === 'en' ? 'Rain' : 'Дощ';
    case 'Thunderstorm':
      return lang === 'en' ? 'Thunderstorm' : 'Гроза';
    case 'Mist':
      return lang === 'en' ? 'Mist' : 'Туман';
    case 'Smoke':
      return lang === 'en' ? 'Smoke' : 'Дим';
    case 'Haze':
    case 'Fog':
      return lang === 'en' ? 'Haze' : 'Iмла';
    case 'Dust':
      return lang === 'en' ? 'Dust' : 'Пил';
    case 'Sand':
      return lang === 'en' ? 'Sand' : 'Пісок';
    case 'Ash':
      return lang === 'en' ? 'Ash' : 'Зола';
    case 'Squall':
      return lang === 'en' ? 'Squall' : 'Шквал';
    case 'Tornado':
      return lang === 'en' ? 'Tornado' : 'Торнадо';
  }
};

const WeatherToday: React.FC = () => {
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();
  const weatherToday = useSelector((state: RootState) => state.weatherSlice.weatherToday);
  const weatherFavorites = useSelector((state: RootState) => state.weatherSlice.weatherFavorites);

  const weatherTodayCity = weatherToday && weatherToday.name;
  const weatherTodayTemp = weatherToday && Math.round(weatherToday.main.temp);

  const weatherTodayHours =
    new Date().getHours() < 10 ? `0${new Date().getHours()}` : new Date().getHours();
  const weatherTodayMinutes =
    new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}` : new Date().getMinutes();
  const weatherTodayDay = new Date().getDate();
  const weatherTodayDayName = () => {
    if (i18n.language === 'en') {
      return days[0].filter((day, index) => (index === new Date().getDay() ? day : null));
    } else {
      return days[1].filter((day, index) => (index === new Date().getDay() ? day : null));
    }
  };
  const weatherTodayMonth = () => {
    if (i18n.language === 'en') {
      return months[0].filter((month, index) => (index === new Date().getMonth() ? month : null));
    } else {
      return months[1].filter((month, index) => (index === new Date().getMonth() ? month : null));
    }
  };
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
              {t('time')}: {weatherTodayHours}.{weatherTodayMinutes}
            </time>
          </div>
          <div className="today-info">
            <p className="today-city">{weatherTodayCity}</p>
            <time className="today-data">
              {weatherTodayDayName()}, {weatherTodayDay} {weatherTodayMonth()}
            </time>
          </div>
        </div>
        <div className="today-how">
          <div className="today-desc">
            <span className="today-degree">
              {weatherTodayTemp}
              <span>°C</span>
            </span>
            <p className="today-sky">
              {weatherToday && weatherTodaySky(i18n.language, weatherToday.weather[0].main)}
            </p>
          </div>
          <img
            className="today-img"
            src={`/images/icons/${weatherTodayImage(
              weatherToday && weatherToday.weather[0].main,
            )}.svg`}
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
