import { createAsyncThunk } from '@reduxjs/toolkit';
import { generatePath } from 'react-router-dom';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { errorHandle } from '../services/error-handle';
import { dropUser, getUser, saveUser } from '../services/user';
import { api, store } from '../store';
import { AuthData } from '../types/auth-data';
import { Offer, Review } from '../types/offer';
import { User } from '../types/user';
import { loadComments, loadFavorites, loadNearByOffers, loadOffer, loadOffers, redirectToRoute, requireAuthorization, setUser } from './action';

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

export const fetchFavorites = createAsyncThunk('data/fetchOffers', async () => {
  const { data } = await api.get<Offer[]>(APIRoute.Favorite);
  store.dispatch(loadFavorites(data));
});

export const fetchComments = createAsyncThunk('data/fetchComments', async (hotelId: string) => {
  const { data } = await api.get<Review[]>(generatePath(APIRoute.Comments, {
    hotelId,
  }));
  store.dispatch(loadComments(data));
});

export const checkAuthorization = createAsyncThunk('user/checkAuthorization', async () => {
  try {
    await api.get(APIRoute.Login);
    const user = getUser();
    store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    store.dispatch(setUser(user));
  } catch(error) {
    errorHandle(error);
    store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});

export const login = createAsyncThunk('user/login', async ({ login: email, password }: AuthData) => {
  try {
    const { data } = await api.post<User>(APIRoute.Login, { email, password });
    saveUser(data);
    store.dispatch(setUser(data));
    store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    store.dispatch(redirectToRoute(AppRoute.Main));
  } catch (error) {
    errorHandle(error);
    store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});

export const logout = createAsyncThunk(
  'user/logout',
  async () => {
    await api.delete(APIRoute.Logout);
    dropUser();
    store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
