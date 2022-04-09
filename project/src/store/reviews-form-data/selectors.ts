import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getReviewPosted = (state: State): boolean => state[NameSpace.ReviewsForm].isReviewPosted;
export const getFormDisabled = (state: State): boolean => state[NameSpace.ReviewsForm].isFormDisabled;
