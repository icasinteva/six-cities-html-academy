import { configureMockStore } from '@jedmao/redux-mock-store';
import { render } from '@testing-library/react';

import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { AuthorizationStatus } from '../../const';
import HistoryRouter from '../history-route';
import FavoriteButton from './favorite-button';

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);

const store = mockStore({
  USER: {
    authorizationStatus: AuthorizationStatus.NoAuth,
  },
});

const history = createMemoryHistory();

describe('Component: FavoriteButton', () => {
  it('should render correctly', () => {

    const { container } = render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <FavoriteButton id={17} className='property' isFavorite={false} size={{width: 31, height: 33}} />
        </HistoryRouter>
      </Provider>);

    expect(container).toMatchSnapshot();
  });
});
