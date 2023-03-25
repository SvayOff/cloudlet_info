export const getWeatherImage = (status: string | null) => {
  switch (status) {
    case 'Clouds':
      return 'cloud';
    case 'Clear':
      return 'cloud_sun';
    case 'Snow':
      return 'cloud_snow';
    case 'Rain':
      return 'cloud_rain';
    case 'Thunderstorm':
      return 'cloud_thunder';
    default:
      return 'cloud_danger';
  }
};
