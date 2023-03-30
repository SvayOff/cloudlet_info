import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorizationState } from './types';

const initialState: AuthorizationState = {
  usersBase: [],
  registered: false,
  authorized: false,
  registrLogin: '',
  registrPassword: '',
  registrEmail: '',
  authLogin: '',
  authPassword: '',
};

const authorizationSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    registration(state) {
      const newUser = {
        login: state.registrLogin,
        password: state.registrPassword,
        email: state.registrEmail,
        inBase: false,
      };

      const userFound = state.usersBase.find((user) => {
        if (user.login === newUser.login || user.email === newUser.email) {
          return user;
        }
      });

      if (userFound) {
        alert('Користувач з таким Логiном чи Емейлом вже присутнiй!');
      } else if (state.registrLogin.length < 5) {
        alert('Введiть Логiн який складається з 5 букв та бiльше!');
      } else if (state.registrPassword.length < 5) {
        alert('Введiть Пароль який складається з 5 букв та бiльше!');
      } else {
        newUser.inBase = true;
        state.usersBase.push(newUser);

        state.registered = true;
        state.registrLogin = '';
        state.registrPassword = '';
        state.registrEmail = '';
      }
    },

    setRegistrLogin(state, action: PayloadAction<string>) {
      state.registrLogin = action.payload;
    },

    setRegistrEmail(state, action: PayloadAction<string>) {
      state.registrEmail = action.payload;
    },

    setRegistrPassword(state, action: PayloadAction<string>) {
      state.registrPassword = action.payload;
    },

    authorization(state) {
      state.usersBase.find((user) => {
        if (user.login === state.authLogin && user.password === state.authPassword) {
          state.authorized = true;

          state.authLogin = '';
          state.authPassword = '';

          return user;
        } else {
          state.authorized = false;
        }
      });
    },

    setAuthLogin(state, action: PayloadAction<string>) {
      state.authLogin = action.payload;
    },

    setAuthPassword(state, action: PayloadAction<string>) {
      state.authPassword = action.payload;
    },
  },
});

export const {
  registration,
  setRegistrLogin,
  setRegistrEmail,
  setRegistrPassword,
  authorization,
  setAuthLogin,
  setAuthPassword,
} = authorizationSlice.actions;
export default authorizationSlice.reducer;
