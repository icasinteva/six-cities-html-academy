import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app';
import { AuthorizationStatus, LocationItem } from './const';
import { locationOffers } from './mocks/offers';
import { generateUser } from './mocks/user';

const Settings = {
  AUTHORIZATION_STATUS: AuthorizationStatus.Auth,
  BASE_LOCATION: LocationItem.Paris,
  FAVORITES_COUNT: locationOffers.map(({ location, offers }) => ({ location, offers: offers.filter(({ favorite }) => favorite) })).length,
};

const initialState = {
  authorizationStatus: Settings.AUTHORIZATION_STATUS,
  baseLocation: Settings.BASE_LOCATION,
  favoritesCount: Settings.FAVORITES_COUNT,
  offers: locationOffers,
  user: generateUser(Settings.AUTHORIZATION_STATUS),
};

ReactDOM.render(
  <React.StrictMode>
    <App {...initialState} />
  </React.StrictMode>,
  document.getElementById('root'));
