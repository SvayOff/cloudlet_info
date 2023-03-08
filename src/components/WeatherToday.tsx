import React from 'react';

const WeatherToday: React.FC = () => {
  return (
    <div className="weather__today today">
      <div className="today-about">
        <div className="today-time">
          Today
          <time>06:20 PM</time>
        </div>
        <div className="today-info">
          <p className="today-city">Kyiv</p>
          <time className="today-data">Monday, 10 March</time>
        </div>
      </div>
      <div className="today-how">
        <div className="today-desc">
          <span className="today-degree">
            10
            <span>°C</span>
          </span>
          <p className="today-sky">Rainy</p>
        </div>
        <img className="today-img" src="/images/icons/cloud_rain.svg" alt="rain" />
      </div>
    </div>
  );
};

export default WeatherToday;
