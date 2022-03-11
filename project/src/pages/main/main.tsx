import classNames from 'classnames';
import CitiesList from '../../components/cities-list/cities-list';
import NoPlaces from '../../components/no-places/no-places';
import Places from '../../components/places/places';
import Spinner from '../../components/spinner/';
import { useAppSelector } from '../../hooks';
import { City } from '../../types/map';
import { Offer } from '../../types/offer';

type MainProps = {
  currentCity: City,
  offers: Offer[],
}

function Main({ currentCity, offers }: MainProps) {
  const offersByCity = offers;

  const offersByCityCount = offersByCity?.length;

  const citiesClassName = classNames('cities__places-container', 'container', {
    'cities__places-container--empty': !offersByCityCount,
  });
  const { areOffersLoaded } = useAppSelector((state) => state);

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <CitiesList currentCity={currentCity} />
      <div className="cities">
        {areOffersLoaded ? (
          <div className={citiesClassName}>
            {offersByCityCount ?
              <Places city={currentCity} offers={offersByCity} offersCount={offersByCityCount} /> :
              <NoPlaces city={currentCity} />}
          </div>) : <Spinner customText='Loading...' speed={10} />}
      </div>);
    </>
  );
}

export default Main;
