
import { FavoritesByCity, Offers } from './types/offer';

export const getOffersByCity = (offers: Offers, activeCity: string) => offers.filter(({ city }) => city.name === activeCity) ?? [];

export const getFavorites = (offers: Offers) => {
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

export const capitalize = (text: string): string => text[0].toUpperCase() + text.slice(1, text.length);

export const formatDate = (value: string) => {
  const date = new Date(value);
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.toLocaleString('default', { year: 'numeric' });

  return `${  month  } ${  year}`;
};
