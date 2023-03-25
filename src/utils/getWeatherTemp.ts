import { WeatherTodayType } from '../redux/weather/types';

export const getWeatherTemp = (weather: WeatherTodayType) => {
  return Math.round(weather.main.temp);
};
