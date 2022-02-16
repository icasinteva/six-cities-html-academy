import { Outlet, useLocation } from 'react-router-dom';
import Header from '../header/header';
import FooterLogo from '../logo/footer-logo';

type LayoutProps = {
  isEmptyLayout: boolean,
  authorizationStatus: string,
}

type pagesType = {
  [key:string]: string
}

const pages: pagesType = {
  '': 'index',
  'login': 'login',
  'offer': 'property',
  'favorites': 'favorites',
};

function Layout({ authorizationStatus, isEmptyLayout }: LayoutProps) {
  const location = useLocation();
  const [, pathname] = location.pathname.split('/');
  const page = pages[pathname] || '404';
  const pageMainClassName = `page__main--${page}`;
  const grayPages = ['index', 'login'];
  const pagesWithFooter = ['favorites', 'offer', '404'];
  let additionalPageClassName = '';
  let additionalMainClassName = '';


  if (isEmptyLayout) {
    additionalPageClassName = `page--${page}-empty`;
    additionalMainClassName = `${pageMainClassName}-empty`;
  }

  if (grayPages.includes(page)) {
    additionalPageClassName += 'page--gray';
  }

  return (
    <div className={`page page--${page} ${additionalPageClassName}`}>
      <Header authorizationStatus={authorizationStatus} />
      <main className={`page__main ${pageMainClassName} ${additionalMainClassName
      }`}
      >
        <Outlet />
      </main>
      {pagesWithFooter.includes(page) &&
        <footer className="footer">
          <FooterLogo />
        </footer>}
    </div>);
}

export default Layout;
