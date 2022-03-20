import { createSlice } from '@reduxjs/toolkit';
import { LOADING_STATUS, NameSpace } from '../../const';
import { Review } from '../../types/offer';
import { OfferData } from '../../types/state';

const initialState: OfferData = {
  offer: null,
  reviews: [],
  loadingStatus: LOADING_STATUS.IN_PROGRESS,
};

export const offerData = createSlice({
  name: NameSpace.offer,
  initialState,
  reducers: {
    setOfferLoading: (state, action) => {
      state.loadingStatus = action.payload;
    },
    loadOffer: (state, action) => {
      state.offer = action.payload;
    },
    loadReviews: (state, action) => {
      state.reviews = action.payload.sort((review1: Review, review2: Review) => new Date(review2.date).getTime() - new Date(review1.date).getTime());
    },
  },
});

export const { loadOffer, loadReviews, setOfferLoading } = offerData.actions;
