import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { generatePath } from 'react-router-dom';
import thunk from 'redux-thunk';

import { AppRoute, AuthorizationStatus, CITIES } from '../../const';
import { getFavoritesByCity } from '../../services/helpers';
import { makeFakeFavorites, makeFakeOffer, makeFakeReviews } from '../../utils/mocks';
import HistoryRouter from '../history-route';
import App from './app';

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);
const fakeFavorites = makeFakeFavorites(10);
const fakeOffer = makeFakeOffer();
const store = mockStore({
  USER: {
    authorizationStatus: AuthorizationStatus.Auth,
  },
  OFFERS: {
    city: CITIES[3],
    offers: fakeFavorites,
  },
  OFFER: {
    offer: fakeOffer,
    reviews: makeFakeReviews(5),
    nearByOffers: [],
  },
  FAVORITES: {
    favorites: getFavoritesByCity(fakeFavorites),
  },
  REVIEWS_FORM: {},
});

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>
);

describe('Application Routing', () => {
  it('should render "Main" when user navigate to "/"', () => {
    history.push(AppRoute.Main);

    render(fakeApp);

    expect(screen.getByText(`${fakeFavorites.length} places to stay in ${CITIES[3].name}`)).toBeInTheDocument();
  });

  it('should render "Room" when user navigate to "/offer/:id"', () => {
    const { id, rating, title } = fakeOffer;

    history.push(generatePath(AppRoute.Room, {
      id: `${id}`,
    }));

    render(fakeApp);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(rating)).toBeInTheDocument();
  });

  it('should render "NotFound" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');

    render(fakeApp);

    expect(screen.getByText('404 Page Not Found')).toBeInTheDocument();
  });


  it('should render "Favorites" when user is authorized and navigate to /favorite', () => {
    history.push('/favorites');

    render(fakeApp);

    expect(screen.getByText('Saved listing')).toBeInTheDocument();
  });
});
