import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../const';
import { api } from '../store';
import { store } from '../store';
import { Offer } from '../types/offer';
import { loadOffers, loadOffer, loadNearByOffers, loadComments } from './action';
import { generatePath } from 'react-router-dom';

export const fetchOffers = createAsyncThunk('data/fetchOffers', async () => {
  const { data } = await api.get<Offer[]>(APIRoute.Hotels);
  store.dispatch(loadOffers(data));
});

export const fetchOffer = createAsyncThunk('data/fetchOffer', async (hotelId: string) => {
  const { data } = await api.get<Offer>(generatePath(APIRoute.Hotel, {
    hotelId,
  }));
  store.dispatch(loadOffer(data));
});

export const fetchNearByHotels = createAsyncThunk('data/fetchNearByOffers', async (hotelId: string) => {
  const { data } = await api.get<Offer[]>(generatePath(APIRoute.NearByHotels, {
    hotelId,
  }));
  store.dispatch(loadNearByOffers(data));
});

export const fetchComments = createAsyncThunk('data/fetchComments', async (hotelId: string) => {
  const { data } = await api.get<Offer>(generatePath(APIRoute.Comments, {
    hotelId,
  }));
  store.dispatch(loadComments(data));
});
