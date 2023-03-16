import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface weatherState {
  weatherToday: WeatherToday | null;
  weatherDaily: WeatherDaily[] | null;
  location: string;
}

export type FetchWeatherTodayWeather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

type WeatherToday = {
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
};

export type WeatherDaily = {
  dt: number;
  main: {
    temp_min: number;
    temp_max: number;
  };
  weather: FetchWeatherTodayWeather[];
};

const initialState: weatherState = {
  weatherToday: null,
  weatherDaily: null,
  location: '',
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeatherToday: (state, action: PayloadAction<WeatherToday>) => {
      state.weatherToday = action.payload;
    },
    setWeatherDaily: (state, action: PayloadAction<WeatherDaily[]>) => {
      state.weatherDaily = action.payload;
    },
    setLocation: (state, action: PayloadAction<string>) => {
      state.location = action.payload;
    },
  },
});

export const { setLocation, setWeatherToday, setWeatherDaily } = weatherSlice.actions;
export default weatherSlice.reducer;
