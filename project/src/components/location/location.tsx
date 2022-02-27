import classNames from 'classnames';
import OffersList from '../offers-list/offers-list';
import NoPlaces from '../no-places/no-places';
import { Offers } from '../../types/offer';
import { LocationItem } from '../../const';

type LocationProps = {
  location: LocationItem,
  offers: Offers
}

function Location({ location, offers }: LocationProps) {
  const placesCount = offers.length;
  const citiesClassName = classNames('cities__places-container', 'container', {
    'cities__places-container--empty': !placesCount,
  });

  return (
    <div className="cities">
      <div className={citiesClassName}>
        {placesCount ?
          <OffersList location={location} placesCount={placesCount} /> :
          <NoPlaces location={location} />}
      </div>
    </div>);
}

export default Location;
