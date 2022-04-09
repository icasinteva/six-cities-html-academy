import { LoadingStatus, NameSpace, SortingType } from '../../const';
import { City } from '../../types/map';
import { Offer } from '../../types/offer';
import { State } from '../../types/state';

export const getCity = (state: State): City => state[NameSpace.Offers].city;
export const getOffers = (state: State): Offer[] => state[NameSpace.Offers].offers;
export const getSortingType = (state: State): SortingType => state[NameSpace.Offers].sortingType;
export const getLoadingStatus = (state: State): LoadingStatus => state[NameSpace.Offers].loadingStatus;
