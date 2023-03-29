import { configureStore } from '@reduxjs/toolkit';
import weatherSlice from './weather/slice';
import themeSlice from './theme/slice';
import authorizationSlice from './authorization/slice';

export const store = configureStore({
  reducer: {
    weatherSlice,
    themeSlice,
    authorizationSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
