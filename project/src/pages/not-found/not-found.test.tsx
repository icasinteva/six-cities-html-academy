import { render } from '@testing-library/react';
import NotFound from './not-found';

describe('Component: NotFound', () => {
  it('should render correctly', () => {
    const { container } = render(<NotFound />);

    expect(container).toMatchSnapshot();
  });
});
