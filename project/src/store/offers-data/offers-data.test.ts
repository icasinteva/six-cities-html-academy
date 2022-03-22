import { BASE_CITY, CITIES, LOADING_STATUS, SortingType } from '../../const';
import { getOffersByCity } from '../../services/helpers';
import { makeFakeOffers } from '../../utils/mocks';
import { removeFromFavorites } from '../favorites-data/favorites-data';
import { loadOffers, offersData, setCity, setOffersLoading, sortOffers } from './offers-data';

describe('Reducer: offers', () => {
  it('without additional parameters should return initial state', () => {
    expect(offersData.reducer(undefined, { type: 'UNKNOWN_ACTION' }))
      .toEqual({
        city: BASE_CITY,
        offers: [],
        sortingType: SortingType.Popular,
        loadingStatus: LOADING_STATUS.IN_PROGRESS,
      });
  });

  it('should update city to Amsterdam and loadinStatus to "IN_PROGRESS"', () => {
    const state = {
      city: BASE_CITY,
      offers: [],
      sortingType: SortingType.Popular,
      loadingStatus: LOADING_STATUS.SUCCESS,
    };

    expect(offersData.reducer(state, setCity(CITIES[3]))).toEqual({
      city: CITIES[3],
      offers: [],
      sortingType: SortingType.Popular,
      loadingStatus: LOADING_STATUS.IN_PROGRESS,
    });
  });

  it('should load offers and update loadingStatus to "SUCCESS', () => {
    const state = {
      city: BASE_CITY,
      offers: [],
      sortingType: SortingType.Popular,
      loadingStatus: LOADING_STATUS.IN_PROGRESS,
    };

    const mockOffers = getOffersByCity(makeFakeOffers(15), BASE_CITY.name);

    expect(offersData.reducer(state, loadOffers(mockOffers))).toEqual({
      city: BASE_CITY,
      offers: mockOffers,
      sortingType: SortingType.Popular,
      loadingStatus: LOADING_STATUS.SUCCESS,
    });
  });

  it('should update sortingType to "Price: low to high" and sort offers accordingly', () => {
    const mockOffers = makeFakeOffers(5);
    const { city } = mockOffers[0];
    const offers = getOffersByCity(mockOffers, city.name);
    const state = {
      city,
      offers,
      sortingType: SortingType.Popular,
      loadingStatus: LOADING_STATUS.SUCCESS,
    };

    expect(offersData.reducer(state, sortOffers(SortingType.PriceLowToHigh))).toEqual({
      city,
      offers: [...offers].sort((offer1, offer2) => offer1.price - offer2.price),
      sortingType: SortingType.PriceLowToHigh,
      loadingStatus: LOADING_STATUS.SUCCESS,
    });
  });

  it('should update loadingStatus to "ERROR"', () => {
    const state = {
      city: BASE_CITY,
      offers: [],
      sortingType: SortingType.Popular,
      loadingStatus: LOADING_STATUS.IN_PROGRESS,
    };

    expect(offersData.reducer(state, setOffersLoading(LOADING_STATUS.ERROR)).loadingStatus).toEqual(LOADING_STATUS.ERROR);
  });

  it('should update offers', () => {
    const mockOffers = makeFakeOffers(5);
    const [ offer ] = mockOffers;
    const { isFavorite } = offer;
    const state = {
      city: offer.city,
      offers: getOffersByCity(mockOffers, offer.city.name),
      sortingType: SortingType.Popular,
      loadingStatus: LOADING_STATUS.SUCCESS,
    };

    offer.isFavorite = !isFavorite;

    const { offers } = offersData.reducer(state, removeFromFavorites(offer));

    expect(offers[0]).toEqual(offer);
  });
});
