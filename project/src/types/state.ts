import { store } from '../store';
import { AuthorizationStatus, SortingType } from '../const';
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
  nearByOffers: Offer[],
  sortingType: SortingType;
  isDataLoaded: boolean
}

export type OfferData = {
  offer: Offer | null,
  reviews: Review[],
  isDataLoaded: boolean,
  isOfferFound: boolean,
}

export type FavoritesData = {
  favorites: FavoritesByCity,
  isDataLoaded: boolean
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
