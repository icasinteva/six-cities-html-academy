
import { CITIES, Page } from '../const';
import { FavoritesByCity, Offer } from '../types/offer';

export const getOffersByCity = (offers: Offer[], activeCity: string) => offers.filter(({ city }) => city.name === activeCity);

export const getFavoritesByCity = (offers: Offer[] = []) => {
  const favorites = offers.filter?.(({ isFavorite }) => isFavorite) ?? [];
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

export const getRandomCity = () => {
  const index = Math.floor(Math.random() * (CITIES.length - 1));

  return CITIES[index];
};

export const validatePage = ({
  currentPage,
  id,
  isOfferFound,
}: {
    currentPage: Page,
    id: string,
    isOfferFound: boolean
  }): boolean => {
  const isValidPage = currentPage && currentPage !== Page.Property && !id;

  const isValidPropertyPage = currentPage === Page.Property && !isNaN(parseInt(id, 10)) && isOfferFound;

  return isValidPage || isValidPropertyPage;
};
