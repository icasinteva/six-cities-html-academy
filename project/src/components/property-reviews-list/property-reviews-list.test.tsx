import { render, screen } from '@testing-library/react';
import { datatype } from 'faker';
import { OFFER_REVIEWS_COUNT } from '../../const';

import { makeFakeReviews } from '../../utils/mocks';
import PropertyReviewsList from './property-reviews-list';

describe('Component: PropertyReviewsList', () => {
  it('should render correctly', () => {
    const reviewsCount = datatype.number({ min: OFFER_REVIEWS_COUNT });
    const reviews = makeFakeReviews(reviewsCount);

    render(<PropertyReviewsList reviews={reviews} />);

    expect(screen.getByTestId('reviews__title')).toBeInTheDocument();
    expect(screen.getAllByTestId('reviews__item')).toHaveLength(OFFER_REVIEWS_COUNT);
  });

  it('should be written Reviews · 10 when there are 10 or more rewies', () => {
    const reviewsCount = datatype.number({ min: OFFER_REVIEWS_COUNT });
    const reviews = makeFakeReviews(reviewsCount);

    render(<PropertyReviewsList reviews={reviews} />);

    expect(screen.getByTestId('reviews__title').textContent).toBe(`Reviews · ${OFFER_REVIEWS_COUNT}`);
  });

  it('should be written Reviews · `reviewsCount` when there are less than 10 rewies', () => {
    const reviewsCount = datatype.number({ max: OFFER_REVIEWS_COUNT - 1 });
    const reviews = makeFakeReviews(reviewsCount);

    render(<PropertyReviewsList reviews={reviews} />);

    expect(screen.getByTestId('reviews__title').textContent).toBe(`Reviews · ${reviewsCount}`);
  });
});
