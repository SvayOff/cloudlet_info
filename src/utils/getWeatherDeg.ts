import { WeatherTodayType } from '../redux/weather/types';

export const getWeatherDeg = (weather: WeatherTodayType) => {
  return weather.wind.deg;
};
