import { LoadingStatus, NameSpace } from '../../const';
import { FavoritesByCity } from '../../types/offer';
import { State } from '../../types/state';

export const getFavoritesByCity = (state: State): FavoritesByCity => state[NameSpace.Favorites].favorites;
export const getLoadingStatus = (state: State): LoadingStatus => state[NameSpace.Favorites].loadingStatus;
