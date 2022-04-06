import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import HistoryRouter from '../../components/history-route';
import { AuthorizationStatus } from '../../const';
import { getFavoritesByCity } from '../../services/helpers';
import { makeFakeFavorites } from '../../utils/mocks';
import Favorites from './favorites';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const history = createMemoryHistory();

describe('Component: Favorites', () => {
  it('should render FavoritesEmpty if no favorites', () => {
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.Auth,
      },
      FAVORITES: {
        favorites: [],
      },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Favorites />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText('Nothing yet saved.')).toBeInTheDocument();
    expect(screen.getByText('Save properties to narrow down search or plan your future trips.')).toBeInTheDocument();
  });

  it('should render FavoritesList if there are favorites', () => {
    const fakeFavorites = makeFakeFavorites(10);
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.Auth,
      },
      FAVORITES: {
        favorites: getFavoritesByCity(fakeFavorites),
      },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Favorites />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText('Saved listing')).toBeInTheDocument();
  });
});
