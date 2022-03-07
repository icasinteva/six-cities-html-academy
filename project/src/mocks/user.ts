import { AuthorizationStatus } from '../const';

export const generateUser = (authorizationStatus: AuthorizationStatus) => authorizationStatus === AuthorizationStatus.Auth ? {
  id: 1,
  isPro: false,
  name: 'Oliver',
  email: 'Oliver.conner@gmail.com',
  avatarUrl: 'img/avatar-angelina.jpg',
  token: 'qhdowry9283rrw',
} : {
  name: 'Anonim',
};
