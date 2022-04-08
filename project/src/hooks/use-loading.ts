import { useState } from 'react';
import { LoadingStatus } from '../const';

type useLoadingType = [loading: boolean, handleLoading: (loadingStatus: LoadingStatus) => void]

export const useLoading = (): useLoadingType => {
  const [ loading, setLoading ] = useState<boolean>(true);

  const handleLoading = (loadingStatus: LoadingStatus) => {
    if (loadingStatus === LoadingStatus.InProgress) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  };

  return [ loading, handleLoading ];
};
