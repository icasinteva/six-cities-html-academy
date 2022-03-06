import OfferCard from '../offer-card/offer-card';
import FavoritesCityItem from '../city-item/favorites-city-item';
import { FavoritesByCity } from '../../types/offer';

type FavoritesListProps = {
  favorites: FavoritesByCity
}

function FavoritesList({ favorites }: FavoritesListProps) {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {
          Object.entries(favorites).map(([city, offers], idx) => (
            <li key={idx.toString()} className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <FavoritesCityItem cityName={city} />
              </div>
              <div className="favorites__places">
                {offers.map((offer) => <OfferCard key={offer.id} className='favorites' offer={offer} />)}
              </div>
            </li>))
        }
      </ul>
    </section>
  );
}

export default FavoritesList;
