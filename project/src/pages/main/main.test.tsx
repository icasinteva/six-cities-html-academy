import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';

import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import HistoryRouter from '../../components/history-route';
import { AuthorizationStatus, BASE_CITY } from '../../const';
import { makeFakeOffers } from '../../utils/mocks';
import Main from './main';

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);
const history = createMemoryHistory();
const city = BASE_CITY;

describe('Component: Main', () => {
  it('should render NoPlaces when there are no offers for the city', () => {
    const store = mockStore({
      OFFERS: {
        city,
        offers: [],
      },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Main />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText('No places to stay available')).toBeInTheDocument();
    expect(screen.getByText(`We could not find any property available at the moment in ${city.name}`)).toBeInTheDocument();
  });

  it('should render Places when there are offers for the city', () => {
    const offersCount = 10;
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.Auth,
      },
      OFFERS: {
        city,
        offers: makeFakeOffers(offersCount),
      },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Main />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId('locations__list')).toBeInTheDocument();

    expect(screen.getByText(`${offersCount} places to stay in ${city.name}`)).toBeInTheDocument();
    expect(screen.getByTestId('cities__map')).toBeInTheDocument();
  });
});
