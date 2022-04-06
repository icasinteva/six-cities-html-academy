import { FormEvent, useCallback, useEffect, useMemo } from 'react';
import { REVIEW_SYMBOLS } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useReviewData } from '../../hooks/use-review-data';
import { postReview } from '../../store/api-actions';
import ReviewRatingInput from '../review-rating-input/review-rating-input';
import Spinner from '../spinner';
import './style.css';

type ReviewFormProps = {
  hotelId: string
}

function ReviewsForm({ hotelId }: ReviewFormProps) {
  const [ reviewData, handleReviewDataChange ] = useReviewData();
  const { isFormDisabled, isReviewPosted } = useAppSelector(({ REVIEWS_FORM }) => REVIEWS_FORM);

  const dispatch = useAppDispatch();

  const handleFieldsChange = useCallback((
    ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {

    const { name, value } = ev.currentTarget;

    handleReviewDataChange({ [name]: value });
  }, [handleReviewDataChange]);

  const handleSubmit = useCallback((evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(postReview({ hotelId, review: reviewData }));

  }, [hotelId, reviewData, dispatch]);

  useEffect(() => {
    if (isReviewPosted) {
      handleReviewDataChange();
    }
  }, [isReviewPosted]);

  const isFormValid = useMemo(() => reviewData.comment && reviewData.comment.length >= REVIEW_SYMBOLS.min && reviewData.rating, [reviewData]);

  return (
    <form className="reviews__form form" action="" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <ReviewRatingInput disabled={isFormDisabled} rating={reviewData.rating} onRatingChange={handleFieldsChange} />
      <textarea data-testid="review" disabled={isFormDisabled} required minLength={ REVIEW_SYMBOLS.min } maxLength={ REVIEW_SYMBOLS.max } value={reviewData.comment} className="reviews__textarea form__textarea" id="review" name="comment" placeholder="Tell how was your stay, what you like and what can be improved" onChange={handleFieldsChange}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{REVIEW_SYMBOLS.min} characters</b>.
        </p>
        <input className="reviews__submit form__submit button" type="submit" disabled={!isFormValid || isFormDisabled} value="Submit" />
      </div>
      {isFormDisabled && <div className="reviews__spinner"><Spinner /></div>}
    </form>
  );
}

export default ReviewsForm;
