import OfferCard from '../offer-card/offer-card';
import FavoritesLocationItemItem from '../locations-item/favorites-locations-item';
import { LocationOffers } from '../../types/offer';

type FavoritesListProps = {
  favorites: LocationOffers
}

function FavoritesList({ favorites }: FavoritesListProps) {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {favorites.map(({ location, offers }) => (
          <li key={location} className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <FavoritesLocationItemItem location={location} />
            </div>
            <div className="favorites__places">
              {offers.map((offer) => <OfferCard key={offer.id} className='favorites' info={offer} />)}
            </div>
          </li>))}
      </ul>
    </section>
  );
}

export default FavoritesList;
