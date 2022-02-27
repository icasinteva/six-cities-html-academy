import { useState, useMemo, useEffect } from 'react';
import Location from '../../components/location/location';
import LocationItemList from '../../components/locations-list/locations-list';
import { LocationItem } from '../../const';
import { LocationOffers } from '../../types/offer';

type MainProps = {
  baseLocation: LocationItem,
  offers: LocationOffers
  onLayoutChange: (val: boolean) => void
}

function Main({ baseLocation, offers, onLayoutChange }: MainProps) {
  const [activeLocation, setActiveLocation] = useState(baseLocation);

  const locationOffers = useMemo(() => offers.find((offer) => offer.location === activeLocation)?.offers ?? [], [offers, activeLocation]);

  const handleLocationClick = (location: LocationItem) => {
    setActiveLocation(location);
  };

  useEffect(() => {
    onLayoutChange(!locationOffers.length);
  }, [locationOffers]);

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <LocationItemList activeLocation={activeLocation} onClick={handleLocationClick} />
      <Location location={activeLocation} offers={locationOffers} />
    </>
  );
}

export default Main;
