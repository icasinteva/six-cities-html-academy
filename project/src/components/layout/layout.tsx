import classNames from 'classnames';

import { Outlet, useLocation } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { User } from '../../types/user';
import Header from '../header/header';
import FooterLogo from '../logo/footer-logo';

type LayoutProps = {
  isEmptyLayout: boolean,
  authorizationStatus: AuthorizationStatus,
  user: User
}

type PagesType = {
  [key:string]: string
}

const pages: PagesType = {
  '': 'index',
  'login': 'login',
  'offer': 'property',
  'favorites': 'favorites',
};

function Layout({ authorizationStatus, isEmptyLayout, user }: LayoutProps) {
  const location = useLocation();
  const [, pathname] = location.pathname.split('/');
  const page = pages[pathname] || '404';
  const pageMainClassName = `page__main--${page}`;
  const grayPages = ['index', 'login'];
  const pagesWithFooter = ['favorites', 'offer', '404'];

  const mainClassName = classNames('page-main', pageMainClassName, {
    [`${pageMainClassName}-empty`]: isEmptyLayout,
  });

  const pageClassName = classNames('page', `page--${page}`, {
    [`page--${page}-empty`]: isEmptyLayout,
    'page--gray': grayPages.includes(page),
  });

  return (
    <div className={pageClassName}>
      <Header authorizationStatus={authorizationStatus} user={user} />
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
