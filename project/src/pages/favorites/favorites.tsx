import FavoritesList from '../../components/favorites-list/favorites-list';
import FavoritesListEmpty from '../../components/favorites-list/favorites-list-empty';

type FavoritesProps = {
    favoritesCount: number
}

function Favorites({ favoritesCount}: FavoritesProps) {
  return (
    <div className="page__favorites-container container">
      {favoritesCount ?
        <FavoritesList /> :
        <FavoritesListEmpty />}
    </div>
  );
}

export default Favorites;
