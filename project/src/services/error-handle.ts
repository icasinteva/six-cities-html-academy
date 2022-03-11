import request from 'axios';
import { toast } from 'react-toastify';
import { HTTP_CODE } from '../const';
import { ErrorType } from '../types/error';

export const errorHandle = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }


  const { response } = error;

  if (response) {
    const { status, data, statusText } = response;

    switch (status) {
      case HTTP_CODE.BAD_REQUEST:
        toast.info(data.error);
        break;
      case HTTP_CODE.UNAUTHORIZED:
        toast.info(data.error);
        break;
      case HTTP_CODE.NOT_FOUND: {
        toast.info(statusText);
        break;
      }
    }
  }
};
