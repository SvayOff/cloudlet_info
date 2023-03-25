export const getWeatherSky = (lang: string, sky: string) => {
  switch (sky) {
    case 'Clouds':
      return lang === 'en' ? 'Clouds' : 'Хмарно';
    case 'Clear':
      return lang === 'en' ? 'Clear' : 'Ясно';
    case 'Snow':
      return lang === 'en' ? 'Snow' : 'Снiг';
    case 'Rain':
      return lang === 'en' ? 'Rain' : 'Дощ';
    case 'Thunderstorm':
      return lang === 'en' ? 'Thunderstorm' : 'Гроза';
    case 'Mist':
      return lang === 'en' ? 'Mist' : 'Туман';
    case 'Smoke':
      return lang === 'en' ? 'Smoke' : 'Дим';
    case 'Haze':
    case 'Fog':
      return lang === 'en' ? 'Haze' : 'Iмла';
    case 'Dust':
      return lang === 'en' ? 'Dust' : 'Пил';
    case 'Sand':
      return lang === 'en' ? 'Sand' : 'Пісок';
    case 'Ash':
      return lang === 'en' ? 'Ash' : 'Зола';
    case 'Squall':
      return lang === 'en' ? 'Squall' : 'Шквал';
    case 'Tornado':
      return lang === 'en' ? 'Tornado' : 'Торнадо';
  }
};
