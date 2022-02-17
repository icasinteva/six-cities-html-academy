import Rating from '../rating/rating';
import Price from '../price/price';
import { Link } from 'react-router-dom';

type PlaceCardProps = {
  className: string,
  info: {
    id: string,
    premium?: boolean,
    favorite?: boolean,
    price: number,
    rating: number,
    type: string,
    title: string,
    imageSrc: string,
  }
}

function PlaceCard({ className, info }: PlaceCardProps) {
  const {id, premium, favorite, rating, price, type, title, imageSrc} = info;
  const classNameCard = className === 'cities' ? `${className}__place-card place-card` : `${className}__card place-card`;
  const classNameImageWrapper = `${className}__image-wrapper place-card__image-wrapper`;
  const classNameInfo = `${className}__card-info place-card__info`;
  const classNameFavorite = 'place-card__bookmark-button--active';

  return (
    <article className={classNameCard}>
      {
        premium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={classNameImageWrapper}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={imageSrc} alt="Place image" />
        </Link>
      </div>
      <div className={classNameInfo}>
        <div className="place-card__price-wrapper">
          <Price amount={price} className='place-card' />
          <button className={`place-card__bookmark-button ${favorite ? classNameFavorite : ''} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <Rating className='place-card' rating={rating} />
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>);
}

export default PlaceCard;
