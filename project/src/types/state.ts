import { store } from '../store';
import { AuthorizationStatus, LoadingStatus, SortingType } from '../const';
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
  loadingStatus: LoadingStatus
}

export type NearByOffersData = {
  nearByOffers: Offer[],
  loadingStatus: LoadingStatus
}

export type OfferData = {
  offer: Offer | null,
  reviews: Review[],
  nearByOffers: Offer[],
  loadingStatus: LoadingStatus
}

export type FavoritesData = {
  favorites: FavoritesByCity,
  loadingStatus: LoadingStatus
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
