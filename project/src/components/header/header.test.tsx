import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { AppRoute, AuthorizationStatus } from '../../const';

import HistoryRouter from '../history-route';
import Header from './header';
import { makeFakeUser } from '../../utils/mocks';

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);

describe('Component: Header', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.Auth,
      },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Header />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId('header__logo')).toBeInTheDocument();
    expect(screen.getByTestId('header__nav-link--profile')).toBeInTheDocument();
  });

  it('should render user email and Sign out link when user is authorized', () => {
    const history = createMemoryHistory();
    const fakeUser = makeFakeUser();
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.Auth,
        user: fakeUser,
      },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Header />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId('header__nav-link--profile')).toBeInTheDocument();
    expect(screen.getByTestId('user__avatar')).toBeInTheDocument();
    expect(screen.getByTestId('header__user-name').textContent).toBe(fakeUser.email);
    expect(screen.getByTestId('header__signout').textContent).toBe('Sign out');
  });

  it('should render user Sign in link when user is not authorized', () => {
    const history = createMemoryHistory();
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.NoAuth,
      },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Header />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId('header__nav-link--profile')).toBeInTheDocument();
    expect(screen.queryByTestId('user__avatar')).not.toBeInTheDocument();
    expect(screen.getByTestId('header__login').textContent).toBe('Sign in');
    expect(screen.queryByTestId('header__signout')).not.toBeInTheDocument();
  });

  it('should not render header__nav when on /login', () => {
    const history = createMemoryHistory();
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.NoAuth,
      },
    });

    history.push(AppRoute.SignIn);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Header />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.queryByTestId('header__nav')).not.toBeInTheDocument();
  });
});
