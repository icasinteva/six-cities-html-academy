import OfferCard from '../offer-card/offer-card';
import FavoritesCityItem from '../cities-list-item/favorites-cities-list-item';
import { FavoritesByCity } from '../../types/offer';

type FavoritesListProps = {
  favorites: FavoritesByCity
}

function FavoritesList({ favorites }: FavoritesListProps) {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list" data-testid="favorites__list">
        {
          Object.entries(favorites).map(([city, offers]) => (
            <li key={city} className="favorites__locations-items" data-testid={'favorites__city'}>
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
