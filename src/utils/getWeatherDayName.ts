import { days } from './static';

export const getWeatherDayName = (lang: string) => {
  return lang === 'en'
    ? days[0].filter((day, index) => (index === new Date().getDay() ? day : null))
    : days[1].filter((day, index) => (index === new Date().getDay() ? day : null));
};
