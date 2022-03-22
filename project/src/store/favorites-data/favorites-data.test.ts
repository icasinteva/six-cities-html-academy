import { LOADING_STATUS } from '../../const';
import { getFavoritesByCity } from '../../services/helpers';
import { makeFakeFavorites } from '../../utils/mocks';
import { favoritesData, loadFavorites, removeFromFavorites, setFavoritesLoading } from './favorites-data';

describe('Reducer: favorites', () => {
  it('without additional parameters should return initial state', () => {
    expect(favoritesData.reducer(undefined, { type: 'UNKNOWN_ACTION' }))
      .toEqual({
        favorites: {},
        loadingStatus: LOADING_STATUS.IN_PROGRESS,
      });
  });

  it('should load favorites and update loadingStatus to "SUCCESS', () => {
    const state = {
      favorites: {},
      loadingStatus: LOADING_STATUS.IN_PROGRESS,
    };

    const mockFavorites = makeFakeFavorites(3);

    // expect(mockFavorites).toEqual('');

    expect(favoritesData.reducer(state, loadFavorites(mockFavorites))).toEqual({
      favorites: getFavoritesByCity(mockFavorites),
      loadingStatus: LOADING_STATUS.SUCCESS,
    });
  });

  it('should update loadingStatus to "ERROR"', () => {
    const state = {
      favorites: {},
      loadingStatus: LOADING_STATUS.IN_PROGRESS,
    };

    expect(favoritesData.reducer(state, setFavoritesLoading(LOADING_STATUS.ERROR)).loadingStatus).toEqual(LOADING_STATUS.ERROR);
  });

  it('should update favorites', () => {
    const mockFavorites = getFavoritesByCity(makeFakeFavorites(3));
    const [ city ] = Object.keys(mockFavorites);
    const [ offer ] = mockFavorites[city];
    const { isFavorite } = offer;
    const favoritesByCity = mockFavorites[city];

    const state = {
      favorites: mockFavorites,
      loadingStatus: LOADING_STATUS.SUCCESS,
    };

    offer.isFavorite = !isFavorite;

    const offers = favoritesData.reducer(state, removeFromFavorites(offer)).favorites;
    const updatedFavoritesByCity = offers[city] || [];

    expect(updatedFavoritesByCity.length).toEqual(favoritesByCity.length - 1);
  });
});
