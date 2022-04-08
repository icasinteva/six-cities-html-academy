import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import HistoryRouter from '../../components/history-route';
import { AppRoute, AuthorizationStatus } from '../../const';
import Login from './login';

const mockStore = configureMockStore();
const store = mockStore({
  USER: {
    authorizationStatus: AuthorizationStatus.NoAuth,
  },
});

const history = createMemoryHistory();

describe('Component: Login', () => {
  it('should render correctly', () => {
    history.push(AppRoute.SignIn);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Login />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId('login-title')).toBeInTheDocument();
    expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();

    userEvent.type(screen.getByTestId('email'), 'keks');
    userEvent.type(screen.getByTestId('password'), '123456');

    expect(screen.getByDisplayValue(/keks/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/123456/i)).toBeInTheDocument();
  });
});
