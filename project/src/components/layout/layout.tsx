import classNames from 'classnames';

import { Outlet, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import Header from '../header/header';
import FooterLogo from '../logo/footer-logo';

type PagesType = {
  [key:string]: string
}

const pages: PagesType = {
  '': 'index',
  'login': 'login',
  'offer': 'property',
  'favorites': 'favorites',
};

function Layout() {
  let page = '404';
  const { offers, favorites } = useAppSelector((state) => state);
  const isEmptyLayout = !offers.length || !favorites.length;
  const location = useLocation();
  const [, pathname, id] = location.pathname.split('/');
  const grayPages = ['index', 'login'];
  const pagesWithFooter = ['favorites', 'offer', '404'];

  if (pages[pathname] && (id === undefined || !isNaN(parseInt(id, 10)))) {
    page =  pages[pathname];
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
