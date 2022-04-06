import { configureMockStore } from '@jedmao/redux-mock-store';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import HistoryRouter from '../history-route';
import Layout from './layout';
import { makeFakeFavorites, makeFakeOffers } from '../../utils/mocks';
import { getFavoritesByCity } from '../../services/helpers';

const mockStore = configureMockStore();
const fakeFavorites = makeFakeFavorites(10);

const store = mockStore({
  USER: {},
  OFFER: {},
  OFFERS: {
    offers: makeFakeOffers(10),
  },
  FAVORITES: {
    favorites: getFavoritesByCity(fakeFavorites),
  },
});

const history = createMemoryHistory();

describe('Component: Layout', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Layout />
        </HistoryRouter>
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});
