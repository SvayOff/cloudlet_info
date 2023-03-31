import { RootState } from '../store';

export const selectWeatherToday = (state: RootState) => state.weatherSlice.weatherToday;
export const selectLocation = (state: RootState) => state.weatherSlice.location;
export const selectWeatherFavorites = (state: RootState) => state.weatherSlice.weatherFavorites;
export const selectWeatherDaily = (state: RootState) => state.weatherSlice.weatherDaily;
export const selectIsLangOpen = (state: RootState) => state.weatherSlice.isLangOpen;
