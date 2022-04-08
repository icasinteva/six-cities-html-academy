import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { favoritesData } from './favorites-data/favorites-data';
import { offerData } from './offer-data/offer-data';
import { offersData } from './offers-data/offers-data';
import { reviewsForm } from './reviews-form-data/reviews-form-data';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Offer]: offerData.reducer,
  [NameSpace.Offers]: offersData.reducer,
  [NameSpace.Favorites]: favoritesData.reducer,
  [NameSpace.ReviewsForm]: reviewsForm.reducer,
});
