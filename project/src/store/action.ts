import { createAction } from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';

export const getOffers = createAction('city/getOffers', () => ({
  payload: offers,
}));
export const setCity = createAction('city/set', (city) => ({
  payload: city,
}));
export const setSortingType = createAction('sorting/setType', (sortingType) => ({
  payload: sortingType,
}));

export const sortOffers = createAction('sort/offers');
