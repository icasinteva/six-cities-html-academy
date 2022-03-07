import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app';
import { AuthorizationStatus, BASE_CITY } from './const';
import { offers } from './mocks/offers';
import { generateUser } from './mocks/user';

const Settings = {
  AUTHORIZATION_STATUS: AuthorizationStatus.Auth,
  BASE_CITY,
  OFFERS: offers,
};

const initialState = {
  authorizationStatus: Settings.AUTHORIZATION_STATUS,
  baseCity: Settings.BASE_CITY,
  offers: Settings.OFFERS,
  user: generateUser(Settings.AUTHORIZATION_STATUS),
};

ReactDOM.render(
  <React.StrictMode>
    <App {...initialState} />
  </React.StrictMode>,
  document.getElementById('root'));
