import classNames from 'classnames';
import { useEffect } from 'react';
import CitiesList from '../../components/cities-list/cities-list';
import NoPlaces from '../../components/no-places/no-places';
import Places from '../../components/places/places';
import Spinner from '../../components/spinner/';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchOffers } from '../../store/api-actions';


function Main() {
  const dispatch = useAppDispatch();
  const { city } = useAppSelector(({ OFFERS }) => OFFERS);

  useEffect(() => {
    dispatch(fetchOffers());
  }, [city, dispatch]);

  const { offers, isDataLoaded } = useAppSelector(({ OFFERS }) => OFFERS);

  const offersCount = offers?.length;

  const citiesClassName = classNames('cities__places-container', 'container', {
    'cities__places-container--empty': !offersCount,
  });

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <CitiesList currentCity={city} />
      <div className="cities">
        {isDataLoaded ? (
          <div className={citiesClassName}>
            {offersCount ?
              <Places city={city} offers={offers} offersCount={offersCount} /> :
              <NoPlaces city={city} />}
          </div>) : <Spinner />}
      </div>
    </>);
}

export default Main;
