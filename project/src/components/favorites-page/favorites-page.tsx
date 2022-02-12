import FavoritesList from '../favorites-list/favorites-list';
import FavoritesListEmpty from '../favorites-list/favorites-list-empty';
import Header from '../header/header';
import FooterLogo from '../logo/footer-logo';

type FavoritesPageProps = {
    loggedIn: boolean,
    favoritesCount: number
}

function FavoritesPage({loggedIn, favoritesCount}: FavoritesPageProps) {
  return (
    <div className={`page ${!favoritesCount ? 'page--favorites-empty' : ''}`}>
      <Header loggedIn={loggedIn} />

      <main className={`page__main page__main--favorites ${!favoritesCount ? 'page__main--favorites-empty' : ''}`}>
        <div className="page__favorites-container container">
          {favoritesCount ?
            <FavoritesList /> :
            <FavoritesListEmpty />}
        </div>
      </main>
      <footer className="footer container">
        <FooterLogo />
      </footer>
    </div>
  );
}

export default FavoritesPage;
