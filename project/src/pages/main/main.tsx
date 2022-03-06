import { useState, useEffect } from 'react';
import CitiesList from '../../components/cities-list/cities-list';
import { City } from '../../types/map';
import Places from '../../components/places/places';
import NoPlaces from '../../components/no-places/no-places';
import classNames from 'classnames';
import { Offer } from '../../types/offer';
import { CITIES } from '../../const';
import { getOffersByCity } from '../../helpers';

type MainProps = {
  baseCity: City,
  offers: Offer[],
  onLayoutChange: (val: boolean) => void
}

function Main({ baseCity, offers, onLayoutChange }: MainProps) {
  const [currentCity, setCurrentCity] = useState(baseCity);

  const offersByCity = getOffersByCity(offers, currentCity.name);

  const offersByCityCount = offersByCity.length;

  const citiesClassName = classNames('cities__places-container', 'container', {
    'cities__places-container--empty': !offersByCityCount,
  });

  const handleCityItemClick = (name: string) => {
    const selectedCity = CITIES.find((city) => city.name === name) ?? baseCity;
    const { location } = selectedCity;

    setCurrentCity({
      location,
      name,
    });
  };

  useEffect(() => {
    onLayoutChange(!offersByCity.length);
  }, [offersByCity]);

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <CitiesList currentCity={currentCity} onClick={handleCityItemClick} />
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
