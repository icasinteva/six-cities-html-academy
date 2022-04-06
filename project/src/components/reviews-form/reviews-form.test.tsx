import { render, screen } from '@testing-library/react';
import ReviewsForm from './reviews-form';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';

const mockStore = configureMockStore();
const store = mockStore({
  REVIEWS_FORM: {},
});

describe('Component: ReviewsForm', () => {
  test('should render correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <ReviewsForm hotelId='17' />
      </Provider>,
    );

    expect(container).toMatchSnapshot();

    userEvent.type(screen.getByTestId('review'), 'My review');
    expect(screen.getByDisplayValue(/My review/i)).toBeInTheDocument();
  });

  xit('should call handleSubmit when submit button is clicked', () => {
    render(
      <Provider store={store}>
        <ReviewsForm hotelId='17' />
      </Provider>,
    );

    const submitBtn = screen.getByDisplayValue('Submit');
    const handleSubmit = jest.fn();
    submitBtn.click();

    expect(handleSubmit).toBeCalledTimes(1);
  });
});
