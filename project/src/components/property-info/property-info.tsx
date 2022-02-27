import PropertyRating from '../property-rating/property-rating';
import PropertyFacilities from '../property-facilities/property-facilities';
import Host from '../host/host';
import Price from '../price/price';
import FavoriteButton from '../favorite-button/favorite-button';
import { Offer } from '../../types/offer';

type PropertyInfoProps = {
  info: Offer
}

function PropertyInfo({ info }: PropertyInfoProps) {
  const { premium, favorite, facilities, price, rating, title, host } = info;

  return (
    <>
      {premium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>}
      <div className="property__name-wrapper">
        <h1 className="property__name">{title}</h1>
        <FavoriteButton className='property' favorite={favorite} size={{width: 31, height: 33}} />
      </div>
      <PropertyRating rating={rating} />
      <ul className="property__features">
        <li className="property__feature property__feature--entire">
                  Apartment
        </li>
        <li className="property__feature property__feature--bedrooms">
                  3 Bedrooms
        </li>
        <li className="property__feature property__feature--adults">
                  Max 4 adults
        </li>
      </ul>
      <Price amount={price} className='property' />
      <PropertyFacilities facilities={facilities} />
      <Host host={host} />
    </>
  );
}

export default PropertyInfo;
