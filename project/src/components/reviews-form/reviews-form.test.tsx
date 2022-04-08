import { configureMockStore } from '@jedmao/redux-mock-store';
import { render } from '@testing-library/react';

import { Provider } from 'react-redux';
import ReviewsForm from './reviews-form';


const mockStore = configureMockStore();
const store = mockStore({
  REVIEWS_FORM: {},
});
const onSubmit = jest.fn();

describe('Component: ReviewsForm', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <ReviewsForm hotelId='17' onSubmit={onSubmit} />
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});
