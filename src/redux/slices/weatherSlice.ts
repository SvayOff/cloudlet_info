import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface weatherState {
  weatherToday: WeatherToday | null;
  location: string;
}

type FetchWeatherTodayWeather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

type WeatherToday = {
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

const initialState: weatherState = {
  weatherToday: null,
  location: '',
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeatherToday: (state, action: PayloadAction<WeatherToday>) => {
      state.weatherToday = action.payload;
    },
    setLocation: (state, action: PayloadAction<string>) => {
      state.location = action.payload;
    },
  },
});

export const { setLocation, setWeatherToday } = weatherSlice.actions;
export default weatherSlice.reducer;
