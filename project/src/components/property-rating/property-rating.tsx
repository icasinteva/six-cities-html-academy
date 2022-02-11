import Rating from '../rating/rating';

type PropertyRatingProps = {
    rating: number
}

function PropertyRating({ rating }: PropertyRatingProps) {
  return (
    <Rating className='property' rating={rating} showValue />
  );
}

export default PropertyRating;
