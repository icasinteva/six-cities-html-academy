import FavoritesList from '../../components/favorites-list/favorites-list';
import FavoritesListEmpty from '../../components/favorites-list/favorites-list-empty';
import { FavoritesByCity } from '../../types/offer';

type FavoritesProps = {
  favorites: FavoritesByCity
}

function Favorites({ favorites }: FavoritesProps) {
  return (
    <div className="page__favorites-container container">
      {Object.keys(favorites).length ?
        <FavoritesList favorites={favorites} /> :
        <FavoritesListEmpty />}
    </div>
  );
}

export default Favorites;
