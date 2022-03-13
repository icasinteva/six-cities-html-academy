import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { getFavorites } from '../../services/helpers';
import { FavoritesData } from '../../types/state';

const initialState: FavoritesData = {
  favorites: {},
  isDataLoaded: false,
};

export const favoritesData = createSlice({
  name: NameSpace.favorites,
  initialState,
  reducers: {
    loadFavorites: (state, action) => {
      state.favorites = getFavorites(action.payload);
      state.isDataLoaded = true;
    },
    updateFavorites: (state, action) => {
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

export const { loadFavorites, updateFavorites } = favoritesData.actions;
