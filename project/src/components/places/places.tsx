import Map from '../map/map';
import Sorting from '../sorting/sorting';
import { useState } from 'react';
import {City, Location} from '../../types/map';
import { Offer } from '../../types/offer';
import OffersList from '../offers-list/offers-list';
import { MAP_ZOOM } from '../../const';

type PlacesProps = {
  city: City,
  offers: Offer[],
  offersCount: number
}

function Places({ city, offers, offersCount }: PlacesProps) {
  const [selectedPoint, setSelectedPoint] = useState<Location | null>(
    null,
  );

  const handleOfferCardHover = (offerId: number) => {
    const currentOffer = offers.find((offer) => offer.id === offerId);

    if (currentOffer && currentOffer.location) {
      const { latitude, longitude } = currentOffer.location;
      const currentPoint = {
        latitude,
        longitude,
        zoom: MAP_ZOOM,
      };

      setSelectedPoint(currentPoint);
    }
  };

  return (
    <>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offersCount} places to stay in {city.name}</b>
        <Sorting />
        <OffersList offers={offers} className='cities' onOfferCardHover={handleOfferCardHover} />
      </section>
      <div className="cities__right-section">
        <Map className='cities' city={city} offers={offers} selectedPoint={selectedPoint} />
      </div>
    </>
  );
}

export default Places;
