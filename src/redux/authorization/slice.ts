import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorizationState, User } from './types';

const initialState: AuthorizationState = {
  usersBase: [],
  user: {
    email: '',
    password: '',
    inBase: false,
  },
};

const authorizationSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {},
});

const {} = authorizationSlice.actions;
export default authorizationSlice.reducer;
