import classNames from 'classnames';
import Places from '../places/places';
import NoPlaces from '../no-places/no-places';
import { Offer } from '../../types/offer';
import { City } from '../../types/map';

type CitiesProps = {
  city: City,
  offers: Offer[]
}

function Cities({ city, offers }: CitiesProps) {
  const offersCount = offers.length;
  const citiesClassName = classNames('cities__places-container', 'container', {
    'cities__places-container--empty': !offersCount,
  });

  return (
    <div className="cities">
      <div className={citiesClassName}>
        {offersCount ?
          <Places city={city} offers={offers} offersCount={offersCount} /> :
          <NoPlaces city={city} />}
      </div>
    </div>);
}

export default Cities;
