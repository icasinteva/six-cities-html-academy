/* eslint-disable react/jsx-curly-newline */
import classNames from 'classnames';
import Places from '../places/places';
import NoPlaces from '../no-places/no-places';
import { Offers } from '../../types/offer';
import { City } from '../../types/map';

type LocationProps = {
  location: City,
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
          <Places location={location} offers={offers} placesCount={placesCount} /> :
          <NoPlaces location={location.title} />
        }
      </div>
    </div>);
}

export default Location;
