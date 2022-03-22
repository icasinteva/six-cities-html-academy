import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { getFavoritesByCity } from '../../services/helpers';
import { makeFakeFavorites } from '../../utils/mocks';
import HistoryRouter from '../history-route';
import FavoritesList from './favorites-list';

const history = createMemoryHistory();
const mockStore = configureMockStore();
const store = mockStore({
  USER: {},
});

describe('Component: FavoritesList', () => {
  it('should render properly', () => {
    const favoritesCount = 5;
    const favoritesByCity = getFavoritesByCity(makeFakeFavorites(favoritesCount));

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <FavoritesList favorites={favoritesByCity} />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText('Saved listing')).toBeInTheDocument();
    expect(screen.getByTestId('favorites__list')).toBeInTheDocument();
    expect(screen.getAllByTestId('favorites__city')).toHaveLength(Object.keys(favoritesByCity).length);
    expect(screen.getAllByTestId('favorites__item')).toHaveLength(favoritesCount);
  });
});
