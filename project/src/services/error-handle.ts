import request from 'axios';
import { toast } from 'react-toastify';
import { HTTPCode } from '../const';
import { ErrorType } from '../types/error';

export const errorHandle = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }


  const { response } = error;

  if (response) {
    const { status, data } = response;

    switch (status) {
      case HTTPCode.BadRequest: {
        toast.info(data.error);
        break;
      }
      case HTTPCode.Unauthorized: {
        toast.info(data.error);
        break;
      }
      case HTTPCode.NotFound: {
        toast.info(data.error);
        break;
      }
    }
  }
};
