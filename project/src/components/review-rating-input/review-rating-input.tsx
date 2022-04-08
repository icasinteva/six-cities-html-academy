import { Fragment } from 'react';

type ReviewRatingInputProps = {
  disabled: boolean,
  rating?: string,
  onRatingChange: (ev: React.ChangeEvent<HTMLInputElement>) => void,
};

const enum RatingTitle {
  Terribly = 'terribly',
  Badly = 'badly',
  NotBad = 'not bad',
  Good = 'good',
  Perfect = 'perfect',
}

const ratingTitles: Record<number, RatingTitle> = {
  1: RatingTitle.Terribly,
  2: RatingTitle.Badly,
  3: RatingTitle.NotBad,
  4: RatingTitle.Good,
  5: RatingTitle.Perfect,
};

function ReviewRatingInput({ onRatingChange, rating = '', disabled }: ReviewRatingInputProps) {
  return (
    <div className="reviews__rating-form form__rating">
      {Object.entries(ratingTitles).reverse().map(([i, title]) => (
        <Fragment key={title}>
          <input
            data-testid={`${i}-stars`}
            disabled={disabled}
            checked={rating === i}
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
        </Fragment>
      ))}
    </div>
  );
}

export default ReviewRatingInput;
