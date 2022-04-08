import classNames from 'classnames';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { Page, PathName } from '../../const';
import { useAppSelector } from '../../hooks';
import { usePage } from '../../hooks/use-page';
import Header from '../header/header';
import FooterLogo from '../logo/footer-logo';

function Layout() {
  const { authorizationStatus } = useAppSelector(({ USER }) => USER);
  const { offer, loadingStatus } = useAppSelector(({ OFFER }) => OFFER);
  const { offers } = useAppSelector(({ OFFERS }) => OFFERS);
  const { favorites } = useAppSelector(({ FAVORITES }) => FAVORITES);
  const isEmptyLayout = !offers.length || !Object.keys(favorites).length;
  const grayPages = [Page.Index, Page.Login];
  const pagesWithFooter = [Page.Favorites, PathName.Offer, Page.NotFound];

  const [ page, handleSetPage ] = usePage(Page.Index, {
    authorizationStatus,
    offerData: {
      offer,
      loadingStatus,
    },
  });

  useEffect(handleSetPage, [handleSetPage]);

  const pageClassName = classNames('page', `page--${page}`, {
    [`page--${page}-empty`]: isEmptyLayout,
    'page--gray': grayPages.includes(page),
  });

  const pageMainClassName = `page__main--${page}`;

  const mainClassName = classNames('page-main', pageMainClassName, {
    [`${pageMainClassName}-empty`]: isEmptyLayout,
  });

  return (
    <div className={pageClassName}>
      <Header />
      <main className={mainClassName}>
        <Outlet />
      </main>
      {pagesWithFooter.includes(page) &&
        <footer className="footer">
          <FooterLogo />
        </footer>}
    </div>);
}

export default Layout;
