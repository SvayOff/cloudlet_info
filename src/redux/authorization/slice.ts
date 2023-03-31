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
  errorDataSignIn: false,
  isUserFounded: true,
  isVisibleLogout: false,
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
        alert('Введiть Логiн який складається з 5 букв i бiльше!');
      } else if (state.registrPassword.length < 5) {
        alert('Введiть Пароль який складається з 5 букв та бiльше!');
      } else if (state.registrEmail.length < 1) {
        alert('Введiть Емейл який бiльше одного символа, i мiстить в собi "@ та ."!');
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

    setRegistered(state, action: PayloadAction<boolean>) {
      state.registered = action.payload;
    },

    authorization(state) {
      if (state.usersBase.length <= 0) {
        state.isUserFounded = false;
      }
      state.usersBase.find((user) => {
        if (user.login !== state.authLogin) {
          state.isUserFounded = false;
          state.errorDataSignIn = false;
        } else if (user.login === state.authLogin && user.password !== state.authPassword) {
          state.isUserFounded = true;
          state.errorDataSignIn = true;
        } else if (user.login === state.authLogin && user.password === state.authPassword) {
          state.authLogin = '';
          state.authPassword = '';
          state.authorized = true;
          state.isUserFounded = true;
          state.errorDataSignIn = false;
        }
      });
    },

    setAuthLogin(state, action: PayloadAction<string>) {
      state.authLogin = action.payload;
    },

    setAuthPassword(state, action: PayloadAction<string>) {
      state.authPassword = action.payload;
    },

    setErrorDataSignIn(state, action: PayloadAction<boolean>) {
      state.errorDataSignIn = action.payload;
    },

    setIsVisibleLogout(state, action: PayloadAction<boolean>) {
      state.isVisibleLogout = action.payload;
    },

    setLogout(state, action: PayloadAction<boolean>) {
      state.authorized = action.payload;
    },
  },
});

export const {
  registration,
  setRegistrLogin,
  setRegistrEmail,
  setRegistrPassword,
  setRegistered,
  authorization,
  setAuthLogin,
  setAuthPassword,
  setErrorDataSignIn,
  setIsVisibleLogout,
  setLogout,
} = authorizationSlice.actions;
export default authorizationSlice.reducer;
