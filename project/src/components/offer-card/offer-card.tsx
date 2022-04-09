import React, { useCallback } from 'react';

import classNames from 'classnames';
import { generatePath, Link } from 'react-router-dom';

import { AppRoute, OfferTypeToLabel } from '../../const';
import { Offer } from '../../types/offer';
import FavoriteButton from '../favorite-button/favorite-button';
import Price from '../price/price';
import Rating from '../rating/rating';

import './style.css';

type OfferCardProps = {
  className: string,
  offer: Offer,
  onOfferCardMouseEnter?: (offerId: number) => void,
  onOfferCardMouseOut?: () => void
}

function OfferCard({ className, offer, onOfferCardMouseEnter, onOfferCardMouseOut }: OfferCardProps) {
  const { id, isPremium, isFavorite, rating, price, type, title, previewImage } = offer;

  const classNameCard = classNames({
    [`${className}__place-card place-card`]: className === 'cities',
    [`${className}__card place-card`]: className !== 'cities',
  });
  const classNameImageWrapper = `${className}__image-wrapper place-card__image-wrapper`;
  const classNameInfo = `${className}__card-offer place-card__offer`;
  const offerRoute = generatePath(AppRoute.Room, {
    id: `${id}`,
  });

  const handleOfferCardMouseEnter = useCallback(() => {
    onOfferCardMouseEnter?.(id);
  }, [id, onOfferCardMouseEnter]);

  return (
    <article className={classNameCard} onMouseEnter={handleOfferCardMouseEnter} onMouseLeave={onOfferCardMouseOut} data-testid={`${className}__item`}>
      {
        isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={classNameImageWrapper}>
        <Link to={offerRoute}>
          <img data-testid="place-card__image" className="place-card__image" src={previewImage} alt="Place" />
        </Link>
      </div>
      <div className={classNameInfo}>
        <div className="place-card__price-wrapper">
          <Price amount={price} className='place-card' />
          <FavoriteButton id={id} className='place-card' isFavorite={isFavorite} size={{width: 18, height: 19}} />
        </div>
        <Rating className='place-card' rating={rating} />
        <h2 className="place-card__name">
          <Link to={offerRoute}>{title}</Link>
        </h2>
        <p className="place-card__type">{OfferTypeToLabel[type]}</p>
      </div>
    </article>);
}

export default React.memo(OfferCard);
