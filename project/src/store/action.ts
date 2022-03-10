import { createAction } from '@reduxjs/toolkit';

export const getOffers = createAction('city/getOffers', (offers) => ({
  payload: offers,
}));
export const setCity = createAction('city/set', (city) => ({
  payload: city,
}));
