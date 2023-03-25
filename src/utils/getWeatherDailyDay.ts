import { WeatherDaily } from '../redux/weather/types';
import { days } from './static';

export const getWeatherDailyDay = (day: WeatherDaily, lang: string) => {
  if (lang === 'en') {
    return days[0].filter((dayName, index) =>
      index === new Date(day.dt * 1000).getDay() ? dayName : null,
    );
  } else {
    return days[1].filter((dayName, index) =>
      index === new Date(day.dt * 1000).getDay() ? dayName : null,
    );
  }
};
