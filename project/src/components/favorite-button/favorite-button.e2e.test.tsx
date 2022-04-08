import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';

import { createMemoryHistory, MemoryHistory } from 'history';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { AppRoute, AuthorizationStatus } from '../../const';
import HistoryRouter from '../history-route';
import FavoriteButton from './favorite-button';

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);

const makeFakeFavoriteButton = (history: MemoryHistory, store = mockStore({
  USER: {
    authorizationStatus: AuthorizationStatus.NoAuth,
  },
})) => (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <FavoriteButton id={17} className='property' isFavorite={false} size={{width: 31, height: 33}} />
    </HistoryRouter>
  </Provider>
);

describe('Component: FavoriteButton', () => {
  it('should redirect to /login when user is not authorized and click the favorite button', () => {
    const history = createMemoryHistory();

    render(makeFakeFavoriteButton(history));

    screen.getByTestId('favorite-button').click();

    expect(history.location.pathname).toBe(AppRoute.SignIn);
  });

  it('should not redirect to /login when user is authorized and click the favorite button', () => {
    const history = createMemoryHistory();
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.Auth,
      },
    });

    render(makeFakeFavoriteButton(history, store));

    screen.getByTestId('favorite-button').click();

    expect(history.location.pathname).not.toBe(AppRoute.SignIn);
  });
});
