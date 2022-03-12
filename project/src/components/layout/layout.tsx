import classNames from 'classnames';

import { Outlet, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import Header from '../header/header';
import FooterLogo from '../logo/footer-logo';

enum PathName {
  Index = '',
  Login = 'login',
  Offer = 'offer',
  Favorites = 'favorites'
}

enum Page {
  Index = 'index',
  Login = 'login',
  Property = 'property',
  Favorites = 'favorites',
  NotFound = '404'
}

type PagesType = {
  [key:string]: Page
}

const pages: PagesType = {
  [PathName.Index]: Page.Index,
  [PathName.Login]: Page.Login,
  [PathName.Offer]: Page.Property,
  [PathName.Favorites]: Page.Favorites,
};

function Layout() {
  let page = Page.NotFound;
  const { offers, favorites, isOfferNotFound } = useAppSelector((state) => state);
  const isEmptyLayout = !offers.length || !favorites.length;
  const location = useLocation();
  const [, pathname, id] = location.pathname.split('/');
  const grayPages = [Page.Index, Page.Login];
  const pagesWithFooter = [Page.Favorites, PathName.Offer, Page.NotFound];

  if (pages[pathname] && (id === undefined || !isNaN(parseInt(id, 10)))) {
    page =  pages[pathname];
  }


  if (page === Page.Property && isOfferNotFound) {
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
