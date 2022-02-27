import OfferCard from '../offer-card/offer-card';
import Map from '../map/map';
import Sorting from '../sorting/sorting';
import { offers } from '../../mocks/offers';
import { useState } from 'react';
import { LocationItem } from '../../const';

type OffersListProps = {
  location: LocationItem,
  placesCount: number
}

function OffersList({ location, placesCount }: OffersListProps) {
  const [activeOfferCard, setActiveOfferCard] = useState<string>('');
  const handleMouseOver = (id: string) => {
    setActiveOfferCard(id);
  };

  return (
    <>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{placesCount} places to stay in {location}</b>
        <Sorting sortOption='Popular' />
        <div className="cities__places-list places__list tabs__content">
          {offers.map((offer) => {
            const { facilities, host, reviews, ...card } = offer;
            return <OfferCard key={card.id} info={card} className='cities' onMouseOver={handleMouseOver} />;
          })}
        </div>
      </section>
      <div className="cities__right-section">
        <Map className='cities'id={activeOfferCard} />
      </div>
    </>
  );
}

export default OffersList;
