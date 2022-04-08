import { OfferTypeToLabel } from '../../const';
import { Offer } from '../../types/offer';
import FavoriteButton from '../favorite-button/favorite-button';
import HostView from '../host-view/host-view';
import Price from '../price/price';
import PropertyGoods from '../property-goods/property-goods';
import Rating from '../rating/rating';

type PropertyInfoProps = {
  offer: Offer
}

function PropertyInfo({ offer }: PropertyInfoProps) {
  const { id, isPremium, isFavorite, goods, price, rating, title, host, description, bedrooms, type, maxAdults } = offer;

  return (
    <>
      {isPremium &&
                <div data-testid="property__mark" className="property__mark">
                  <span>Premium</span>
                </div>}
      <div className="property__name-wrapper">
        <h1 className="property__name">{title}</h1>
        <FavoriteButton id={id} className='property' isFavorite={isFavorite} size={{width: 31, height: 33}} />
      </div>
      <Rating className='property' rating={rating} showValue />
      <ul className="property__features">
        <li data-testid="property__feature--entire" className="property__feature property__feature--entire">
          {OfferTypeToLabel[type]}
        </li>
        <li data-testid="property__feature--bedrooms" className="property__feature property__feature--bedrooms">
          {`${bedrooms} Bedrooms`}
        </li>
        <li data-testid="property__feature--adults" className="property__feature property__feature--adults">
          {`Max ${maxAdults} adults`}
        </li>
      </ul>
      <Price amount={price} className='property' />
      <PropertyGoods goods={goods} />
      <HostView host={host} description={description} />
    </>
  );
}

export default PropertyInfo;
