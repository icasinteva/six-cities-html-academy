import { render } from '@testing-library/react';

import Price from './price';

describe('Component: Price', () => {
  it('should render correctly', () => {
    const { container } = render(<Price className='property' amount={120} />);

    expect(container).toMatchSnapshot();
  });
});
