import React from 'react';
import { useSelector } from 'react-redux';
import { selectWeatherToday } from '../redux/weather/selectors';
import WeatherTop from '../components/WeatherTop';
import Week from '../components/Week';
import Empty from './Empty';

const Weather: React.FC = () => {
  const weatherToday = useSelector(selectWeatherToday);

  return (
    <section className="weather">
      {weatherToday ? (
        <>
          <WeatherTop />
          <Week />
        </>
      ) : (
        <Empty />
      )}
    </section>
  );
};

export default Weather;
