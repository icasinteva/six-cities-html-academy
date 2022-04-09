import { LoadingStatus, NameSpace } from '../../const';
import { Offer, Review } from '../../types/offer';
import { State } from '../../types/state';

export const getOffer = (state: State): Offer | null => state[NameSpace.Offer].offer;
export const getReviews = (state: State): Review[] => state[NameSpace.Offer].reviews;
export const getNearByOfffers = (state: State): Offer[] => state[NameSpace.Offer].nearByOffers;
export const getLoadingStatus = (state: State): LoadingStatus => state[NameSpace.Offer].loadingStatus;
