import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

const Settings = {
  CITIES: Cities,
  ACTIVE_CITY: Cities[3],
  LOGGED_IN: true,
  PLACES_COUNT: 312,
  FAVORITES_COUNT: 3,
};

ReactDOM.render(
  <React.StrictMode>
    <App loggedIn={Settings.LOGGED_IN} placesCount={Settings.PLACES_COUNT} favoritesCount={Settings.FAVORITES_COUNT} cities={Settings.CITIES} activeCity={Settings.ACTIVE_CITY} />
  </React.StrictMode>,
  document.getElementById('root'));
