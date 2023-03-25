import React from 'react';
import { useSelector } from 'react-redux';
import { selectWeatherDaily } from '../redux/weather/selectors';
import { WeatherDaily } from '../redux/weather/types';
import { useTranslation } from 'react-i18next';
import WeekDay from './WeekDay';

const Week: React.FC = () => {
  const weatherDaily = useSelector(selectWeatherDaily);
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
