import { address, commerce, datatype, date, image, internet, lorem, name, random } from 'faker';
import { CITIES, MAP_ZOOM, OfferType } from '../const';
import { Offer, Review } from '../types/offer';
import { ReviewData } from '../types/review-data';
import { User } from '../types/user';

export const makeFakeUser = (): User => ({
  avatarUrl: internet.avatar(),
  name: name.firstName(),
  email: internet.email(),
  isPro: datatype.boolean(),
  token: random.alphaNumeric(32),
  id: datatype.number(),
} as User);

export const makeFakeOffer = (options?: { isFavorite?: boolean, isPremium?: boolean }): Offer => ({
  bedrooms: datatype.number({ max: 5 }),
  city: CITIES[datatype.number({ max: 6})],
  description: lorem.sentences(),
  goods: [...new Set(Array.from({ length: 8 }).map(() => commerce.product()))],
  host:  {
    avatarUrl: internet.avatar(),
    id: datatype.number(),
    isPro: datatype.boolean(),
    name: name.firstName(),
  },
  id: datatype.number(),
  images: Array.from({ length: 10 }).map(() => image.imageUrl()),
  isFavorite: options?.isFavorite ?? datatype.boolean(),
  isPremium: options?.isPremium ?? datatype.boolean(),
  location: {
    latitude: +address.latitude(),
    longitude: +address.longitude(),
    zoom: MAP_ZOOM,
  },
  maxAdults: datatype.number({ min: 1, max: 10}),
  previewImage: image.imageUrl(),
  price: +commerce.price(),
  rating: datatype.number({ min: 1, max: 5, precision: 0.1 }),
  title: lorem.sentence(),
  type: random.arrayElement([OfferType.Apartment, OfferType.Hotel, OfferType.House, OfferType.Room]),
});

export const makeFakeReviewData = (): ReviewData => ({
  comment: lorem.sentences(3),
  rating: `${datatype.number({ min: 1, max: 5, precision: 0.1 })}`,
});

export const makeFakeReviews = (quanatity: number): Review[] => Array.from({ length: quanatity }).map((_) => ({
  comment: lorem.sentences(),
  id: datatype.number(),
  rating: datatype.number({ min: 1, max: 5, precision: 0.1 }),
  user: makeFakeUser(),
  date: `${date.recent()}`,
}
));

export const makeFakeOffers = (quanatity: number): Offer[] => Array.from({ length: quanatity }).map((_) => makeFakeOffer());

export const makeFakeFavorites = (quanatity: number): Offer[] => Array.from({ length: quanatity }).map((_) => makeFakeOffer({ isFavorite: true }));
