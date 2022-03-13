import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from '.';
import { Page, PAGES } from '../const';

type usePageType = [page: Page, handleSetPage: () => void]

export const usePage = (initialPage: Page): usePageType => {
  const [page, setPage] = useState<Page>(initialPage);
  const location = useLocation();
  const { isOfferFound } = useAppSelector(({ OFFER }) => OFFER);

  const handleSetPage = () => {
    const [, pathname, id] = location.pathname.split('/');

    if (PAGES[pathname] && (id === undefined || !isNaN(parseInt(id, 10)))) {
      setPage(PAGES[pathname]);
    }


    if (page === Page.Property && !isOfferFound) {
      setPage(Page.NotFound);
    }
  };


  return [page, handleSetPage];
};
