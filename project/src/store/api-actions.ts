import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { generatePath } from 'react-router-dom';
import { APIRoute, AppRoute, AuthorizationStatus, LoadingStatus, Page } from '../const';
import { errorHandle } from '../services/error-handle';
import { dropUser, getUser, saveUser } from '../services/user';
import { AppDispatch, State } from '../types/state.js';
import { AuthData } from '../types/auth-data';
import { Offer, Review } from '../types/offer';
import { ReviewData } from '../types/review-data';
import { User } from '../types/user';
import { redirectToRoute } from './action';
import { loadFavorites, setFavoritesLoading, removeFromFavorites } from './favorites-data/favorites-data';
import { loadNearByOffers, loadOffer, loadReviews, setOfferLoading } from './offer-data/offer-data';
import { loadOffers, setOffersLoading, updateOffers } from './offers-data/offers-data';
import { changeFormStatus } from './reviews-form-data/reviews-form-data';
import { requireAuthorization, setUser } from './user-process/user-process';

export const fetchOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOffers', async (_arg, { dispatch, extra: api }) => {
    dispatch(setOffersLoading(LoadingStatus.InProgress));

    try {
      const { data } = await api.get<Offer[]>(APIRoute.Hotels);
      dispatch(loadOffers(data));
    } catch (error) {
      errorHandle(error);
    }
  });

export const fetchOffer = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOffer',
  async (hotelId, { dispatch, extra: api }) => {
    dispatch(setOfferLoading(LoadingStatus.InProgress));

    try {
      const { data } = await api.get<Offer>(
        generatePath(APIRoute.Hotel, {
          hotelId,
        }),
      );
      dispatch(loadOffer(data));
      dispatch(fetchReviews(hotelId));
      dispatch(fetchNearByHotels(hotelId));
      dispatch(setOfferLoading(LoadingStatus.Success));
    } catch (error) {
      errorHandle(error);
      dispatch(loadOffer(null));
      dispatch(setOfferLoading(LoadingStatus.Error));
    }
  },
);

export const fetchNearByHotels = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchNearByOffers',
  async (hotelId, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Offer[]>(
        generatePath(APIRoute.NearByHotels, {
          hotelId,
        }),
      );
      dispatch(loadNearByOffers(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchFavorites = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFavorites', async (_arg, { dispatch, extra: api }) => {
    dispatch(setFavoritesLoading(LoadingStatus.InProgress));

    try {
      const { data } = await api.get<Offer[]>(APIRoute.Favorite);
      dispatch(loadFavorites(data));
    } catch (error) {
      errorHandle(error);
    }
  });

export const fetchReviews = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchReviews',
  async (hotelId, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Review[]>(
        generatePath(APIRoute.Comments, {
          hotelId,
        }),
      );
      dispatch(loadReviews(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const checkAuthorization = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuthorization',
  async (_arg,  { dispatch, extra: api }) => {
    try {
      await api.get(APIRoute.Login);
      const user = getUser();
      dispatch(setUser(user));
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      errorHandle(error);
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const login = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<User>(APIRoute.Login, {
        email,
        password,
      });

      saveUser(data);
      dispatch(setUser(data));
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(redirectToRoute(AppRoute.Main));
    } catch (error) {
      errorHandle(error);
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logout = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout', async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropUser();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  });

export const postReview = createAsyncThunk<void, { hotelId: string, review: ReviewData }, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'offer/postReview',
  async ({ hotelId, review }, { dispatch, extra: api }) => {
    dispatch(changeFormStatus({
      disabled: true,
    }));

    try {
      const { data } = await api.post<Review[]>(
        generatePath(APIRoute.Comments, {
          hotelId,
        }),
        review,
      );

      dispatch(loadReviews(data));
      dispatch(changeFormStatus({
        posted: true,
        disabled: false,
      }));
    } catch (error) {
      errorHandle(error);
      dispatch(changeFormStatus({
        disabled: false,
      }));
    }
  },
);

export const updateFavorites = createAsyncThunk<void, { hotelId: string, isFavorite: boolean, page: Page }, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'offer/updateFavorites',
  async ({ hotelId, isFavorite, page }, { dispatch, extra: api }) => {
    try {
      const status = isFavorite ? '0' : '1';
      const { data } = await api.post<Offer>(
        generatePath(APIRoute.UpdateFavorites, {
          hotelId,
          status,
        }),
      );
      switch (page) {
        case Page.Index: {
          dispatch(updateOffers(data));
          break;
        }
        case Page.Favorites:{
          dispatch(removeFromFavorites(data));
          break;
        }
        case Page.Property: {
          dispatch(loadOffer(data));
          break;
        }
      }
    } catch (error) {
      errorHandle(error);
    }
  },
);
