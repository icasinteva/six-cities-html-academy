import { LoadingStatus } from '../../const';
import { getFavoritesByCity } from '../../services/helpers';
import { makeFakeFavorites } from '../../utils/mocks';
import { favoritesData, loadFavorites, removeFromFavorites, setFavoritesLoading } from './favorites-data';

describe('Reducer: favorites', () => {
  it('without additional parameters should return initial state', () => {
    expect(favoritesData.reducer(undefined, { type: 'UNKNOWN_ACTION' }))
      .toEqual({
        favorites: {},
        loadingStatus: LoadingStatus.InProgress,
      });
  });

  it('should load favorites and update loadingStatus to "SUCCESS', () => {
    const state = {
      favorites: {},
      loadingStatus: LoadingStatus.InProgress,
    };

    const mockFavorites = makeFakeFavorites(3);

    // expect(mockFavorites).toEqual('');

    expect(favoritesData.reducer(state, loadFavorites(mockFavorites))).toEqual({
      favorites: getFavoritesByCity(mockFavorites),
      loadingStatus: LoadingStatus.Success,
    });
  });

  it('should update loadingStatus to "ERROR"', () => {
    const state = {
      favorites: {},
      loadingStatus: LoadingStatus.InProgress,
    };

    expect(favoritesData.reducer(state, setFavoritesLoading(LoadingStatus.Error)).loadingStatus).toEqual(LoadingStatus.Error);
  });

  it('should update favorites', () => {
    const mockFavorites = getFavoritesByCity(makeFakeFavorites(3));
    const [ city ] = Object.keys(mockFavorites);
    const [ offer ] = mockFavorites[city];
    const { isFavorite } = offer;
    const favoritesByCity = mockFavorites[city];

    const state = {
      favorites: mockFavorites,
      loadingStatus: LoadingStatus.Success,
    };

    offer.isFavorite = !isFavorite;

    const offers = favoritesData.reducer(state, removeFromFavorites(offer)).favorites;
    const updatedFavoritesByCity = offers[city] || [];

    expect(updatedFavoritesByCity.length).toEqual(favoritesByCity.length - 1);
  });
});
