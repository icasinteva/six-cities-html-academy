import { LocationItem } from '../const';
import { LocationOffers, Offers } from '../types/offer';
import { reviews } from './reviews';

// const generateId = () => `${Math.floor(Math.random() * 100)}`;
const generateRating = () => Math.floor(Math.random() * 5) + 1;
const generatePrice = () => Math.floor(Math.random() * 355) + 90;

export const offers: Offers = [
  {
    gallery: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    id: 'Offer-1',
    imageSrc: 'img/apartment-01.jpg',
    premium: true,
    favorite: false,
    facilities: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    lat: 52.3909553943508,
    lng: 4.85309666406198,
    price: generatePrice(),
    rating: generateRating(),
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    host: {
      pro: true,
      name: 'Angelina',
      avatar: 'img/avatar-angelina.jpg',
      description: ['A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.', 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the location comes to rest in this alley flowery and colorful.'],
    },
    reviews: [reviews[0]],
  },
  {
    gallery: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    id: 'Offer-2',
    imageSrc: 'img/apartment-02.jpg',
    favorite: true,
    facilities: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    lat: 52.369553943508,
    lng: 4.85309666406198,
    premium: false,
    price: generatePrice(),
    rating: generateRating(),
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    host: {
      pro: true,
      name: 'Angelina',
      avatar: 'img/avatar-angelina.jpg',
      description: ['A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.', 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the location comes to rest in this alley flowery and colorful.'],
    },
    reviews: [reviews[2], reviews[0]],
  },
  {
    gallery: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    id: 'Offer-3',
    imageSrc: 'img/apartment-03.jpg',
    favorite: true,
    facilities: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    lat: 52.3909553943508,
    lng: 4.929309666406198,
    premium: false,
    price: generatePrice(),
    rating: generateRating(),
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    host: {
      pro: true,
      name: 'Angelina',
      avatar: 'img/avatar-angelina.jpg',
      description: ['A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.', 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the location comes to rest in this alley flowery and colorful.'],
    },
    reviews,
  },
  {
    gallery: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    id: 'Offer-4',
    imageSrc: 'img/apartment-02.jpg',
    premium: true,
    favorite: false,
    facilities: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    lat: 52.3809553943508,
    lng: 4.939309666406198,
    price: generatePrice(),
    rating: generateRating(),
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    host: {
      pro: true,
      name: 'Angelina',
      avatar: 'img/avatar-angelina.jpg',
      description: ['A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.', 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the location comes to rest in this alley flowery and colorful.'],
    },
    reviews: [reviews[1], reviews[3]],
  },
];

export const locationOffers: LocationOffers = [
  {
    location: LocationItem.Paris,
    offers,
  },
  {
    location: LocationItem.Amsterdam,
    offers,
  },
];
