import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { WeatherDaily, WeatherState, WeatherTodayType, Status } from './types';
import axios from 'axios';

const initialState: WeatherState = {
  weatherToday: null,
  weatherDaily: null,
  location: '',
  weatherFavorites: [],
  isLangOpen: false,
  status: Status.LOADING,
};

export const getWeatherData = createAsyncThunk('weather/getWeatherData', async (url: string) => {
  const response = await axios.get(url);
  return response.data;
});

const weatherSlice = createSlice({
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
  extraReducers: (builder) => {
    builder.addCase(getWeatherData.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(getWeatherData.fulfilled, (state) => {
      state.status = Status.SUCCESS;
    });
    builder.addCase(getWeatherData.rejected, (state) => {
      state.status = Status.ERROR;
    });
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
