import React from 'react';
import { useSelector } from 'react-redux';
import { selectWeatherToday } from '../redux/weather/selectors';
import { days, months } from '../components/WeatherToday';
import { weatherTodayImage } from '../components/WeatherToday';
import { useTranslation } from 'react-i18next';
import { weatherTodaySky } from '../components/WeatherToday';
import HumidityCol from '../components/HumidityCol';
import SunCol from '../components/SunCol';
import TempCol from '../components/TempCol';
import WindCol from '../components/WindCol';

const DayFull: React.FC = () => {
  const weatherToday = useSelector(selectWeatherToday);
  
  const { t, i18n } = useTranslation();
  const weatherTodayTemp = weatherToday && Math.round(weatherToday.main.temp);
  const weatherTodayCity = weatherToday && weatherToday.name;
  const weatherTodayDayName = () => {
    if (i18n.language === 'en') {
      return days[0].filter((day, index) => (index === new Date().getDay() ? day : null));
    } else {
      return days[1].filter((day, index) => (index === new Date().getDay() ? day : null));
    }
  };
  const weatherTodayDay = new Date().getDate();
  const weatherTodayMonth =
    weatherToday &&
    months.filter((month, index) => (index === new Date().getMonth() ? month : null));
  const weatherTodayHours =
    new Date().getHours() < 10 ? `0${new Date().getHours()}` : new Date().getHours();
  const weatherTodayMinutes =
    new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}` : new Date().getMinutes();

  return (
    <section className="dayfull">
      <div className="dayfull__inner">
        <div className="dayfull__how">
          <img
            className="dayfull__img"
            src={`/images/icons/${weatherTodayImage(
              weatherToday && weatherToday.weather[0].main,
            )}.svg`}
            alt="rain"
          />
          <div className="dayfull__desc">
            <span className="dayfull__degree">
              {weatherTodayTemp}
              <span>°C</span>
            </span>
            <p className="dayfull__sky">
              {weatherToday && weatherTodaySky(i18n.language, weatherToday.weather[0].main)}
            </p>
          </div>
        </div>

        <div className="dayfull__about">
          <div className="dayfull__info">
            <p className="dayfull__city">{weatherTodayCity}</p>
            <time className="dayfull__data">
              {weatherTodayDayName()}, {weatherTodayDay} {weatherTodayMonth}
            </time>
            <time className="dayfull__time">
              <span>{t('time')}:</span> {weatherTodayHours}:{weatherTodayMinutes}
            </time>
          </div>
        </div>
      </div>

      <div className="dayfull__cols">
        <HumidityCol />
        <SunCol />
        <TempCol />
        <WindCol />
      </div>
    </section>
  );
};

export default DayFull;
