export interface AuthorizationState {
  usersBase: User[];
  user: User;
}

export type User = {
  email: string;
  password: string;
  inBase: boolean;
};
