import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WeatherDaily, WeatherState, WeatherToday } from './types';

const initialState: WeatherState = {
  weatherToday: null,
  weatherDaily: null,
  location: '',
  weatherFavorites: [],
  isLangOpen: false,
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
    setWeatherFavorites: (state, action: PayloadAction<WeatherToday>) => {
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
    setWeatherFavoritesFromLS: (state, action: PayloadAction<WeatherToday[]>) => {
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
