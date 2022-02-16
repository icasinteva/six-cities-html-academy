import PropertyRating from '../property-rating/property-rating';
import PropertyFacilities from '../property-facilities/property-facilities';
import Host from '../host/host';
import Price from '../price/price';

type Review = {
    author: string,
    avatar: string,
    rating: number,
    text: string,
    date: {
      month: string,
      year: number
    }
}

type Host = {
    pro: boolean,
    name: string,
    avatar: string,
    description: string[],
}

type PropertyInfoProps = {
  info: {
        id: string,
        premium: boolean,
        favorite: boolean,
        facilities: string[],
        price: number,
        rating: number,
        host: Host,
        reviews: Review[],
    }
}

function PropertyInfo({ info }: PropertyInfoProps) {
  const { premium, favorite, facilities, price, rating, host } = info;

  return (
    <>
      {premium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>}
      <div className="property__name-wrapper">
        <h1 className="property__name">
                  Beautiful &amp; luxurious studio at great location
        </h1>
        <button className={`property__bookmark-button ${favorite ? 'property__bookmark-button--active' : ''} button`} type="button">
          <svg className="property__bookmark-icon" width="31" height="33">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
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
