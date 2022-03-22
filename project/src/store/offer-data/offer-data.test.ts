import { LOADING_STATUS } from '../../const';
import { makeFakeOffer, makeFakeOffers, makeFakeReviews } from '../../utils/mocks';
import { loadNearByOffers, loadOffer, loadReviews, offerData, setOfferLoading } from './offer-data';

describe('Reducer: offer', () => {
  it('without additional parameters should return initial state', () => {
    expect(offerData.reducer(undefined, { type: 'UNKNOWN_ACTION' }))
      .toEqual({
        offer: null,
        reviews: [],
        nearByOffers: [],
        loadingStatus: LOADING_STATUS.IN_PROGRESS,
      });
  });

  it('should load offer', () => {
    const mockOffer = makeFakeOffer();
    const state = {
      offer: null,
      reviews: [],
      nearByOffers: [],
      loadingStatus: LOADING_STATUS.IN_PROGRESS,
    };

    expect(offerData.reducer(state, loadOffer(mockOffer)).offer)
      .toEqual(mockOffer);

    expect(offerData.reducer(state, setOfferLoading(LOADING_STATUS.SUCCESS)).loadingStatus)
      .toEqual(LOADING_STATUS.SUCCESS);
  });

  it('should update offer to null', () => {
    const state = {
      offer: null,
      reviews: [],
      nearByOffers: [],
      loadingStatus: LOADING_STATUS.IN_PROGRESS,
    };

    expect(offerData.reducer(state, loadOffer(null)).offer)
      .toEqual(null);

    expect(offerData.reducer(state, setOfferLoading(LOADING_STATUS.ERROR)).loadingStatus)
      .toEqual(LOADING_STATUS.ERROR);
  });
  it('should load reviews', () => {
    const state = {
      offer: null,
      reviews: [],
      nearByOffers: [],
      loadingStatus: LOADING_STATUS.IN_PROGRESS,
    };
    const mockReviews = makeFakeReviews(5);

    expect(offerData.reducer(state, loadReviews(mockReviews)).reviews).toEqual(mockReviews);
  });

  it('should load nearByOffers', () => {
    const state = {
      offer: null,
      reviews: [],
      nearByOffers: [],
      loadingStatus: LOADING_STATUS.IN_PROGRESS,
    };

    const mockNearByOffers = makeFakeOffers(3);

    expect(offerData.reducer(state, loadNearByOffers(mockNearByOffers)).nearByOffers).toEqual(mockNearByOffers);
  });
});
