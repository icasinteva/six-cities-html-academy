import MainPage from '../main-page/main-page';

type AppProps = {
  loggedIn: boolean,
  cities: string[],
  placesCount: number,
  activeCity: string
}

function App({ loggedIn, cities, placesCount, activeCity }: AppProps): JSX.Element {
  return <MainPage loggedIn={loggedIn} cities={cities} placesCount={placesCount} activeCity={activeCity} />;
}

export default App;
