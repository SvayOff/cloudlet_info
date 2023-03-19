import React from 'react';
import { useDispatch } from 'react-redux';
import { WeatherToday } from '../redux/slices/weatherSlice';
import { removeWeatherFromFavorites } from '../redux/slices/weatherSlice';
import { weatherTodayImage } from './WeatherToday';

const FavoriteDay: React.FC<WeatherToday> = (day) => {
  const dispatch = useDispatch();

  const removeFromFavorites = () => {
    dispatch(removeWeatherFromFavorites(day.id));
  };

  return (
    <div className="favorites__item">
      <h3 className="favorites__item-title">{day.name}</h3>
      <img
        className="favorites__item-img"
        src={`/images/icons/${weatherTodayImage(day && day.weather[0].main)}.svg`}
        alt="wind"
      />
      <p className="favorites__item-desc">{day.weather[0].main}</p>
      <div className="favorites__item-temp">
        <div className="favorites__item-max">
          <svg viewBox="0 0 32 32" xmlSpace="preserve">
            <title />
            <path
              d="M25 25a6.01 6.01 0 0 1-7.257 5.872c-2.274-.464-4.12-2.293-4.603-4.563-.485-2.275.333-4.415 1.861-5.769V5a4 4 0 0 1 8 0v15.54A5.95 5.95 0 0 1 25 25z"
              fill="#C9F9FB"
            />
            <path
              d="M4 5c1 4-1 5-1 8a6 6 0 1 0 12 0C15 8 9 1 9 1c.333 2.667 0 5.333-1 8-1.333-2.667-2.667-4-4-4zM20 22.184V6h-2v16.184A2.99 2.99 0 0 0 16 25a3 3 0 1 0 6 0 2.99 2.99 0 0 0-2-2.816z"
              fill="#D62144"
            />
            <path
              d="M9 18.156c-2.206 0-4-1.794-4-4 0-.361.189-.902.41-1.529.2-.573.429-1.222.601-1.966.065.124.132.253.2.39l2.051 4.103 1.611-4.295A20.05 20.05 0 0 0 10.713 8C11.945 10.06 13 12.365 13 14.156c0 2.206-1.794 4-4 4z"
              fill="#FFF3AE"
            />
            <path
              d="M24 20.111V5c0-2.757-2.243-5-5-5s-5 2.243-5 5v1.574C12.234 3.264 9.916.532 9.759.349a1 1 0 0 0-1.751.775 15.302 15.302 0 0 1-.297 5.396C6.538 4.828 5.313 4 4 4a.998.998 0 0 0-.97 1.243c.526 2.103.129 3.193-.33 4.455-.328.903-.7 1.926-.7 3.302 0 3.86 3.14 7 7 7 1.958 0 3.728-.81 5-2.11v2.22c-1.659 1.674-2.344 4.036-1.838 6.408.564 2.649 2.727 4.793 5.381 5.334.482.098.967.146 1.446.146a6.989 6.989 0 0 0 4.434-1.575A6.976 6.976 0 0 0 26 25a6.966 6.966 0 0 0-2-4.889zM9 18c-2.757 0-5-2.243-5-5 0-1.024.269-1.763.58-2.618.367-1.008.77-2.115.69-3.701.508.5 1.126 1.348 1.836 2.767a1 1 0 0 0 1.831-.097 18.298 18.298 0 0 0 1.153-5.285C11.774 6.45 14 10.14 14 13c0 2.757-2.243 5-5 5zm13.157 10.875c-1.168.954-2.7 1.326-4.215 1.017-1.887-.384-3.424-1.908-3.825-3.791-.387-1.813.191-3.612 1.545-4.812A1 1 0 0 0 16 20.54V5c0-1.654 1.346-3 3-3s3 1.346 3 3v15.54c0 .286.123.559.337.749A4.957 4.957 0 0 1 24 25a4.988 4.988 0 0 1-1.843 3.875z"
              fill="#1A1A1A"
            />
          </svg>
          <span>
            MAX: {Math.round(day.main.temp_max)}
            <span>°C</span>
          </span>
        </div>
        <div className="favorites__item-min">
          <svg viewBox="0 0 32 32" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M27 25a6.01 6.01 0 0 1-7.257 5.872c-2.274-.464-4.12-2.293-4.603-4.563-.485-2.275.333-4.415 1.861-5.769V5a4 4 0 0 1 8 0v15.54A5.95 5.95 0 0 1 27 25z"
              fill="#C9F9FB"
            />
            <path
              d="M22 22.184V19h-2v3.184A2.99 2.99 0 0 0 18 25a3 3 0 1 0 6 0 2.99 2.99 0 0 0-2-2.816z"
              fill="#D62144"
            />
            <g fill="#1A1A1A">
              <path d="M26 20.111V5c0-2.757-2.243-5-5-5s-5 2.243-5 5v15.11c-1.658 1.674-2.345 4.036-1.839 6.408.564 2.649 2.728 4.793 5.382 5.334.482.098.967.146 1.446.146a6.989 6.989 0 0 0 4.434-1.575A6.976 6.976 0 0 0 28 25a6.966 6.966 0 0 0-2-4.889zm-1.843 8.764c-1.167.954-2.701 1.326-4.215 1.017-1.887-.384-3.424-1.908-3.825-3.791-.386-1.813.191-3.612 1.546-4.812.214-.19.337-.463.337-.749V5c0-1.654 1.346-3 3-3s3 1.346 3 3v15.54c0 .286.123.559.337.749A4.957 4.957 0 0 1 26 25a4.988 4.988 0 0 1-1.843 3.875z" />
              <path d="M15.707 18.293 14 16.586V3.414l1.707-1.707L14.293.293 13 1.586 11.707.293l-1.414 1.414L12 3.414v4.172l-2-2V3H8v2H6v2h2.586l2 2H5.414L3.707 7.293 2.293 8.707 3.586 10l-1.293 1.293 1.414 1.414L5.414 11h5.172l-2 2H6v2h2v2h2v-2.586l2-2v4.172l-1.707 1.707 1.414 1.414L13 18.414l1.293 1.293z" />
            </g>
          </svg>
          <span>
            MIN: {Math.round(day.main.temp_min)}
            <span>°C</span>
          </span>
        </div>
      </div>
      <button className="favorites__item-btn" onClick={removeFromFavorites}>
        Remove From Favorites
      </button>
    </div>
  );
};

export default FavoriteDay;
