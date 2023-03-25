export const getWeatherMinutes = () => {
  return new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}` : new Date().getMinutes();
};
