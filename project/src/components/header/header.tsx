import { Link, useLocation } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import HeaderLogo from '../logo/header-logo';

type HeaderProps = {
    authorizationStatus?: string
}

function Header({ authorizationStatus }: HeaderProps) {
  const { pathname } = useLocation();
  const isSignInPage = pathname === '/login';
  const isAuthorised = authorizationStatus === AuthorizationStatus.Auth;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <HeaderLogo />
          </div>
          {isSignInPage ||
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={isAuthorised ? '' : AppRoute.SignIn}>
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  {isAuthorised ? <span className="header__user-name user__name">Oliver.conner@gmail.com</span> : <span className="header__login">Sign in</span>}
                </Link>
              </li>
              {isAuthorised &&
                <li className="header__nav-item">
                  <Link className="header__nav-link" to={AppRoute.Main}>
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>}
            </ul>
          </nav>}
        </div>
      </div>
    </header>
  );
}

export default Header;
