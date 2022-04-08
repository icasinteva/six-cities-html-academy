import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';

import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';

import { CITIES } from '../../const';
import HistoryRouter from '../history-route';
import CitiesList from './cities-list';

const history = createMemoryHistory();
const mockStore = configureMockStore();
const store = mockStore({
  OFFERS: {},
});

describe('Component: CitiesList', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <CitiesList currentCity={CITIES[3]} />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId('locations__list').childNodes).toHaveLength(CITIES.length);
    expect(screen.getByTestId('tabs__item--active').textContent).toEqual(CITIES[3].name);
  });
});
