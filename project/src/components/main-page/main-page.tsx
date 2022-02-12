import City from '../city/city';
import Header from '../header/header';
import LocationsList from '../locations-list/locations-list';

type MainPageProps = {
  activeCity: string,
  loggedIn: boolean,
  cities: string[],
  placesCount: number
}

function MainPage({ loggedIn, cities, placesCount, activeCity }: MainPageProps) {
  return (
    <div className="page page--gray page--main">
      <Header loggedIn={loggedIn} />

      <main className={`page__main page__main--index ${!placesCount ? 'page__main--index-empty': ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <LocationsList cities={cities} activeCity={activeCity} />
        <City placesCount={placesCount} city={activeCity} />
      </main>
    </div>);
}

export default MainPage;
