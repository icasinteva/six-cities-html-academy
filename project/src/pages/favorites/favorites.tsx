import { useEffect } from 'react';
import FavoritesList from '../../components/favorites-list/favorites-list';
import FavoritesListEmpty from '../../components/favorites-list/favorites-list-empty';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavorites } from '../../store/api-actions';


function Favorites() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  const { favorites } = useAppSelector((state) => state);

  return (
    <div className="page__favorites-container container">
      {Object.keys(favorites).length ?
        <FavoritesList favorites={favorites} /> :
        <FavoritesListEmpty />}
    </div>
  );
}

export default Favorites;
