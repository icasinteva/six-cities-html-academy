import HeaderLogo from '../logo/header-logo';

type HeaderProps = {
    logInPage?: boolean,
    loggedIn?: boolean
}

function Header({loggedIn, logInPage}: HeaderProps) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <HeaderLogo />
          </div>
          {logInPage ||
                      <nav className="header__nav">
                        <ul className="header__nav-list">
                          <li className="header__nav-item user">
                            <a className="header__nav-link header__nav-link--profile" href="#">
                              <div className="header__avatar-wrapper user__avatar-wrapper">
                              </div>
                              {loggedIn && <span className="header__user-name user__name">Oliver.conner@gmail.com</span>}
                            </a>
                          </li>
                          <li className="header__nav-item">
                            <a className="header__nav-link" href="#">
                              <span className="header__signout">Sign {loggedIn ? 'out' : 'in' }</span>
                            </a>
                          </li>
                        </ul>
                      </nav>}
        </div>
      </div>
    </header>
  );
}

export default Header;
