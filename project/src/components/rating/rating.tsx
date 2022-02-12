type RatingProps = {
    className: string,
    rating: number,
    showValue?: boolean,
}

function Rating({ className, rating, showValue }: RatingProps) {
  const percentage = rating * 20;

  return (
    <div className={`${className}__rating rating`}>
      <div className={`${className}__stars rating__stars`}>
        <span style={{width: `${percentage}%`}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {showValue && <span className={`${className}__rating-value rating__value`}>{rating}</span>}
    </div>
  );
}

export default Rating;
