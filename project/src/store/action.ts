import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../const';
import { City } from '../types/map';
import { Offer, Review } from '../types/offer';
import { User } from '../types/user';

export const setCity = createAction<City>('city/set');

export const loadOffers = createAction<Offer[]>('city/loadOffers');

export const loadOffer = createAction<Offer>('city/loadOffer');

export const loadFavorites = createAction<Offer[]>('city/loadFavorites');

export const loadNearByOffers = createAction<Offer[]>('city/loadNearByOffers');

export const loadComments = createAction<Review[]>('offer/loadComments');

export const setSortingType = createAction('sorting/setType', (sortingType) => ({
  payload: sortingType,
}));

export const sortOffers = createAction('sort/offers');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setUser = createAction<User>('user/set');

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
