import PropertyRating from '../property-rating/property-rating';
import PropertyGoods from '../property-goods/property-goods';
import HostView from '../host-view/host-view';
import Price from '../price/price';
import FavoriteButton from '../favorite-button/favorite-button';
import { Offer } from '../../types/offer';
import { capitalize } from '../../helpers';

type PropertyInfoProps = {
  offer: Offer
}

function PropertyInfo({ offer }: PropertyInfoProps) {
  const { isPremium, isFavorite, goods, price, rating, title, host, description, bedrooms, type, maxAdults } = offer;

  return (
    <>
      {isPremium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>}
      <div className="property__name-wrapper">
        <h1 className="property__name">{title}</h1>
        <FavoriteButton className='property' isFavorite={isFavorite} size={{width: 31, height: 33}} />
      </div>
      <PropertyRating rating={rating} />
      <ul className="property__features">
        <li className="property__feature property__feature--entire">
          {capitalize(type)}
        </li>
        <li className="property__feature property__feature--bedrooms">
          {`${bedrooms} Bedrooms`}
        </li>
        <li className="property__feature property__feature--adults">
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
