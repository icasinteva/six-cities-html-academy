import { createAction } from '@reduxjs/toolkit';

export const loadOffers = createAction('city/loadOffers', (offers) => ({
  payload: offers,
}));
export const loadOffer = createAction('city/loadOffer', (offer) => ({
  payload: offer,
}));
export const setCity = createAction('city/set', (city) => ({
  payload: city,
}));
export const loadNearByOffers = createAction('city/loadNearByOffers', (offers) => ({
  payload: offers,
}));
export const loadComments = createAction('offer/loadComments', (comment) => ({
  payload: comment,
}));
export const setSortingType = createAction('sorting/setType', (sortingType) => ({
  payload: sortingType,
}));

export const sortOffers = createAction('sort/offers');
