export interface WeatherState {
  weatherToday: WeatherTodayType | null;
  weatherDaily: WeatherDaily[] | null;
  location: string;
  weatherFavorites: WeatherTodayType[];
  isLangOpen: boolean;
}

export type FetchWeatherTodayWeather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type WeatherTodayType = {
  map: any;
  name: string;
  weather: FetchWeatherTodayWeather[];
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  wind: {
    deg: number;
    speed: number;
  };
  id: number;
};

export type WeatherDaily = {
  dt: number;
  main: {
    temp_min: number;
    temp_max: number;
  };
  weather: FetchWeatherTodayWeather[];
};
