import { createSlice } from '@reduxjs/toolkit';
import {
  BASE_CITY,
  LOADING_STATUS,
  NameSpace, sortingOptionToCallback,
  SortingType
} from '../../const';
import { getOffersByCity } from '../../services/helpers';
import { OffersData } from '../../types/state';

const initialState: OffersData = {
  city: BASE_CITY,
  offers: [],
  sortingType: SortingType.Popular,
  loadingStatus: LOADING_STATUS.IN_PROGRESS,
};

export const offersData = createSlice({
  name: NameSpace.offers,
  initialState,
  reducers: {
    setOffersLoading: (state, action) => {
      state.loadingStatus = action.payload;
    },
    setCity: (state, action) => {
      state.loadingStatus = LOADING_STATUS.IN_PROGRESS;
      state.city = action?.payload || state.city;
    },
    loadOffers: (state, action) => {
      state.offers = getOffersByCity(action.payload, state.city.name);
      state.loadingStatus = LOADING_STATUS.SUCCESS;
    },
    updateOffers: (state, action) => {
      const { id } = action.payload;
      const index = state.offers.findIndex((offer) => offer.id === id);

      state.offers.splice(index, 1, action.payload);
    },
    sortOffers: (state, action) => {
      const sortingCallback = sortingOptionToCallback[action.payload];

      state.sortingType = action.payload;
      state.offers = state.offers.sort(sortingCallback);
    },
  },
});

export const {
  setCity,
  loadOffers,
  updateOffers,
  sortOffers,
  setOffersLoading,
} = offersData.actions;
