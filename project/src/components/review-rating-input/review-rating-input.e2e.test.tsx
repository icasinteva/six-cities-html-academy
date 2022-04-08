import { render, screen } from '@testing-library/react';

import ReviewRatingInput from './review-rating-input';

describe('Component: ReviewRatingInput', () => {
  it('should call onRatingChange when star is clicked', () => {
    const rating = '2';
    const onRatingChange = jest.fn();

    render(<ReviewRatingInput disabled={false} onRatingChange={onRatingChange} />);

    const ratingStar = screen.getByTestId(`${rating}-stars`);

    ratingStar.click();

    expect(onRatingChange).toBeCalledTimes(1);
  });
});
