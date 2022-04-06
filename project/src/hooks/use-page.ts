import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from '.';
import { LOADING_STATUS, Page, PAGES } from '../const';
import { validatePage } from '../services/helpers';

type usePageType = [page: Page, handleSetPage: () => void]

export const usePage = (initialPage: Page): usePageType => {
  const [ page, setPage ] = useState<Page>(initialPage);
  const location = useLocation();
  const { offer, loadingStatus } = useAppSelector(({ OFFER }) => OFFER);

  const handleSetPage = () => {
    const [, pathname, id] = location.pathname.split('/');
    const currentPage = PAGES[pathname];
    const isOfferFound = !!offer && loadingStatus !== LOADING_STATUS.IN_PROGRESS;
    const isPageValid = validatePage({
      currentPage,
      id,
      isOfferFound,
    });

    if (isPageValid) {
      setPage(currentPage);
    } else {
      setPage(Page.NotFound);
    }
  };

  return [ page, handleSetPage ];
};
