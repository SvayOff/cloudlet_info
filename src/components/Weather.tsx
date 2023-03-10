import React from 'react';
import WeatherTop from '../components/WeatherTop';
import Week from './Week';

const Weather: React.FC = () => {
  return (
    <section className="weather">
      <WeatherTop />
      <Week />
    </section>
  );
};

export default Weather;
