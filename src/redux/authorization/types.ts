export interface AuthorizationState {
  usersBase: User[];
  registered: boolean;
  authorized: boolean;
  registrLogin: string;
  registrPassword: string;
  registrEmail: string;
  authLogin: string;
  authPassword: string;
  authorizedUser: User;
  errorDataSignIn: boolean;
  isUserFounded: boolean;
  isVisibleLogout: boolean;
}

export type User = {
  login: string;
  password: string;
  email: string;
  inBase: boolean;
};
