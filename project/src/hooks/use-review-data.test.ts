import { act, renderHook } from '@testing-library/react-hooks';
import { ReviewData } from '../types/review-data';
import { makeFakeReviewData } from '../utils/mocks';
import { useReviewData } from './use-review-data';

describe('Hook: useReviewData', () => {
  it('should return array with 2 elements', () => {
    const initialReviewData: ReviewData = {
      comment: '',
      rating: '',
    };
    const { result } = renderHook(() => useReviewData());

    const [ reviewData, handleReviewDataChange ] = result.current;

    expect(result.current).toHaveLength(2);
    expect(reviewData).toStrictEqual(initialReviewData);
    expect(handleReviewDataChange).toBeInstanceOf(Function);
  });

  it('should be correctly change state', () => {
    const expectedInitialReviewData: ReviewData = {
      comment: '',
      rating: '',
    };
    const { result } = renderHook(() => useReviewData());
    const [ initialReviewData, handleReviewDataChange ] = result.current;

    expect(initialReviewData).toStrictEqual(expectedInitialReviewData);

    const fakeReviewData = makeFakeReviewData();

    act(() => handleReviewDataChange(fakeReviewData));

    let [ reviewData ] = result.current;

    expect(reviewData).toStrictEqual(fakeReviewData);

    act(() => handleReviewDataChange());

    [ reviewData ] = result.current;

    expect(reviewData).toStrictEqual(initialReviewData);
  });
});
