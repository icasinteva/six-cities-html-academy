import { FormEvent, useCallback, useEffect, useMemo } from 'react';

import { ReviewSymbols } from '../../const';
import { useAppSelector } from '../../hooks';
import { useReviewData } from '../../hooks/use-review-data';
import { getFormDisabled, getReviewPosted } from '../../store/reviews-form-data/selectors';
import { ReviewFormData } from '../../types/review-data';
import ReviewRatingInput from '../review-rating-input/review-rating-input';
import Spinner from '../spinner/spinner';

import './style.css';

type ReviewFormProps = {
  hotelId: string,
  onSubmit: (data: ReviewFormData) => void
}

function ReviewsForm({ hotelId, onSubmit }: ReviewFormProps) {
  const [ reviewData, handleReviewDataChange ] = useReviewData();
  const isFormDisabled = useAppSelector(getReviewPosted);
  const isReviewPosted = useAppSelector(getFormDisabled);

  const handleFieldsChange = useCallback((
    ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {

    const { name, value } = ev.currentTarget;

    handleReviewDataChange({ [name]: value });
  }, [handleReviewDataChange]);

  const handleSubmit = useCallback((evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    onSubmit({ hotelId, review: reviewData });

  }, [hotelId, reviewData, onSubmit]);

  useEffect(() => {
    if (isReviewPosted) {
      handleReviewDataChange();
    }
  }, [isReviewPosted]);

  const isFormValid = useMemo(() => reviewData.comment && reviewData.comment.length >= ReviewSymbols.min && reviewData.rating, [reviewData]);

  return (
    <form className="reviews__form form" action="" onSubmit={handleSubmit} data-testid="reviews__form">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <ReviewRatingInput disabled={isFormDisabled} rating={reviewData.rating} onRatingChange={handleFieldsChange} />
      <textarea data-testid="review" disabled={isFormDisabled} required minLength={ ReviewSymbols.min } maxLength={ ReviewSymbols.max } value={reviewData.comment} className="reviews__textarea form__textarea" id="review" name="comment" placeholder="Tell how was your stay, what you like and what can be improved" onChange={handleFieldsChange}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{ReviewSymbols.min} characters</b>.
        </p>
        <input className="reviews__submit form__submit button" type="submit" disabled={!isFormValid || isFormDisabled} value="Submit" />
      </div>
      {isFormDisabled && <div className="reviews__spinner"><Spinner /></div>}
    </form>
  );
}

export default ReviewsForm;
