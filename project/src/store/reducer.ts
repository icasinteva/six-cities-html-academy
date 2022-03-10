import { createReducer } from '@reduxjs/toolkit';
import { BASE_CITY, sortingOptionToCallback } from '../const';
import { City } from '../types/map';
import { Offer, Review } from '../types/offer';
import { loadComments, loadNearByOffers, loadOffer, loadOffers, setCity, setSortingType, sortOffers } from './action';

type initialStateType = {
  city: City,
  offers: Offer[],
  offer: Offer | null,
  nearByOffers: Offer[],
  reviews: Review[],
  sortingType: string,
  isDataLoaded: boolean
}

const initialState: initialStateType = {
  city: BASE_CITY,
  offers: [],
  offer: null,
  nearByOffers: [],
  reviews: [],
  sortingType: 'Popular',
  isDataLoaded: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action?.payload || state.city;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload?.filter((offer: Offer) => offer.city.name === state.city.name) ?? [];
      state.isDataLoaded = true;
    })
    .addCase(loadOffer, (state, action) => {
      state.offer = action.payload;
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
    });
});
