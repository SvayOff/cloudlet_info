import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { NavLink } from 'react-router-dom';

const WeatherToday: React.FC = () => {
  const weatherToday = useSelector((state: RootState) => state.weatherSlice.weatherToday);

  const weatherTodayCity = weatherToday && weatherToday.name;
  const weatherTodayTemp = weatherToday && Math.round(weatherToday.main.temp);
  const weatherTodaySky = weatherToday && weatherToday.weather[0].main;
  const weatherTodayHours = new Date().getHours();
  const weatherTodayMinutes = new Date().getMinutes();
  const weatherTodayDay = new Date().getDate();

  return (
    <NavLink className="weather__today today" to="/dayfull">
      <div className="today-about">
        <div className="today-time">
          Today
          <time>
            {weatherTodayHours}.{weatherTodayMinutes}
          </time>
        </div>
        <div className="today-info">
          <p className="today-city">{weatherTodayCity}</p>
          <time className="today-data">Monday, {weatherTodayDay} March</time>
        </div>
      </div>
      <div className="today-how">
        <div className="today-desc">
          <span className="today-degree">
            {weatherTodayTemp}
            <span>°C</span>
          </span>
          <p className="today-sky">{weatherTodaySky}</p>
        </div>
        <img className="today-img" src="/images/icons/cloud_rain.svg" alt="rain" />
      </div>
      <button className="today__favorite">
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
    </NavLink>
  );
};

export default WeatherToday;
