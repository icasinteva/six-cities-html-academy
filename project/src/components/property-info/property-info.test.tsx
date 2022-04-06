import { render, screen } from '@testing-library/react';
import PropertyInfo from './property-info';
import { makeFakeOffer } from '../../utils/mocks';
import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { AuthorizationStatus, OFFERTYPE_TO_LABEL } from '../../const';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-route';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  USER: {
    authorizationStatus: AuthorizationStatus.Auth,
  },
});
const history = createMemoryHistory();

describe('Component: PropertyInfo', () => {
  it('should render correctly', () => {
    const fakeOffer = makeFakeOffer({ isPremium: true });
    const { title, type, bedrooms, maxAdults } = fakeOffer;

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <PropertyInfo offer={fakeOffer} />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId('property__mark')).toBeInTheDocument();
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByTestId('property__feature--entire').textContent).toBe(OFFERTYPE_TO_LABEL[type]);
    expect(screen.getByTestId('property__feature--bedrooms').textContent).toBe(`${bedrooms} Bedrooms`);
    expect(screen.getByTestId('property__feature--adults').textContent).toBe(`Max ${maxAdults} adults`);
    expect(screen.getByTestId('property__price')).toBeInTheDocument();
    expect(screen.getByTestId('property__host')).toBeInTheDocument();
  });
});
