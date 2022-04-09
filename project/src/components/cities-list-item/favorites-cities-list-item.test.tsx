import { configureMockStore } from '@jedmao/redux-mock-store';
import { render } from '@testing-library/react';

import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';

import { BASE_CITY } from '../../const';
import HistoryRouter from '../history-route';
import FavoritesCityListItem from './favorites-cities-list-item';

const mockStore = configureMockStore();
const store = mockStore();

describe('Component: FavoritesCityListItem', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const { container } = render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <FavoritesCityListItem cityName={BASE_CITY.name} />
        </HistoryRouter>
      </Provider>);

    expect(container).toMatchSnapshot();
  });
});
