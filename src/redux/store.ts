import { configureStore } from '@reduxjs/toolkit';
import weatherSlice from './weather/slice';
import themeSlice from './theme/slice';

export const store = configureStore({
  reducer: {
    weatherSlice,
    themeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
