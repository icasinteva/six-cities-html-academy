import classNames from 'classnames';

import { Outlet, useLocation } from 'react-router-dom';
import { Page, PAGES, PathName } from '../../const';
import { useAppSelector } from '../../hooks';
import Header from '../header/header';
import FooterLogo from '../logo/footer-logo';

function Layout() {
  let page = Page.NotFound;
  const { offers } = useAppSelector(({ OFFERS }) => OFFERS);
  const { favorites } = useAppSelector(({ FAVORITES }) => FAVORITES);
  const { isOfferFound } = useAppSelector(({ OFFER }) => OFFER);
  const isEmptyLayout = !offers.length || !Object.keys(favorites).length;
  const location = useLocation();
  const [, pathname, id] = location.pathname.split('/');
  const grayPages = [Page.Index, Page.Login];
  const pagesWithFooter = [Page.Favorites, PathName.Offer, Page.NotFound];

  if (PAGES[pathname] && (id === undefined || !isNaN(parseInt(id, 10)))) {
    page =  PAGES[pathname];
  }


  if (page === Page.Property && !isOfferFound) {
    page = Page.NotFound;
  }

  const pageMainClassName = `page__main--${page}`;

  const mainClassName = classNames('page-main', pageMainClassName, {
    [`${pageMainClassName}-empty`]: isEmptyLayout,
  });

  const pageClassName = classNames('page', `page--${page}`, {
    [`page--${page}-empty`]: isEmptyLayout,
    'page--gray': grayPages.includes(page),
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
