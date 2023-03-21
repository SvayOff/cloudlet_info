import { configureStore } from '@reduxjs/toolkit';
import weatherSlice from './slices/weatherSlice';
import themeSlice from './slices/themeSlice';

export const store = configureStore({
  reducer: {
    weatherSlice,
    themeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
