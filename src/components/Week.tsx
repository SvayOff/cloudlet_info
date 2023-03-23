import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { WeatherDaily } from '../redux/slices/weatherSlice';
import WeekDay from './WeekDay';
import { useTranslation } from 'react-i18next';

const Week: React.FC = () => {
  const weatherDaily = useSelector((state: RootState) => state.weatherSlice.weatherDaily);
  const { t } = useTranslation();

  return (
    <div className="weather__week week">
      <h2 className="week__title title">{t('titleWeek')}</h2>
      <div className="week-items">
        {weatherDaily && weatherDaily.map((day: WeatherDaily) => <WeekDay key={day.dt} {...day} />)}
      </div>
    </div>
  );
};

export default Week;
