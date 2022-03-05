import classNames from 'classnames';
import Rating from '../rating/rating';
import Price from '../price/price';
import { Link } from 'react-router-dom';
import FavoriteButton from '../favorite-button/favorite-button';
import { AppRoute } from '../../const';
import { Card } from '../../types/offer';

type OfferCardProps = {
  className: string,
  info: Card,
  onListItemHover?: (listItemName: string) => void,
}

function OfferCard({ className, info, onListItemHover }: OfferCardProps) {
  const {id, premium, favorite, rating, price, type, title, imageSrc} = info;
  const classNameCard = classNames({
    [`${className}__place-card place-card`]: className === 'cities',
    [`${className}__card place-card`]: className !== 'cities',
  });
  const classNameImageWrapper = `${className}__image-wrapper place-card__image-wrapper`;
  const classNameInfo = `${className}__card-info place-card__info`;
  const offerRoute = AppRoute.Room.replace(':id', id);

  const listItemHoverHandler = () => {
    onListItemHover?.(id);
  };

  return (
    <article className={classNameCard}>
      {
        premium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={classNameImageWrapper}>
        <Link to={offerRoute} onMouseEnter={listItemHoverHandler}>
          <img className="place-card__image" src={imageSrc} alt="Place image" />
        </Link>
      </div>
      <div className={classNameInfo}>
        <div className="place-card__price-wrapper">
          <Price amount={price} className='place-card' />
          <FavoriteButton className='place-card' favorite={favorite} size={{width: 18, height: 19}} />
        </div>
        <Rating className='place-card' rating={rating} />
        <h2 className="place-card__name">
          <Link to={offerRoute}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>);
}

export default OfferCard;
