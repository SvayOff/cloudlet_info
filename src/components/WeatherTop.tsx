import React from 'react';
import WeatherToday from './WeatherToday';
import WeatherInformation from './WeatherInformation';

const WeatherTop: React.FC = () => {
  return (
    <div className="weather__top">
      <WeatherToday />
      <WeatherInformation />
    </div>
  );
};

export default WeatherTop;
