import { WeatherTodayType } from '../redux/weather/types';

export const getWeatherTempMin = (weather: WeatherTodayType) => {
  return Math.round(weather.main.temp_min);
};