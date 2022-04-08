import { act, renderHook } from '@testing-library/react-hooks';

import { AuthorizationStatus, LoadingStatus, Page } from '../const';
import { makeFakeOffer } from '../utils/mocks';
import { usePage } from './use-page';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'localhost:9999/offer/17',
  }),
}));

describe('Hook: usePage', () => {
  it('should return array with 2 elements', () => {
    const options = {
      authorizationStatus: AuthorizationStatus.Auth,
      offerData: {
        offer: makeFakeOffer(),
        loadingStatus: LoadingStatus.Success,
      },
    };
    const { result } = renderHook(() => usePage(Page.Index, options));

    const [ page, handleSetPage ] = result.current;

    expect(result.current).toHaveLength(2);
    expect(page).toBe(Page.Index);
    expect(handleSetPage).toBeInstanceOf(Function);
  });

  it('should update page correctly', () => {
    const options = {
      authorizationStatus: AuthorizationStatus.Auth,
      offerData: {
        offer: makeFakeOffer(),
        loadingStatus: LoadingStatus.Success,
      },
    };
    const { result } = renderHook(() => usePage(Page.Index, options));

    let [ page, handleSetPage ] = result.current;

    expect(result.current).toHaveLength(2);
    expect(page).toBe(Page.Index);
    expect(handleSetPage).toBeInstanceOf(Function);

    act(() => {
      handleSetPage();
    });

    [ page, handleSetPage ] = result.current;

    expect(page).toBe(Page.Property);
  });
});
