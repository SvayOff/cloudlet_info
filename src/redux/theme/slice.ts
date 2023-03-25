import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeState } from './types';

const initialState: ThemeState = {
  theme: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
      localStorage.setItem('theme', action.payload);
      if (action.payload === 'dark') {
        document.documentElement.classList.add('data-theme', 'dark');
      } else {
        document.documentElement.classList.remove('data-theme', 'dark');
        document.documentElement.classList.add('data-theme', 'light');
      }
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
