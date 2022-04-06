import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-route';
import FooterLogo from './footer-logo';
import HeaderLogo from './header-logo';

describe('Component: Logo', () => {
  test('should render HeaderLogo correctly', () => {
    const history = createMemoryHistory();
    const { container } = render(
      <HistoryRouter history={history}>
        <HeaderLogo />
      </HistoryRouter>,
    );

    expect(container).toMatchSnapshot();
  });

  test('should render FooterLogo correctly', () => {
    const history = createMemoryHistory();
    const { container } = render(
      <HistoryRouter history={history}>
        <FooterLogo />
      </HistoryRouter>,
    );

    expect(container).toMatchSnapshot();
  });
});
