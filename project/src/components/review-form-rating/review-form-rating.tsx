type ReviewRatingInputProps = {
    onRatingChange: (ev: React.ChangeEvent<HTMLInputElement>) => void
}

function ReviewRatingInput({ onRatingChange }: ReviewRatingInputProps) {
  const rating = [];
  for (let i = 5; i >= 1; i--) {
    rating.push(
      <>
        <input className="form__rating-input visually-hidden" name="rating" value={i} id={`${i}-stars`} type="radio" onChange={onRatingChange} />
        <label htmlFor={`${i}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </>);
  }
  return (
    <div className="reviews__rating-form form__rating">
      {rating}
    </div>
  );
}

export default ReviewRatingInput;
