import { Action } from 'redux';
import { datatype } from 'faker';
import thunk, { ThunkDispatch } from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createAPI } from '../services/api';
import { checkAuthorization, fetchOffer, fetchOffers, login, logout, fetchNearByHotels, fetchFavorites, fetchReviews, postReview } from './api-actions';
import { requireAuthorization } from './user-process/user-process';
import { APIRoute } from '../const';
import { State } from '../types/state';
import { AuthData } from '../types/auth-data';
import { redirectToRoute } from './action';
import { makeFakeOffer, makeFakeOffers, makeFakeFavorites, makeFakeReviews, makeFakeReviewData } from '../utils/mocks';
import { loadOffers } from './offers-data/offers-data';
import { generatePath } from 'react-router-dom';
import { loadNearByOffers, loadOffer, loadReviews } from './offer-data/offer-data';
import { loadFavorites } from './favorites-data/favorites-data';
import { ReviewData } from '../types/review-data';
import { changeFormStatus } from './reviews-form-data/reviews-form-data';

describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [ thunk.withExtraArgument(api) ];

  const mockStore = configureMockStore<
        State,
        Action,
        ThunkDispatch<State, typeof api, Action>
      >(middlewares);

  it('should authorizationStatus be «auth» when server return 200', async () => {
    const store = mockStore();

    mockAPI
      .onGet(APIRoute.Login)
      .reply(200, []);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkAuthorization());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain(requireAuthorization.toString());
  });

  it('should dispatch RequriedAuthorization and RedirectToRoute when POST /login', async () => {
    const fakeUser: AuthData = { login: 'test@test.com', password: '123456' };
    const response = { token: 'secret' };

    mockAPI
      .onPost(APIRoute.Login)
      .reply(200, response);

    const store = mockStore();

    Storage.prototype.setItem = jest.fn();

    await store.dispatch(login(fakeUser));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain(requireAuthorization.toString());

    expect(actions).toContain(redirectToRoute.toString());

    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.setItem).toBeCalledWith('six-cities-user-data', JSON.stringify(response));
  });

  it('should dispatch RequriedAuthorization when DELETE /logout', async () => {
    mockAPI
      .onDelete(APIRoute.Logout)
      .reply(204);

    const store = mockStore();

    Storage.prototype.removeItem = jest.fn();

    await store.dispatch(logout());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain(requireAuthorization.toString());

    expect(Storage.prototype.removeItem).toBeCalledTimes(1);
    expect(Storage.prototype.removeItem).toBeCalledWith('six-cities-user-data');
  });

  it('should dispatch FetchOffers whith GET /hotels', async () => {
    mockAPI
      .onGet(APIRoute.Hotels)
      .reply(200, makeFakeOffers(5));

    const store = mockStore();

    await store.dispatch(fetchOffers());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain(loadOffers.toString());
  });

  it('should dispatch FetchOffer with GET /hotels/:hotelId', async () => {
    const hotelId = `${datatype.number()}`;

    mockAPI
      .onGet(generatePath(APIRoute.Hotel, {
        hotelId,
      }))
      .reply(200, makeFakeOffer());

    const store = mockStore();

    await store.dispatch(fetchOffer(hotelId));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain(loadOffer.toString());
  });

  it('should dispatch FetchNearByOffers with GET /hotels/:hotelId/nearby', async () => {
    const hotelId = `${datatype.number()}`;

    mockAPI
      .onGet(generatePath(APIRoute.NearByHotels, {
        hotelId,
      }))
      .reply(200, makeFakeOffers(3));

    const store = mockStore();

    await store.dispatch(fetchNearByHotels(hotelId));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain(loadNearByOffers.toString());
  });

  it('should dispatch FetchFavorites with GET /favorite', async () => {
    mockAPI
      .onGet(APIRoute.Favorite)
      .reply(200, makeFakeFavorites(5));

    const store = mockStore();

    await store.dispatch(fetchFavorites());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain(loadFavorites.toString());
  });

  it('should dispatch FetchReviews with GET /comments/:hotelId', async () => {
    const hotelId = `${datatype.number()}`;

    mockAPI
      .onGet(generatePath(APIRoute.Comments, {
        hotelId,
      }))
      .reply(200, makeFakeReviews(5));

    const store = mockStore();

    await store.dispatch(fetchReviews(hotelId));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain(loadReviews.toString());
  });

  it('should dispatch PostReview with POST /comments/:hotelId', async () => {
    const hotelId = `${datatype.number()}`;
    const fakeReviewData: ReviewData = makeFakeReviewData();

    mockAPI
      .onPost(generatePath(APIRoute.Comments, {
        hotelId,
      }))
      .reply(200);

    const store = mockStore();

    await store.dispatch(postReview({
      hotelId,
      review: fakeReviewData,
    }));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain(loadReviews.toString());
    expect(actions).toContain(changeFormStatus.toString());
  });
});
