import classNames from 'classnames';
import { useEffect } from 'react';
import CitiesList from '../../components/cities-list/cities-list';
import NoPlaces from '../../components/no-places/no-places';
import Places from '../../components/places/places';
import Spinner from '../../components/spinner/spinner';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useLoading } from '../../hooks/use-loading';
import { fetchOffers } from '../../store/api-actions';
import { getCity, getLoadingStatus, getOffers } from '../../store/offers-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

function Main() {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch, authorizationStatus]);

  const city = useAppSelector(getCity);
  const offers = useAppSelector(getOffers);
  const loadingStatus = useAppSelector(getLoadingStatus);
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
