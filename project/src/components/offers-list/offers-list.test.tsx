import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import HistoryRouter from '../history-route';
import OffersList from './offers-list';
import { makeFakeOffers } from '../../utils/mocks';

const mockStore = configureMockStore();
const store = mockStore({
  USER: {},
});
const history = createMemoryHistory();

describe('Component: OffersList', () => {
  it('should render correctly', () => {
    const offersCount = 10;
    const fakeOffers = makeFakeOffers(offersCount);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <OffersList className='cities' offers={fakeOffers}  />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getAllByTestId('cities__item')).toHaveLength(offersCount);
  });
});
