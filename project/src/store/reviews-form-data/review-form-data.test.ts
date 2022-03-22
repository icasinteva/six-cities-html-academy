import { changeFormStatus, reviewsForm } from './reviews-form-data';

describe('Reducer: reviewForm', () => {
  it('without additional parameters should return initial state', () => {
    expect(reviewsForm.reducer(undefined, { type: 'UNKNOWN_ACTION' }))
      .toEqual({
        isReviewPosted: false,
        isFormDisabled: false,
      });
  });

  it('should update isReviewPosted to true and isFormDisabled to false', () => {
    const state = {
      isReviewPosted: false,
      isFormDisabled: true,
    };
    expect(reviewsForm.reducer(state, changeFormStatus({
      posted: true,
      disabled: false,
    }))).toEqual({
      isReviewPosted: true,
      isFormDisabled: false,
    });
  });

  it('should update isReviewPosted to false and isFormDisabled to true', () => {
    const state = {
      isReviewPosted: false,
      isFormDisabled: false,
    };
    expect(reviewsForm.reducer(state, changeFormStatus({
      disabled: true,
    }))).toEqual({
      isReviewPosted: false,
      isFormDisabled: true,
    });
  });
});
