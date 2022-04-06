import { renderHook } from '@testing-library/react-hooks';
import { Page } from '../const';
import { usePage } from './use-page';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'localhost:9999',
  }),
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

xdescribe('Hook: usePage', () => {
  it('should return array with 2 elements', () => {
    const { result } = renderHook(() => usePage(Page.Index));

    const [ page, handleSetPage ] = result.current;

    expect(result.current).toHaveLength(2);
    expect(Page).toContain(page);
    expect(handleSetPage).toBeInstanceOf(Function);
  });
});
