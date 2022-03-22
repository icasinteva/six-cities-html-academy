import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-route';
import Logo from './logo';

describe('Component: Logo', () => {
  test('should render correctly', () => {
    const history = createMemoryHistory();
    const { container } = render(
      <HistoryRouter history={history}>
        <Logo className='header' width='81' height='41' />
      </HistoryRouter>,
    );

    expect(container).toMatchSnapshot();
  });
});
