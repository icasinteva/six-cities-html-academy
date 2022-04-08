import { Review } from '../../types/offer';

import PropertyReviewItem from '../property-review-item/property-review-item';
import { OFFER_REVIEWS_COUNT } from '../../const';

type PropertyReviewsListProps = {
    reviews: Review[]
}
function PropertyReviewsList({ reviews }: PropertyReviewsListProps) {
  return (
    <>
      <h2 className="reviews__title" data-testid="reviews__title">Reviews · <span className="reviews__amount">{reviews.length < OFFER_REVIEWS_COUNT ? reviews.length : OFFER_REVIEWS_COUNT}</span></h2>
      <ul className="reviews__list">
        {reviews.slice(0, OFFER_REVIEWS_COUNT).map((review) => <PropertyReviewItem key={review.id} review={review} />)}
      </ul>
    </>
  );
}
export default PropertyReviewsList;
