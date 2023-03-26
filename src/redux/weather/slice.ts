import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { WeatherDaily, WeatherState, WeatherTodayType } from './types';
import axios from 'axios';

const initialState: WeatherState = {
  weatherToday: null,
  weatherDaily: null,
  location: '',
  weatherFavorites: [],
  isLangOpen: false,
};

export const getWeatherData = createAsyncThunk('weather/getWeatherData', async (url: string) => {
  const response = await axios.get(url);
  return response.data;
});

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeatherToday: (state, action: PayloadAction<WeatherTodayType>) => {
      state.weatherToday = action.payload;
    },
    setWeatherDaily: (state, action: PayloadAction<WeatherDaily[]>) => {
      state.weatherDaily = action.payload;
    },
    setLocation: (state, action: PayloadAction<string>) => {
      state.location = action.payload;
    },
    setWeatherFavorites: (state, action: PayloadAction<WeatherTodayType>) => {
      const findWeather = state.weatherFavorites.find(
        (weather) => weather.id === action.payload.id,
      );

      if (findWeather) {
        return;
      } else {
        state.weatherFavorites = [...state.weatherFavorites, action.payload];
        localStorage.setItem('favorites', JSON.stringify(state.weatherFavorites));
      }
    },
    removeWeatherFromFavorites: (state, action: PayloadAction<number>) => {
      state.weatherFavorites = state.weatherFavorites.filter(
        (weather) => weather.id !== action.payload,
      );
      localStorage.setItem('favorites', JSON.stringify(state.weatherFavorites));
    },
    setWeatherFavoritesFromLS: (state, action: PayloadAction<WeatherTodayType[]>) => {
      state.weatherFavorites = action.payload;
    },
    setIsLangOpen: (state, action: PayloadAction<boolean>) => {
      state.isLangOpen = action.payload;
    },
  },
});

export const {
  setLocation,
  setWeatherToday,
  setWeatherDaily,
  setWeatherFavorites,
  removeWeatherFromFavorites,
  setWeatherFavoritesFromLS,
  setIsLangOpen,
} = weatherSlice.actions;
export default weatherSlice.reducer;
