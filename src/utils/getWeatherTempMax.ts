import { WeatherTodayType } from '../redux/weather/types';

export const getWeatherTempMax = (weather: WeatherTodayType) => {
  return Math.round(weather.main.temp_max);
};
