import { useEffect } from 'react';
import FavoritesList from '../../components/favorites-list/favorites-list';
import FavoritesListEmpty from '../../components/favorites-list/favorites-list-empty';
import Spinner from '../../components/spinner/spinner';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useLoading } from '../../hooks/use-loading';
import { fetchFavorites } from '../../store/api-actions';
import { getFavoritesByCity, getLoadingStatus } from '../../store/favorites-data/selectors';


function Favorites() {
  const dispatch = useAppDispatch();
  const [loading, handleLoading] = useLoading();

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  const favorites = useAppSelector(getFavoritesByCity);
  const loadingStatus = useAppSelector(getLoadingStatus);

  useEffect(() => {
    handleLoading(loadingStatus);
  }, [loadingStatus]);

  return (
    !loading ?
      <div className="page__favorites-container container">
        {Object.keys(favorites).length ?
          <FavoritesList favorites={favorites} /> :
          <FavoritesListEmpty />}
      </div> :
      <Spinner />
  );
}

export default Favorites;
