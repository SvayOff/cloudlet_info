export const getWeatherHours = () => {
  return new Date().getHours() < 10 ? `0${new Date().getHours()}` : new Date().getHours();
};
