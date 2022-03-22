import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { BASE_CITY } from '../../const';
import { makeFakeOffers } from '../../utils/mocks';
import HistoryRouter from '../history-route';
import Places from './places';

const mockStore = configureMockStore();

describe('Component: Places', () => {
  it('should render correctly', () => {
    const offersCount = 5;
    const history = createMemoryHistory();
    const store = mockStore({
      USER: {},
      OFFERS: {},
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Places city={BASE_CITY} offers={makeFakeOffers(5)} />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(`${offersCount} places to stay in ${BASE_CITY.name}`)).toBeInTheDocument();
  });
});
