import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';

type initialStateType = {
    isReviewPosted: boolean,
    isFormDisabled: boolean,
}

const initialState: initialStateType = {
  isReviewPosted: false,
  isFormDisabled: false,
};

export const reviewsForm = createSlice({
  name: NameSpace.ReviewsForm,
  initialState,
  reducers: {
    changeFormStatus: (state, action) => {
      const { posted, disabled } = action.payload;

      state.isReviewPosted = !!posted;
      state.isFormDisabled = disabled;
    },
  },
});

export const { changeFormStatus } = reviewsForm.actions;
