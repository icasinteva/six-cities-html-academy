import { createReducer } from '@reduxjs/toolkit';
import { BASE_CITY } from '../const';
import { offers } from '../mocks/offers';
import { City } from '../types/map';
import { Offer } from '../types/offer';
import { getOffers, setCity } from './action';

type initialStateType = {
    city: City,
    offers: Offer[]
}

const initialState: initialStateType = {
  city: BASE_CITY,
  offers: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action?.payload || state.city;
    })
    .addCase(getOffers, (state, action) => {
      state.offers = offers?.filter(({ city }: Offer) => city.name === action.payload) ?? [];
    });
});
