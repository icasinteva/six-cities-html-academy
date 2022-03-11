
import { FavoritesByCity, Offer } from '../types/offer';

export const loadOffersByCity = (offers: Offer[], activeCity: string) => offers.filter(({ city }) => city.name === activeCity);

export const getFavorites = (offers: Offer[] = []) => {
  const favorites = offers.filter(({ isFavorite }) => isFavorite);
  const favoritesByCity: FavoritesByCity = {};

  for (const data of favorites) {
    const city = data.city.name;
    const cityFavorites = favoritesByCity[city];

    if (!cityFavorites) {
      favoritesByCity[city] = favorites.filter((offer) => offer.city.name === city);
    } else {
      continue;
    }
  }

  return favoritesByCity;
};

export const formatDate = (value: string) => {
  const date = new Date(value);
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.toLocaleString('default', { year: 'numeric' });

  return `${  month  } ${  year}`;
};
