import { City } from './types/map';
import { PathNameToPageType } from './types/page';
import { SortingOptionToCallbackType } from './types/sorting';

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  NotFound = '404'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum PathName {
  Index = '',
  Login = 'login',
  Offer = 'offer',
  Favorites = 'favorites'
}

export enum Page {
  Index = 'index',
  Login = 'login',
  Property = 'property',
  Favorites = 'favorites',
  NotFound = '404'
}

export const PathNameToPage: PathNameToPageType = {
  [PathName.Index]: Page.Index,
  [PathName.Login]: Page.Login,
  [PathName.Offer]: Page.Property,
  [PathName.Favorites]: Page.Favorites,
} as const;

export enum OfferType {
  Apartment = 'apartment',
  Room = 'room',
  House = 'house',
  Hotel = 'hotel',
}

export const OfferTypeToLabel = {
  [OfferType.Apartment]: 'Apartment',
  [OfferType.Room]: 'Room',
  [OfferType.House]: 'House',
  [OfferType.Hotel]: 'Hotel',
} as const;

export enum SortingType {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}

export const SortingOptionToCallback: SortingOptionToCallbackType = {
  [SortingType.PriceLowToHigh]: (offer1, offer2) => offer1.price - offer2.price,
  [SortingType.PriceHighToLow]: (offer1, offer2) => offer2.price - offer1.price,
  [SortingType.TopRatedFirst]: (offer1, offer2) =>
    offer2.rating - offer1.rating,
} as const;

export enum APIRoute {
  Login = '/login',
  Logout = 'logout',
  Hotels = '/hotels',
  Hotel = '/hotels/:hotelId',
  NearByHotels = '/hotels/:hotelId/nearby',
  Favorite = '/favorite',
  Comments = '/comments/:hotelId',
  UpdateFavorites = '/favorite/:hotelId/:status'
}

export enum HTTPCode {
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
}

export enum NameSpace {
  User = 'USER',
  Offer = 'OFFER',
  Offers = 'OFFERS',
  Favorites = 'FAVORITES',
  ReviewsForm = 'REVIEWS_FORM'
}

export enum LoadingStatus {
  InProgress = 'IN_PROGRESS',
  Success = 'SUCCESS',
  Error ='ERROR'
}

export const GALLERY_IMAGES_COUNT = 6;

export const OFFER_REVIEWS_COUNT = 10;

export const MAP_ZOOM = 13;

export const ReviewSymbols = {
  min: 50,
  max: 300,
} as const;

export const CITIES: City[] = [
  {
    location: {
      latitude: 48.8566,
      longitude: 2.3522,
      zoom: MAP_ZOOM,
    },
    name: 'Paris',
  },
  {
    location: {
      latitude: 50.9375,
      longitude: 6.9603,
      zoom: MAP_ZOOM,
    },
    name: 'Cologne',
  },
  {
    location: {
      latitude: 50.8476,
      longitude: 4.3572,
      zoom: MAP_ZOOM,
    },
    name: 'Brussels',
  },
  {
    location: {
      latitude: 52.3676,
      longitude: 4.9041,
      zoom: MAP_ZOOM,
    },
    name: 'Amsterdam',
  },
  {
    location: {
      latitude: 53.5511,
      longitude: 9.9937,
      zoom: MAP_ZOOM,
    },
    name: 'Hamburg',
  },
  {
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: MAP_ZOOM,
    },
    name: 'Dusseldorf',
  },
];

export const [ BASE_CITY ] = CITIES;

export const UrlMarker = {
  Default: 'img/pin.svg',
  Current: 'img/pin-active.svg',
} as const;

export enum FavoriteButtonClassName {
  Property = 'property',
  OfferCard = 'place-card'
}
