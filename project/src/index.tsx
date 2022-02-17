import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { AuthorizationStatus } from './const';

const Cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

const Settings = {
  CITIES: Cities,
  ACTIVE_CITY: Cities[0],
  AUTHORIZATION_STATUS: AuthorizationStatus.Auth,
  PLACES_COUNT: 312,
  FAVORITES_COUNT: 0,
};

const initialState = {
  authorizationStatus: Settings.AUTHORIZATION_STATUS,
  placesCount: Settings.PLACES_COUNT,
  favoritesCount: Settings.FAVORITES_COUNT,
  cities: Settings.CITIES,
  activeCity: Settings.ACTIVE_CITY,
};

ReactDOM.render(
  <React.StrictMode>
    <App {...initialState} />
  </React.StrictMode>,
  document.getElementById('root'));
