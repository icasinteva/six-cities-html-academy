import { userProcess } from './user-process';
import { AuthorizationStatus } from '../../const';
import { requireAuthorization, setUser } from './user-process';
import { makeFakeUser } from '../../utils/mocks';

describe('Reducer: user', () => {
  it('without additional parameters should return initial state', () => {
    expect(userProcess.reducer(undefined, { type: 'UNKNOWN_ACTION' }))
      .toEqual({ authorizationStatus: AuthorizationStatus.Unknown, user: null });
  });

  it('should update authorizationStatus to "AUTH" and set user', () => {
    const mockUser = makeFakeUser();
    const state = { authorizationStatus: AuthorizationStatus.Unknown, user: null };

    expect(userProcess.reducer(state, requireAuthorization(AuthorizationStatus.Auth)).authorizationStatus)
      .toEqual(AuthorizationStatus.Auth);

    expect(userProcess.reducer(state, setUser(mockUser)).user)
      .toEqual(mockUser);
  });

  it('should update authorizationStatus to "NO_AUTH" and drop user', () => {
    const mockUser = makeFakeUser();
    const state = { authorizationStatus: AuthorizationStatus.Auth, user: mockUser };

    expect(userProcess.reducer(state, requireAuthorization(AuthorizationStatus.NoAuth)).authorizationStatus)
      .toEqual(AuthorizationStatus.NoAuth);

    expect(userProcess.reducer(state, setUser(null)).user)
      .toEqual(null);
  });
});
