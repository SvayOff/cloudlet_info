import { WeatherTodayType } from '../redux/weather/types';

export const getWeatherWindSpeed = (weather: WeatherTodayType) => {
  return weather.wind.speed.toFixed(1);
};
