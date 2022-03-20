import classNames from 'classnames';
import React from 'react';
import { Offer } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type OffersListProps = {
  offers: Offer[],
  className: string,
  onOfferCardMouseEnter?: (offerId: number) => void,
  onOfferCardMouseOut?: () => void,
}

function OffersList({ offers, className, onOfferCardMouseEnter, onOfferCardMouseOut }: OffersListProps) {
  const offersListClassName = classNames('places__list', {
    [`${className}__places-list`]: className === 'cities',
    [`${className}__list`]: className !== 'cities',
    'tabs__content': className === 'cities',
  });

  return (
    <div className={offersListClassName}>
      {offers.map((offer) => <OfferCard key={offer.id} offer={offer} className={className} onOfferCardMouseEnter={onOfferCardMouseEnter} onOfferCardMouseOut={onOfferCardMouseOut} />)}
    </div>);
}

export default React.memo(OffersList);
