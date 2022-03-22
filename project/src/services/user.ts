import { User } from '../types/user';

const USER_DATA_KEY_NAME = 'six-cities-user-data';

export type Token = string;

export const getUser = (): User => {
  const user = localStorage.getItem(USER_DATA_KEY_NAME);

  return user ? JSON.parse(user) : {};
};

export const getToken = (): Token => {
  const { token } = getUser();

  return token ?? '';
};

export const saveUser = (user: User): void => {
  localStorage.setItem(USER_DATA_KEY_NAME, JSON.stringify(user));
};

export const dropUser = (): void => {
  localStorage.removeItem(USER_DATA_KEY_NAME);
};
