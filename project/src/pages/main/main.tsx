import City from '../../components/city/city';
import LocationsList from '../../components/locations-list/locations-list';

type MainProps = {
  activeCity: string,
  cities: string[],
  placesCount: number
}

function Main({ cities, placesCount, activeCity }: MainProps) {
  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <LocationsList cities={cities} activeCity={activeCity} />
      <City placesCount={placesCount} city={activeCity} />
    </>
  );
}

export default Main;
