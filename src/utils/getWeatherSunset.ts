import { WeatherTodayType } from '../redux/weather/types';

export const getWeatherSunset = (weather: WeatherTodayType) => {
  return new Date(weather.sys.sunset * 1000).getHours().toFixed(2);
};