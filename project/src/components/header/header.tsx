import { Link, useLocation } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import HeaderLogo from '../logo/header-logo';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logout } from '../../store/api-actions';


function Header() {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const isSignInPage = pathname === AppRoute.SignIn;
  const { authorizationStatus, user } = useAppSelector(({ USER }) => USER);
  const isAuthorised = authorizationStatus === AuthorizationStatus.Auth;
  const { avatarUrl, email } = user || {};

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
                <Link className="header__nav-link header__nav-link--profile" to={isAuthorised ? AppRoute.Favorites : AppRoute.SignIn}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                    {isAuthorised && avatarUrl && <img className="user__avatar" src={avatarUrl} alt='Avatar' />}
                  </div>
                  {isAuthorised ? <span className="header__user-name user__name">{email || 'login@domain.com'}</span> : <span className="header__login">Sign in</span>}
                </Link>
              </li>
              {isAuthorised &&
                <li className="header__nav-item">
                  <Link className="header__nav-link" to='#' onClick={() => {
                    dispatch(logout());
                  }}
                  >
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
