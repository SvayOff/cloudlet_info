import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { days, months } from '../components/WeatherToday';
import { weatherTodayImage } from '../components/WeatherToday';
import HumidityCol from '../components/HumidityCol';
import SunCol from '../components/SunCol';
import TempCol from '../components/TempCol';
import WindCol from '../components/WindCol';

const DayFull: React.FC = () => {
  const weatherToday = useSelector((state: RootState) => state.weatherSlice.weatherToday);
  const weatherTodayTemp = weatherToday && Math.round(weatherToday.main.temp);
  const weatherTodayCity = weatherToday && weatherToday.name;
  const weatherTodaySky = weatherToday && weatherToday.weather[0].main;
  const weatherTodayDayName =
    weatherToday && days.filter((day, index) => (index === new Date().getDay() - 1 ? day : null));
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
            <p className="dayfull__sky">{weatherTodaySky}</p>
          </div>
        </div>

        <div className="dayfull__about">
          <div className="dayfull__info">
            <p className="dayfull__city">{weatherTodayCity}</p>
            <time className="dayfull__data">
              {weatherTodayDayName}, {weatherTodayDay} {weatherTodayMonth}
            </time>
            <time className="dayfull__time">
              <span>Time:</span> {weatherTodayHours}:{weatherTodayMinutes}
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
