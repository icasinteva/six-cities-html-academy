import { formatDate } from '../../helpers';
import { Review } from '../../types/offer';
import Rating from '../rating/rating';

type PropertyReviewItemProps = {
    review: Review
}

function PropertyReviewItem({ review }: PropertyReviewItemProps) {
  const { user, rating, date, comment } = review;
  const {avatarUrl, name} = user;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <Rating className='reviews' rating={rating} />
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime="2019-04-24">{formatDate(date)}</time>
      </div>
    </li>
  );
}

export default PropertyReviewItem;
