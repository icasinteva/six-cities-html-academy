import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { OfferData } from '../../types/state';

const initialState: OfferData = {
  offer: null,
  reviews: [],
  isDataLoaded: false,
  isOfferFound: false,
};

export const offerData = createSlice({
  name: NameSpace.offer,
  initialState,
  reducers: {
    loadOffer: (state, action) => {
      state.offer = action.payload;
      state.isDataLoaded = true;
      state.isOfferFound = true;
    },
    setOfferNotFound: (state) => {
      state.isDataLoaded = true;
      state.isOfferFound = false;
    },
    loadReviews: (state, action) => {
      state.reviews = action.payload;
    },
  },
});

export const { loadOffer, setOfferNotFound, loadReviews } = offerData.actions;
