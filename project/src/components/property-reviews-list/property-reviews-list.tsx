import { Review } from '../../types/offer';

import PropertyReviewItem from '../property-review-item/property-review-item';

type PropertyReviewsListProps = {
    reviews: Review[]
}
function PropertyReviewsList({ reviews }: PropertyReviewsListProps) {
  return (
    <>
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review, idx) => <PropertyReviewItem key={review.id} review={review} />)}
      </ul>
    </>
  );
}
export default PropertyReviewsList;
