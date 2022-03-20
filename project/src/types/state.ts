import { store } from '../store';
import { AuthorizationStatus, LOADING_STATUS, SortingType } from '../const';
import { User } from './user';
import { FavoritesByCity, Offer, Review } from './offer';
import { City } from './map';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus
  user: User | null
};

export type OffersData = {
  city: City,
  offers: Offer[],
  sortingType: SortingType;
  loadingStatus: LOADING_STATUS
}

export type NearByOffersData = {
  nearByOffers: Offer[],
  loadingStatus: LOADING_STATUS
}

export type OfferData = {
  offer: Offer | null,
  reviews: Review[],
  loadingStatus: LOADING_STATUS
}

export type FavoritesData = {
  favorites: FavoritesByCity,
  loadingStatus: LOADING_STATUS
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
