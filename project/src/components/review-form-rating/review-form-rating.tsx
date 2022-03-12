type ReviewRatingInputProps = {
  rating: number,
  onRatingChange: (ev: React.ChangeEvent<HTMLInputElement>) => void,
};

const enum RatingTitle {
  Terribly = 'terribly',
  Badly = 'badly',
  NotBad = 'not bad',
  Good = 'good',
  Perfect = 'perfect',
}

const ratingTitles: { [key: number]: RatingTitle } = {
  1: RatingTitle.Terribly,
  2: RatingTitle.Badly,
  3: RatingTitle.NotBad,
  4: RatingTitle.Good,
  5: RatingTitle.Perfect,
};

function ReviewRatingInput({ onRatingChange, rating }: ReviewRatingInputProps) {
  return (
    <div className="reviews__rating-form form__rating">
      {Object.entries(ratingTitles).map(([i, title]) => (
        <div key={title}>
          <input
            checked={rating === +i}
            className="form__rating-input visually-hidden"
            name="rating"
            value={i}
            id={`${i}-stars`}
            type="radio"
            onChange={onRatingChange}
          />
          <label
            htmlFor={`${i}-stars`}
            className="reviews__rating-label form__rating-label"
            title={title}
          >
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </div>
      ))}
    </div>
  );
}

export default ReviewRatingInput;
