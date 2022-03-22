import { render } from '@testing-library/react';
import Rating from './rating';

describe('Component: Rating', () => {
  test('should render correctly', () => {
    const { container } = render(<Rating className='property' rating={4.8} />);

    expect(container).toMatchSnapshot();
  });
});

