export enum AppRoute {
    Main = '/',
    SignIn = '/login',
    Favorites = '/favorites',
    Room = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const MAP_ZOOM = 12;

export const CITIES = [
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

export const BASE_CITY = CITIES[3];

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

