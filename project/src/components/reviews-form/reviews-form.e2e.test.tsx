import { configureMockStore } from '@jedmao/redux-mock-store';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Provider } from 'react-redux';
import ReviewsForm from './reviews-form';

const mockStore = configureMockStore();
const store = mockStore({
  REVIEWS_FORM: {},
});

const hotelId = '17';
const onSubmit = jest.fn();

const fakeReviewForm = (
  <Provider store={store}>
    <ReviewsForm hotelId={hotelId} onSubmit={onSubmit} />
  </Provider>);

describe('Component: ReviewsForm', () => {
  it('should update comment field when user types', () => {
    render(fakeReviewForm);

    userEvent.type(screen.getByTestId('review'), 'My review');
    expect(screen.getByDisplayValue(/My review/i)).toBeInTheDocument();
  });

  it('should call onSubmit when form is submitted', () => {
    render(fakeReviewForm);

    const form = screen.getByTestId('reviews__form');

    fireEvent.submit(form);

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it('should call onSubmit with proper data when form is submitted', () => {
    const comment = 'My comment';
    const rating = '2';

    const expectedData = {
      hotelId,
      review: {
        comment,
        rating,
      },
    };

    render(fakeReviewForm);

    const form = screen.getByTestId('reviews__form');
    const ratingStar = screen.getByTestId(`${rating}-stars`);

    ratingStar.click();

    userEvent.type(screen.getByTestId('review'), comment);

    fireEvent.submit(form);

    expect(onSubmit).toHaveBeenCalledWith(expectedData);
  });
});
