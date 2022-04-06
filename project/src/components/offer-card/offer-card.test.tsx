import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';

import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';

import { AuthorizationStatus, OFFERTYPE_TO_LABEL } from '../../const';
import { makeFakeOffer } from '../../utils/mocks';
import HistoryRouter from '../history-route';
import OfferCard from './offer-card';

const mockStore = configureMockStore();
const store = mockStore({
  USER: {
    authorizationStatus: AuthorizationStatus.Auth,
  },
});
const history = createMemoryHistory();

describe('Component: OfferCard', () => {
  it('should render correctly', () => {
    const fakeOffer = makeFakeOffer();
    const { type, title, previewImage } = fakeOffer;

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <OfferCard className='cities' offer={fakeOffer} />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId('place-card__image').getAttribute('src')).toBe(previewImage);
    expect(screen.getByTestId('place-card__price')).toBeInTheDocument();
    expect(screen.getByTestId('rating')).toBeInTheDocument();
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(OFFERTYPE_TO_LABEL[type])).toBeInTheDocument();
  });
});
