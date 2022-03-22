import classNames from 'classnames';
import { useEffect } from 'react';
import CitiesList from '../../components/cities-list/cities-list';
import NoPlaces from '../../components/no-places/no-places';
import Places from '../../components/places/places';
import Spinner from '../../components/spinner/';
import { useAppSelector } from '../../hooks';
import { useLoading } from '../../hooks/use-loading';


function Main() {
  const { city, offers, loadingStatus } = useAppSelector(({ OFFERS }) => OFFERS);
  const [loading, handleLoading] = useLoading();

  const offersCount = offers.length;

  const citiesClassName = classNames('cities__places-container', 'container', {
    'cities__places-container--empty': !offersCount,
  });

  useEffect(() => {
    handleLoading(loadingStatus);
  }, [loadingStatus]);

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <CitiesList currentCity={city} />
      <div className="cities">
        {!loading ? (
          <div className={citiesClassName}>
            {offersCount ?
              <Places city={city} offers={offers} /> :
              <NoPlaces city={city} />}
          </div>) : <Spinner />}
      </div>
    </>);
}

export default Main;
