import { useEffect } from 'react';
import CitiesList from '../../components/cities-list/cities-list';
import { City } from '../../types/map';
import Places from '../../components/places/places';
import NoPlaces from '../../components/no-places/no-places';
import classNames from 'classnames';
import { Offer} from '../../types/offer';

type MainProps = {
  currentCity: City,
  offers: Offer[],
  onLayoutChange: (val: boolean) => void
}

function Main({ currentCity, offers, onLayoutChange }: MainProps) {
  const offersByCity = offers;

  const offersByCityCount = offersByCity?.length;

  const citiesClassName = classNames('cities__places-container', 'container', {
    'cities__places-container--empty': !offersByCityCount,
  });

  useEffect(() => {
    onLayoutChange(!offersByCity?.length);
  }, [offersByCity]);

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <CitiesList currentCity={currentCity} />
      <div className="cities">
        <div className={citiesClassName}>
          {offersByCityCount ?
            <Places city={currentCity} offers={offersByCity} offersCount={offersByCityCount} /> :
            <NoPlaces city={currentCity} />}
        </div>
      </div>);
    </>
  );
}

export default Main;
