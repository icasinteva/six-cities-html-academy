import { useState } from 'react';
import { ReviewData } from '../types/review-data';

type ReviewField = {
  [name: string]: string
}

type useReviewDataType = [ ReviewData, (reviewField?: ReviewField) => void ]

export const useReviewData = (): useReviewDataType => {
  const initialReviewData: ReviewData = {
    comment: '',
    rating: '',
  };
  const [ reviewData, setReviewData ] = useState<ReviewData>(initialReviewData);


  const handleReviewDataChange = (reviewField?: ReviewField) => {
    if (!reviewField) {
      setReviewData(initialReviewData);
    } else {
      setReviewData({
        ...reviewData,
        ...reviewField,
      });
    }
  };

  return [ reviewData, handleReviewDataChange ];
};
