import { Review } from '../../types/offer';
import Rating from '../rating/rating';

type PropertyReviewItemProps = {
    review: Review
}

function PropertyReviewItem({ review }: PropertyReviewItemProps) {
  const { author, avatar, text, rating, date } = review;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatar} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{author}</span>
      </div>
      <div className="reviews__info">
        <Rating className='reviews' rating={rating} />
        <p className="reviews__text">{text}</p>
        <time className="reviews__time" dateTime="2019-04-24">{`${date.month} ${date.year}`}</time>
      </div>
    </li>
  );
}

export default PropertyReviewItem;
