import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthorizationStatus, LoadingStatus, Page, PathNameToPage } from '../const';
import { validatePage } from '../services/helpers';

type usePageType = [page: Page, handleSetPage: () => void]

export const usePage = (initialPage: Page, options?: any): usePageType => {
  const [ page, setPage ] = useState<Page>(initialPage);
  const location = useLocation();

  const { authorizationStatus, offerData } = options;
  const { offer, loadingStatus } = offerData;

  const handleSetPage = () => {
    const [, pathname, id] = location.pathname.split('/');
    const currentPage = PathNameToPage[pathname];
    const isOfferFound = !!offer && loadingStatus !== LoadingStatus.InProgress;
    const isPageValid = validatePage({
      currentPage,
      id,
      isOfferFound,
    });

    if (authorizationStatus !== AuthorizationStatus.Unknown) {
      if (isPageValid) {
        setPage(currentPage);
      } else {
        setPage(Page.NotFound);
      }
    }
  };

  return [ page, handleSetPage ];
};
