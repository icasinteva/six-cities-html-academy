import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, LOADING_STATUS } from '../../const';
import { NearByOffersData } from '../../types/state';

const initialState: NearByOffersData = {
  nearByOffers: [],
  loadingStatus: LOADING_STATUS.IN_PROGRESS,
};

export const nearByOffersData = createSlice({
  name: NameSpace.nearByOffers,
  initialState,
  reducers: {
    setNearByOffersLoading: (state, action) => {
      state.loadingStatus = action.payload;
    },
    loadNearByOffers: (state, action) => {
      state.nearByOffers = action.payload ?? [];
    },
  },
});

export const {
  loadNearByOffers,
  setNearByOffersLoading,
} = nearByOffersData.actions;
