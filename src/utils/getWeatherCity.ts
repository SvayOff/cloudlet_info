import { WeatherTodayType } from '../redux/weather/types';

export const getWeatherCity = (obj: WeatherTodayType) => {
  return obj.name;
};
