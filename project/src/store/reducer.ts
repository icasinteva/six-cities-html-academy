import { createReducer } from '@reduxjs/toolkit';
import { BASE_CITY, sortingOptionToCallback } from '../const';
import { City } from '../types/map';
import { Offer } from '../types/offer';
import { getOffers, setCity, setSortingType, sortOffers } from './action';

type initialStateType = {
    city: City,
    offers: Offer[],
    sortingType: string
}

const initialState: initialStateType = {
  city: BASE_CITY,
  offers: [],
  sortingType: 'Popular',
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action?.payload || state.city;
    })
    .addCase(getOffers, (state, action) => {
      state.offers = action.payload?.filter((offer: Offer) => offer.city.name === state.city.name) ?? [];
    })
    .addCase(setSortingType, (state, action) => {
      state.sortingType = action.payload;
    })
    .addCase(sortOffers, (state) => {
      const sortingCallback = sortingOptionToCallback[state.sortingType];

      state.offers = state.offers.sort(sortingCallback);
    });
});
