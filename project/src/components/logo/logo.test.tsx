import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';

import HistoryRouter from '../history-route';
import FooterLogo from './footer-logo';
import HeaderLogo from './header-logo';

const history = createMemoryHistory();

describe('Component: Logo', () => {
  it('should render HeaderLogo correctly', () => {
    const { container } = render(
      <HistoryRouter history={history}>
        <HeaderLogo />
      </HistoryRouter>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render FooterLogo correctly', () => {
    const { container } = render(
      <HistoryRouter history={history}>
        <FooterLogo />
      </HistoryRouter>,
    );

    expect(container).toMatchSnapshot();
  });
});
