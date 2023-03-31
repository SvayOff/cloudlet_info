import { RootState } from '../store';

export const selectRegistered = (state: RootState) => state.authorizationSlice.registered;
export const selectAuthorized = (state: RootState) => state.authorizationSlice.authorized;
export const selectIsVisibleLogout = (state: RootState) => state.authorizationSlice.isVisibleLogout;

export const selectAuthorizationSlice = (state: RootState) => state.authorizationSlice;
