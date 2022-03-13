import { FormEvent, useCallback, useMemo } from 'react';
import { useAppDispatch } from '../../hooks';
import { useReviewData } from '../../hooks/useReviewData';
import { postReview } from '../../store/api-actions';
import ReviewRatingInput from '../review-form-rating/review-form-rating';

type ReviewFormProps = {
  hotelId: string
}

function ReviewsForm({ hotelId }: ReviewFormProps) {
  const [reviewData, handleReviewDataChange] = useReviewData();

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
    handleReviewDataChange();

  }, [hotelId, reviewData, dispatch, handleReviewDataChange]);

  const isFormValid = useMemo(() => reviewData.comment && reviewData.rating, [reviewData]);

  return (
    <form className="reviews__form form" action="" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <ReviewRatingInput rating={reviewData.rating} onRatingChange={handleFieldsChange} />
      <textarea value={reviewData.comment} className="reviews__textarea form__textarea" id="review" name="comment" placeholder="Tell how was your stay, what you like and what can be improved" onChange={handleFieldsChange}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewsForm;
