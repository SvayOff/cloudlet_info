import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { WeatherDaily } from '../redux/slices/weatherSlice';
import WeekDay from './WeekDay';

const Week: React.FC = () => {
  const weatherDaily = useSelector((state: RootState) => state.weatherSlice.weatherDaily);

  return (
    <div className="weather__week week">
      <h2 className="week__title title">Next Hours</h2>
      <div className="week-items">
        {weatherDaily && weatherDaily.map((day: WeatherDaily) => <WeekDay key={day.dt} {...day} />)}
      </div>
    </div>
  );
};

export default Week;
