import React from 'react';
import WeatherTop from '../components/WeatherTop';
import Week from './Week';

const Weather: React.FC = () => {
  return (
    <div className="weather">
      <WeatherTop />
      <Week />
    </div>
  );
};

export default Weather;
