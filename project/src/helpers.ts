import { LocationItem } from './const';
import { LocationOffers } from './types/offer';
import { locationOffers } from './mocks/offers';

export const getOffersByLocation = (offers: LocationOffers, activeLocation: LocationItem) => offers.find((offer) => offer.location === activeLocation)?.offers ?? [];

export const getFavorites = () => locationOffers.map(({ location, offers }) => ({ location, offers: offers.filter(({ favorite }) => favorite) })).filter(({offers}) => offers.length);

