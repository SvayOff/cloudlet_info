import { configureStore } from '@reduxjs/toolkit';
import weatherSlice from './slices/weatherSlice';

export const store = configureStore({
  reducer: {
    weatherSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;