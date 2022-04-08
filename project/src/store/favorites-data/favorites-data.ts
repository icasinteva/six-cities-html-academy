import { createSlice } from '@reduxjs/toolkit';
import { LoadingStatus, NameSpace } from '../../const';
import { getFavoritesByCity } from '../../services/helpers';
import { FavoritesData } from '../../types/state';

const initialState: FavoritesData = {
  favorites: {},
  loadingStatus: LoadingStatus.InProgress,
};

export const favoritesData = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {
    setFavoritesLoading: (state, action) => {
      state.loadingStatus = action.payload;
    },
    loadFavorites: (state, action) => {
      state.favorites = getFavoritesByCity(action.payload);
      state.loadingStatus = LoadingStatus.Success;
    },
    removeFromFavorites: (state, action) => {
      const { id, city: { name } } = action.payload;
      const favoritesByCity = state.favorites[name];
      const index = favoritesByCity.findIndex((offer) => offer.id === id);

      favoritesByCity.splice(index, 1);

      if (favoritesByCity.length) {
        state.favorites = {...state.favorites, [name]: favoritesByCity };
      } else {
        delete state.favorites[name];
      }
    },
  },
});

export const { loadFavorites, removeFromFavorites, setFavoritesLoading } = favoritesData.actions;
