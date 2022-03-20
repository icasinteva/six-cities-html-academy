import { createAsyncThunk } from '@reduxjs/toolkit';
import { generatePath } from 'react-router-dom';
import { APIRoute, AppRoute, AuthorizationStatus, LOADING_STATUS, Page } from '../const';
import { errorHandle } from '../services/error-handle';
import { dropUser, getUser, saveUser } from '../services/user';
import { api, store } from '../store';
import { AuthData } from '../types/auth-data';
import { Offer, Review } from '../types/offer';
import { ReviewData } from '../types/review-data';
import { User } from '../types/user';
import { redirectToRoute } from './action';
import { loadFavorites, setFavoritesLoading, updateFavorites } from './favorites-data/favorites-data';
import { loadNearByOffers, setNearByOffersLoading } from './nearby-offers-data/nearby-offers-data';
import { loadOffer, loadReviews, setOfferLoading } from './offer-data/offer-data';
import { loadOffers, setOffersLoading, updateOffers } from './offers-data/offers-data';
import { changeFormStatus } from './reviews-form-data/reviews-form-data';
import { requireAuthorization, setUser } from './user-process/user-process';

export const fetchOffers = createAsyncThunk('data/fetchOffers', async () => {
  store.dispatch(setOffersLoading(LOADING_STATUS.IN_PROGRESS));

  try {
    const { data } = await api.get<Offer[]>(APIRoute.Hotels);
    store.dispatch(loadOffers(data));
    store.dispatch(setOffersLoading(LOADING_STATUS.SUCCESS));
  } catch (error) {
    errorHandle(error);
  }
});

export const fetchOffer = createAsyncThunk(
  'data/fetchOffer',
  async (hotelId: string) => {
    store.dispatch(setOfferLoading(LOADING_STATUS.IN_PROGRESS));

    try {
      const { data } = await api.get<Offer>(
        generatePath(APIRoute.Hotel, {
          hotelId,
        }),
      );
      store.dispatch(loadOffer(data));
      store.dispatch(fetchReviews(hotelId));
      store.dispatch(fetchNearByHotels(hotelId));
      store.dispatch(setOfferLoading(LOADING_STATUS.SUCCESS));
    } catch (error) {
      errorHandle(error);
      store.dispatch(loadOffer(null));
      store.dispatch(setOfferLoading(LOADING_STATUS.ERROR));
    }
  },
);

export const fetchNearByHotels = createAsyncThunk(
  'data/fetchNearByOffers',
  async (hotelId: string) => {
    try {
      const { data } = await api.get<Offer[]>(
        generatePath(APIRoute.NearByHotels, {
          hotelId,
        }),
      );
      store.dispatch(loadNearByOffers(data));
      store.dispatch(setNearByOffersLoading(LOADING_STATUS.SUCCESS));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchFavorites = createAsyncThunk('data/fetchFavorites', async () => {
  store.dispatch(setFavoritesLoading(LOADING_STATUS.IN_PROGRESS));

  try {
    const { data } = await api.get<Offer[]>(APIRoute.Favorite);
    store.dispatch(loadFavorites(data));
    store.dispatch(setFavoritesLoading(LOADING_STATUS.SUCCESS));
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
    store.dispatch(changeFormStatus({
      disabled: true,
      error: null,
    }));

    try {
      const { data } = await api.post<Review[]>(
        generatePath(APIRoute.Comments, {
          hotelId,
        }),
        review,
      );

      store.dispatch(loadReviews(data));
      store.dispatch(changeFormStatus({
        posted: true,
        disabled: false,
      }));
    } catch (error) {
      errorHandle(error);
      store.dispatch(changeFormStatus({
        disabled: false,
      }));
    }
  },
);

export const addToFavorites = createAsyncThunk(
  'offer/addToFavorites',
  async ({ hotelId, isFavorite, page }: { hotelId: number; isFavorite: boolean, page: Page }) => {
    try {
      const status = isFavorite ? '0' : '1';
      const { data } = await api.post<Offer>(
        generatePath(APIRoute.AddToFavorites, {
          hotelId: `${hotelId}`,
          status,
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
