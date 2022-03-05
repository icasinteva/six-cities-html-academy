import { useState, useMemo, useEffect } from 'react';
import Location from '../../components/location/location';
import LocationItemList from '../../components/locations-list/locations-list';
import { LocationItem } from '../../const';
import { LocationOffers } from '../../types/offer';
import {City} from '../../types/map';
import { CITIES } from '../../mocks/city';

type MainProps = {
  baseLocation: City,
  offers: LocationOffers,
  onLayoutChange: (val: boolean) => void
}

function Main({ baseLocation, offers, onLayoutChange }: MainProps) {
  const [activeLocation, setActiveLocation] = useState(baseLocation);

  const locationOffers = useMemo(() => offers.find((offer) => offer.location === activeLocation.title)?.offers ?? [], [offers, activeLocation]);

  const handleLocationClick = (title: LocationItem) => {
    const currentLocation = CITIES.find((city) => city.title === title) || baseLocation;
    const {lat, lng, zoom} = currentLocation;
    setActiveLocation({
      title,
      lat,
      lng,
      zoom,
    });
  };

  useEffect(() => {
    onLayoutChange(!locationOffers.length);
  }, [locationOffers]);

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <LocationItemList activeLocation={activeLocation.title} onClick={handleLocationClick} />
      <Location location={activeLocation} offers={locationOffers} />
    </>
  );
}

export default Main;
