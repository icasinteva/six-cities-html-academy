import FavoritesList from '../../components/favorites-list/favorites-list';
import FavoritesListEmpty from '../../components/favorites-list/favorites-list-empty';
import { LocationOffers } from '../../types/offer';

type FavoritesProps = {
  favorites: LocationOffers
}

function Favorites({ favorites }: FavoritesProps) {
  return (
    <div className="page__favorites-container container">
      {favorites.length ?
        <FavoritesList favorites={favorites} /> :
        <FavoritesListEmpty />}
    </div>
  );
}

export default Favorites;
