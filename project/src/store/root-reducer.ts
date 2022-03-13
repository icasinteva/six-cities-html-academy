import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { offersData } from './offers-data/offers-data';
import { offerData } from './offer-data/offer-data';
import { favoritesData } from './favorites-data/favorites-data';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.offers]: offersData.reducer,
  [NameSpace.offer]: offerData.reducer,
  [NameSpace.favorites]: favoritesData.reducer,
  [NameSpace.user]: userProcess.reducer,
});
