import { FormEvent, useRef, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { postReview } from '../../store/api-actions';
import { ReviewData } from '../../types/review-data';
import ReviewRatingInput from '../review-form-rating/review-form-rating';

type ReviewFormProps = {
  hotelId: string
}

function ReviewsForm({ hotelId }: ReviewFormProps) {
  const commentRef = useRef<HTMLTextAreaElement | null>(null);
  const [rating, setRating] = useState<number>(0);


  const handleRatingChange = (
    ev: React.ChangeEvent<HTMLInputElement>,
  ): void => {

    setRating(+ev.target.value);
  };

  const dispatch = useAppDispatch();

  const onSubmit = (review: ReviewData) => {
    dispatch(postReview({ hotelId, review }));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (commentRef.current !== null) {
      onSubmit({
        comment: commentRef.current.value,
        rating,
      });
    }
  };

  return (
    <form className="reviews__form form" action="" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <ReviewRatingInput onRatingChange={handleRatingChange} />
      <textarea ref={commentRef} className="reviews__textarea form__textarea" id="review" name="comment" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit">Submit</button>
      </div>
    </form>
  );
}

export default ReviewsForm;
