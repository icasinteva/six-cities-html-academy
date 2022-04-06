import { render, screen } from '@testing-library/react';
import { makeFakeReviews } from '../../utils/mocks';
import PropertyReviewsList from './property-reviews-list';

describe('Component: PropertyReviewsList', () => {
  it('should render correctly', () => {
    const reviewsCount = 5;
    const reviews = makeFakeReviews(reviewsCount);

    render(<PropertyReviewsList reviews={reviews} />);

    expect(screen.getByTestId('reviews__title')).toBeInTheDocument();
    expect(screen.getByTestId('reviews__title').textContent).toBe(`Reviews · ${reviewsCount}`);
    expect(screen.getAllByTestId('reviews__item')).toHaveLength(reviewsCount);
  });
});
