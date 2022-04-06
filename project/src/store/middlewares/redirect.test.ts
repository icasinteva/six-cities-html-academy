import { configureMockStore } from '@jedmao/redux-mock-store';
import { AnyAction } from 'redux';
import { redirect } from './redirect';
import { redirectToRoute } from '../action';
import { AppRoute } from '../../const';
import { State } from '../../types/state';

const fakeHistory = {
  location: {pathname: ''},
  push(path: string) {
    this.location.pathname = path;
  },
};

jest.mock('../../browser-history', () => fakeHistory);

const middlewares = [redirect];
const mockStore = configureMockStore<State, AnyAction>(middlewares);
const store = mockStore();

describe('Middleware: redirect', () => {
  beforeEach(() => {
    fakeHistory.push('');
  });

  it('should redirect to /login', () => {
    store.dispatch(redirectToRoute(AppRoute.SignIn));
    expect(fakeHistory.location.pathname).toBe(AppRoute.SignIn);
    expect(store.getActions()).toEqual([
      redirectToRoute(AppRoute.SignIn),
    ]);
  });

  it('should not redirect to / because of bad action', () => {
    store.dispatch({ type: 'UNKNOWN_ACTION' });
    expect(fakeHistory.location.pathname).not.toBe(AppRoute.Main);
  });
});
