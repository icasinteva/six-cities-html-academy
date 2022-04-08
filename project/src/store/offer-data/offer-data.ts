import { createSlice } from '@reduxjs/toolkit';
import { LoadingStatus, NameSpace } from '../../const';
import { Review } from '../../types/offer';
import { OfferData } from '../../types/state';

const initialState: OfferData = {
  offer: null,
  reviews: [],
  nearByOffers: [],
  loadingStatus: LoadingStatus.InProgress,
};

export const offerData = createSlice({
  name: NameSpace.Offer,
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
    loadNearByOffers: (state, action) => {
      state.nearByOffers = action.payload ?? [];
    },
  },
});

export const { loadOffer, loadReviews, loadNearByOffers, setOfferLoading } = offerData.actions;
