import { WeatherTodayType } from '../redux/weather/types';

export const getWeatherHamidity = (weather: WeatherTodayType) => {
  return weather.main.humidity;
};
