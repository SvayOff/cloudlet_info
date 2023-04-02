import React from 'react';
import HumidityCol from '../components/HumidityCol';
import SunCol from '../components/SunCol';
import TempCol from '../components/TempCol';
import WindCol from '../components/WindCol';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectWeatherToday } from '../redux/weather/selectors';
import { useTranslation } from 'react-i18next';
import { getWeatherCity } from '../utils/getWeatherCity';
import { getWeatherSky } from '../utils/getWeatherSky';
import { getWeatherImage } from '../utils/getWeatherImage';
import { getWeatherHours } from '../utils/getWeatherHours';
import { getWeatherMinutes } from '../utils/getWeatherMinutes';
import { getWeatherDay } from '../utils/getWeatherDay';
import { getWeatherTemp } from '../utils/getWeatherTemp';
import { getWeatherDayName } from '../utils/getWeatherDayName';
import { getWeatherMonth } from '../utils/getWeatherMonth';

const DayFull: React.FC = () => {
  const navigate = useNavigate();
  const weatherToday = useSelector(selectWeatherToday);

  const { t, i18n } = useTranslation();

  React.useEffect(() => {
    if (!weatherToday) {
      navigate('/');
    }
  }, []);

  return (
    <section className="dayfull">
      <div className="dayfull__inner">
        <div className="dayfull__how">
          <img
            className="dayfull__img"
            src={`/images/icons/${
              weatherToday && getWeatherImage(weatherToday.weather[0].main)
            }.svg`}
            alt="rain"
          />
          <div className="dayfull__desc">
            <span className="dayfull__degree">
              {weatherToday && getWeatherTemp(weatherToday)}
              <span>°C</span>
            </span>
            <p className="dayfull__sky">
              {weatherToday && getWeatherSky(i18n.language, weatherToday.weather[0].main)}
            </p>
          </div>
        </div>

        <div className="dayfull__about">
          <div className="dayfull__info">
            <p className="dayfull__city">{weatherToday && getWeatherCity(weatherToday)}</p>
            <time className="dayfull__data">
              {getWeatherDayName(i18n.language)}, {getWeatherDay()} {getWeatherMonth(i18n.language)}
            </time>
            <time className="dayfull__time">
              <span>{t('time')}:</span> {getWeatherHours()}:{getWeatherMinutes()}
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
