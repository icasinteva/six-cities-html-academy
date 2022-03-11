import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, BASE_CITY, sortingOptionToCallback, SortingType } from '../const';
import { getFavorites, loadOffersByCity } from '../services/helpers';
import { City } from '../types/map';
import { FavoritesByCity, Offer, Review } from '../types/offer';
import { User } from '../types/user';
import { loadComments, loadFavorites, loadNearByOffers, loadOffer, loadOffers, requireAuthorization, setCity, setSortingType, setUser, sortOffers } from './action';

type initialStateType = {
  authorizationStatus: AuthorizationStatus
  city: City,
  offers: Offer[],
  offer: Offer | null,
  favorites: FavoritesByCity,
  nearByOffers: Offer[],
  reviews: Review[],
  sortingType: SortingType,
  isDataLoaded: boolean
  user: User | null,
}

const initialState: initialStateType = {
  authorizationStatus: AuthorizationStatus.Unknown,
  city: BASE_CITY,
  offers: [],
  offer: null,
  favorites: {},
  nearByOffers: [],
  reviews: [],
  sortingType: SortingType.Popular,
  isDataLoaded: false,
  user: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action?.payload || state.city;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = loadOffersByCity(action.payload, state.city.name);
      state.isDataLoaded = true;
    })
    .addCase(loadOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(loadFavorites, (state, action) => {
      state.favorites = getFavorites(action.payload);
    })
    .addCase(loadNearByOffers, (state, action) => {
      state.nearByOffers = action.payload ?? [];
    })
    .addCase(loadComments, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setSortingType, (state, action) => {
      state.sortingType = action.payload;
    })
    .addCase(sortOffers, (state) => {
      const sortingCallback = sortingOptionToCallback[state.sortingType];

      state.offers = state.offers.sort(sortingCallback);
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    });
});
