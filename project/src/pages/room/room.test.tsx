import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';

import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';

import HistoryRouter from '../../components/history-route';
import { AuthorizationStatus } from '../../const';
import { makeFakeOffer, makeFakeReviews } from '../../utils/mocks';
import Room from './room';

const mockStore = configureMockStore();
const fakeOffer = makeFakeOffer();
const history = createMemoryHistory();

describe('Component: Room', () => {
  it('should render correctly', () => {
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.Auth,
      },
      OFFER: {
        offer: fakeOffer,
        reviews: makeFakeReviews(5),
        nearByOffers: [],
      },
      REVIEWS_FORM: {},
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Room />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId('property__map')).toBeInTheDocument();
    expect(screen.queryByTestId('near-places__item')).not.toBeInTheDocument();
  });
  it('should not render ReviewForm if user is not authorised', () => {
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.NoAuth,
      },
      OFFER: {
        offer: fakeOffer,
        reviews: makeFakeReviews(5),
        nearByOffers: [],
      },
      REVIEWS_FORM: {},
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Room />
        </HistoryRouter>

      </Provider>,
    );

    expect(screen.queryByText('Your review')).not.toBeInTheDocument();
  });

  it('should render ReviewForm if user is authorised', () => {
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.Auth,
      },
      OFFER: {
        offer: fakeOffer,
        reviews: makeFakeReviews(5),
        nearByOffers: [],
      },
      REVIEWS_FORM: {},
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Room />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText('Your review')).toBeInTheDocument();
  });
});
