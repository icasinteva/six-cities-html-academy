import { AuthorizationStatus } from '../const';

export const generateUser = (authorizationStatus: AuthorizationStatus) => authorizationStatus === AuthorizationStatus.Auth ? {
  userName: 'Oliver',
  email: 'Oliver.conner@gmail.com',
  avatar:'img/avatar-angelina.jpg',
} : {
  userName: 'Anonim',
};
