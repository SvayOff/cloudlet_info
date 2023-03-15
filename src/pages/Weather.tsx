import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import WeatherTop from '../components/WeatherTop';
import Week from '../components/Week';
import Empty from './Empty';

const Weather: React.FC = () => {
  const weatherToday = useSelector((state: RootState) => state.weatherSlice.weatherToday);

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
