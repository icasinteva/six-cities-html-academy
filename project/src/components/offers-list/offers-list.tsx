import classNames from 'classnames';
import { Offers } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type OffersListProps = {
  offers: Offers,
  className: string,
  onOfferCardHover?: (offerId: number) => void,
}

function OffersList({ offers, className, onOfferCardHover }: OffersListProps) {
  const offersListClassName = classNames('places__list', {
    [`${className}__places-list`]: className === 'cities',
    [`${className}__list`]: className !== 'cities',
    'tabs__content': className === 'cities',
  });

  return (
    <div className={offersListClassName}>
      {offers.map((offer, idx) => <OfferCard key={idx.toString()} offer={offer} className={className} onOfferCardHover={onOfferCardHover} />)}
    </div>);
}

export default OffersList;
