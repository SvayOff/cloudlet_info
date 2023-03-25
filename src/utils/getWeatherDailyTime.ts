import { WeatherDaily } from '../redux/weather/types';

export const getWeatherDailyTime = (day: WeatherDaily) => {
  return new Date(day.dt * 1000).getHours() < 10
    ? `0${new Date(day.dt * 1000).getHours()}`
    : new Date(day.dt * 1000).getHours();
};
