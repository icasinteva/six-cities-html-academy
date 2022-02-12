import PropertyReviewItem from '../property-review-item/property-review-item';

type Review = {
    author: string,
    avatar: string,
    rating: number,
    text: string,
    date: {
      month: string,
      year: number
    }
}

type PropertyReviewsListProps = {
    reviews: Review[]
}
function PropertyReviewsList({ reviews }: PropertyReviewsListProps) {
  return (
    <>
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => <PropertyReviewItem key='' review={review} />)}
      </ul>
    </>
  );
}

export default PropertyReviewsList;
