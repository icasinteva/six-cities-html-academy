import { render, screen } from '@testing-library/react';
import { makeFakeReviews } from '../../utils/mocks';
import PropertyReviewItem from './property-review-item';
import { formatDate } from '../../services/helpers';

describe('Component: PropertyReviewItem', () => {
  it('should render correctly', () => {
    const [review] = makeFakeReviews(1);
    const { user, rating, date, comment } = review;
    const { avatarUrl, name } = user;
    const percentage = Math.round(rating) * 20;

    render(<PropertyReviewItem review={review} />);

    expect(screen.getByAltText('Reviews avatar').getAttribute('src')).toBe(avatarUrl);
    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(comment)).toBeInTheDocument();
    expect(screen.getByTestId('rating')).toBeInTheDocument();

    const style = screen.getByTestId('rating').getAttribute('style');
    expect(style).toBe(`width: ${percentage}%;`);

    expect(screen.getByText(formatDate(date))).toBeInTheDocument();
  });
});
