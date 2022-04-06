import { useState } from 'react';
import { LOADING_STATUS } from '../const';

type useLoadingType = [loading: boolean, handleLoading: (loadingStatus: LOADING_STATUS) => void]

export const useLoading = (): useLoadingType => {
  const [ loading, setLoading ] = useState<boolean>(true);

  const handleLoading = (loadingStatus: LOADING_STATUS) => {
    if (loadingStatus === LOADING_STATUS.IN_PROGRESS) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  };

  return [ loading, handleLoading ];
};
