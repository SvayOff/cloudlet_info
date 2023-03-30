export interface AuthorizationState {
  usersBase: User[];
  registered: boolean;
  authorized: boolean;
  registrLogin: string;
  registrPassword: string;
  registrEmail: string;
  authLogin: string;
  authPassword: string;
}

export type User = {
  login: string;
  password: string;
  email: string;
  inBase: boolean;
};
