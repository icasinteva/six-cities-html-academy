import Map from '../map/map';
import Sorting from '../sorting/sorting';
import { useState } from 'react';
import {City, Point} from '../../types/map';
import { Offers } from '../../types/offer';
import OffersList from '../offers-list/offers-list';

type PlacesProps = {
  location: City,
  offers: Offers,
  placesCount: number
}

function Places({ location, offers, placesCount }: PlacesProps) {
  const [selectedPoint, setSelectedPoint] = useState<Point | undefined>(
    undefined,
  );

  const onListItemHover = (listItemName: string) => {
    const currentPoint = offers.find((offer) => offer.title === listItemName);
    setSelectedPoint(currentPoint);
  };

  return (
    <>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{placesCount} places to stay in {location.title}</b>
        <Sorting sortOption='Popular' />
        <OffersList offers={offers}  className='cities' onListItemHover={onListItemHover} />
      </section>
      <div className="cities__right-section">
        <Map className='cities' location={location} offers={offers} selectedPoint={selectedPoint} />
      </div>
    </>
  );
}

export default Places;
