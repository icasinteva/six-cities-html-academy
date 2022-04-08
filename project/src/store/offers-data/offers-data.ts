import { createSlice } from '@reduxjs/toolkit';
import {
  BASE_CITY,
  LoadingStatus,
  NameSpace, SortingOptionToCallback,
  SortingType
} from '../../const';
import { getOffersByCity } from '../../services/helpers';
import { OffersData } from '../../types/state';

const initialState: OffersData = {
  city: BASE_CITY,
  offers: [],
  sortingType: SortingType.Popular,
  loadingStatus: LoadingStatus.InProgress,
};

export const offersData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    setOffersLoading: (state, action) => {
      state.loadingStatus = action.payload;
    },
    setCity: (state, action) => {
      state.loadingStatus = LoadingStatus.InProgress;
      state.city = action?.payload || state.city;
    },
    loadOffers: (state, action) => {
      state.offers = getOffersByCity(action.payload, state.city.name);
      state.loadingStatus = LoadingStatus.Success;
    },
    updateOffers: (state, action) => {
      const { id } = action.payload;
      const index = state.offers.findIndex((offer) => offer.id === id);

      state.offers.splice(index, 1, action.payload);
    },
    sortOffers: (state, action) => {
      const sortingCallback = SortingOptionToCallback[action.payload];

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
