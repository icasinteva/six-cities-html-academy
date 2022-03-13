import { createAsyncThunk } from '@reduxjs/toolkit';
import { generatePath } from 'react-router-dom';
import { APIRoute, AppRoute, AuthorizationStatus, Page } from '../const';
import { errorHandle } from '../services/error-handle';
import { dropUser, getUser, saveUser } from '../services/user';
import { api, store } from '../store';
import { AuthData } from '../types/auth-data';
import { Offer, Review } from '../types/offer';
import { ReviewData } from '../types/review-data';
import { User } from '../types/user';
import { redirectToRoute } from './action';
import { loadFavorites, updateFavorites } from './favorites-data/favorites-data';
import { loadOffer, loadReviews, setOfferNotFound } from './offer-data/offer-data';
import { loadNearByOffers, loadOffers, updateOffers } from './offers-data/offers-data';
import { requireAuthorization, setUser } from './user-process/user-process';

export const fetchOffers = createAsyncThunk('data/fetchOffers', async () => {
  try {
    const { data } = await api.get<Offer[]>(APIRoute.Hotels);
    store.dispatch(loadOffers(data));
  } catch (error) {
    errorHandle(error);
  }
});

export const fetchOffer = createAsyncThunk(
  'data/fetchOffer',
  async (hotelId: string) => {
    try {
      const { data } = await api.get<Offer>(
        generatePath(APIRoute.Hotel, {
          hotelId,
        }),
      );
      store.dispatch(loadOffer(data));
    } catch (error) {
      errorHandle(error);
      store.dispatch(setOfferNotFound());
    }
  },
);

export const fetchNearByHotels = createAsyncThunk(
  'data/fetchNearByOffers',
  async (hotelId: string) => {
    const { data } = await api.get<Offer[]>(
      generatePath(APIRoute.NearByHotels, {
        hotelId,
      }),
    );
    store.dispatch(loadNearByOffers(data));
  },
);

export const fetchFavorites = createAsyncThunk('data/fetchOffers', async () => {
  try {
    const { data } = await api.get<Offer[]>(APIRoute.Favorite);
    store.dispatch(loadFavorites(data));
  } catch (error) {
    errorHandle(error);
  }
});

export const fetchReviews = createAsyncThunk(
  'data/fetchReviews',
  async (hotelId: string) => {
    try {
      const { data } = await api.get<Review[]>(
        generatePath(APIRoute.Comments, {
          hotelId,
        }),
      );
      store.dispatch(loadReviews(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const checkAuthorization = createAsyncThunk(
  'user/checkAuthorization',
  async () => {
    try {
      await api.get(APIRoute.Login);
      const user = getUser();
      store.dispatch(setUser(user));
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const login = createAsyncThunk(
  'user/login',
  async ({ login: email, password }: AuthData) => {
    try {
      const { data } = await api.post<User>(APIRoute.Login, {
        email,
        password,
      });
      saveUser(data);
      store.dispatch(setUser(data));
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(redirectToRoute(AppRoute.Main));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logout = createAsyncThunk('user/logout', async () => {
  await api.delete(APIRoute.Logout);
  dropUser();
  store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
});

export const postReview = createAsyncThunk(
  'offer/postReview',
  async ({ hotelId, review }: { hotelId: string; review: ReviewData }) => {
    try {
      const { data } = await api.post<Review[]>(
        generatePath(APIRoute.Comments, {
          hotelId,
        }),
        review,
      );

      store.dispatch(loadReviews(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const addToFavorites = createAsyncThunk(
  'offer/addToFavorites',
  async ({ hotelId, isFavorite, page }: { hotelId: number; isFavorite: boolean, page: Page }) => {
    try {
      const { data } = await api.post<Offer>(
        generatePath(APIRoute.AddToFavorites, {
          hotelId: `${hotelId}`,
          status: isFavorite ? '0' : '1',
        }),
      );

      switch (page) {
        case Page.Index: {
          store.dispatch(updateOffers(data));
          break;
        }
        case Page.Favorites:{
          store.dispatch(updateFavorites(data));
          break;
        }
        case Page.Property: {
          store.dispatch(loadOffer(data));
          break;
        }
      }
    } catch (error) {
      errorHandle(error);
    }
  },
);
