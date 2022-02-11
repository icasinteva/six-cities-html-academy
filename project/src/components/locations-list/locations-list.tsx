import LocationsItem from '../locations-item/locations-item';

type LocationsListProps = {
  cities: string[],
  activeCity: string
}

function LocationsList({ cities, activeCity }: LocationsListProps) {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => {
            let isActive = false;

            if (city === activeCity) {
              isActive = true;
            }

            return <LocationsItem isActive={isActive} key={city} city={city} />;
          })}
        </ul>
      </section>
    </div>
  );
}

export default LocationsList;
