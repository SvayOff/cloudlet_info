import { WeatherTodayType } from '../redux/weather/types';

export const getWeatherSunrice = (weather: WeatherTodayType) => {
  return new Date(weather.sys.sunrise * 1000).getHours().toFixed(2);
};
