import { createSlice } from '@reduxjs/toolkit';
import {
  BASE_CITY,
  NameSpace, sortingOptionToCallback,
  SortingType
} from '../../const';
import { loadOffersByCity } from '../../services/helpers';
import { OffersData } from '../../types/state';

const initialState: OffersData = {
  city: BASE_CITY,
  offers: [],
  nearByOffers: [],
  sortingType: SortingType.Popular,
  isDataLoaded: false,
};

export const offersData = createSlice({
  name: NameSpace.offers,
  initialState,
  reducers: {
    setCity: (state, action) => {
      state.city = action?.payload || state.city;
    },
    setSortingType: (state, action) => {
      state.sortingType = action.payload;
    },
    loadOffers: (state, action) => {
      state.offers = loadOffersByCity(action.payload, state.city.name);
      state.isDataLoaded = true;
    },
    loadNearByOffers: (state, action) => {
      state.nearByOffers = action.payload ?? [];
    },
    updateOffers: (state, action) => {
      const { id } = action.payload;
      const index = state.offers.findIndex((offer) => offer.id === id);

      state.offers.splice(index, 1, action.payload);
    },
    sortOffers: (state) => {
      const sortingCallback = sortingOptionToCallback[state.sortingType];

      state.offers = state.offers.sort(sortingCallback);
    },
  },
});

export const {
  setCity,
  setSortingType,
  loadOffers,
  loadNearByOffers,
  updateOffers,
  sortOffers,
} = offersData.actions;
