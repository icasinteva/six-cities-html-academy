import { render, screen } from '@testing-library/react';

import ReviewRatingInput from './review-rating-input';

describe('Component: ReviewRatingInput', () => {
  it('should render correctly', () => {
    const onRatingChange = jest.fn();
    const { container } = render(<ReviewRatingInput rating='2' disabled={false} onRatingChange={onRatingChange} />);
    const secondStar = screen.getByTestId('2-stars');

    expect(container).toMatchSnapshot();
    expect(secondStar).toBeChecked();
  });
});
