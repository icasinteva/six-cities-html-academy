import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';

import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';

import { makeFakeOffers } from '../../utils/mocks';
import HistoryRouter from '../history-route';
import NearPlaces from './near-places';

const mockStore = configureMockStore();

describe('Component: NearPlaces', () => {
  it('should render correctly', () => {
    const offersCount = 3;
    const history = createMemoryHistory();
    const store = mockStore({
      USER: {},
      OFFERS: {},
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <NearPlaces offers={makeFakeOffers(offersCount)}/>
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText('Other places in the neighbourhood')).toBeInTheDocument();
    expect(screen.getAllByTestId('near-places__item')).toHaveLength(offersCount);
  });
});
