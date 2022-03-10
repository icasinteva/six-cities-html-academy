import { Offer } from './offer';

export type SortingOptionToCallbackType = {
    [key: string]: (offer1: Offer, offer2: Offer) => number,
}
