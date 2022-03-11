import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app/app';
import { AuthorizationStatus } from './const';
import { generateUser } from './mocks/user';
import { store } from './store';

const Settings = {
  AUTHORIZATION_STATUS: AuthorizationStatus.Auth,
};

const initialState = {
  authorizationStatus: Settings.AUTHORIZATION_STATUS,
  user: generateUser(Settings.AUTHORIZATION_STATUS),
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App {...initialState} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
