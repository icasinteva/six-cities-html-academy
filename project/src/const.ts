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

export enum LocationItem {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

export const LocationItems = [LocationItem.Paris, LocationItem.Cologne, LocationItem.Brussels, LocationItem.Amsterdam, LocationItem.Hamburg, LocationItem.Dusseldorf];
