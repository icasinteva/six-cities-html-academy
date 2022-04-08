import { act, renderHook } from '@testing-library/react-hooks';
import { LoadingStatus } from '../const';
import { useLoading } from './use-loading';

describe('Hook: useLoading', () => {
  it('should return array with 2 elements', () => {
    const { result } = renderHook(() => useLoading());

    const [ loading, handleLoading ] = result.current;

    expect(result.current).toHaveLength(2);
    expect(typeof loading).toBe('boolean');
    expect(handleLoading).toBeInstanceOf(Function);
  });

  it('should be correctly change state', () => {
    const { result } = renderHook(
      () => useLoading(),
    );

    const [ initialLoading, handleLoading ] = result.current;

    expect(initialLoading).toBe(true);

    act(() => handleLoading(LoadingStatus.Success));

    let [ loading ] = result.current;

    expect(loading).toBe(false);

    act(() => handleLoading(LoadingStatus.InProgress));

    [ loading ] = result.current;

    expect(loading).toBe(true);
  });
});
