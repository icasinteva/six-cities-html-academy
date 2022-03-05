import classNames from 'classnames';
import { Offers } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type OffersListProps = {
    offers: Offers,
    className: string,
    onListItemHover?: (listItemName: string) => void,
}

function OffersList({ offers, className, onListItemHover }: OffersListProps) {
  const offersListClassName = classNames('places__list', {
    [`${className}__places-list`]: className === 'cities',
    [`${className}__list`]: className !== 'cities',
    'tabs__content': className === 'cities',
  });

  return (
    <div className={offersListClassName}>
      {offers.map((offer) => {
        const { facilities, host, reviews, ...card } = offer;
        return <OfferCard key={card.id} info={card} className={className} onListItemHover={onListItemHover} />;
      })}
    </div>);
}

export default OffersList;
