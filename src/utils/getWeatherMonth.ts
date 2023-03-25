import { months } from './static';

export const getWeatherMonth = (lang: string) => {
  if (lang === 'en') {
    return months[0].filter((month, index) => (index === new Date().getMonth() ? month : null));
  } else {
    return months[1].filter((month, index) => (index === new Date().getMonth() ? month : null));
  }
};
