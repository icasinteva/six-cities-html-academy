import { CITIES } from '../../const';
import { City } from '../../types/map';
import CitiesListItem from '../cities-list-item/cities-list-item';
type CitiesListProps = {
  currentCity: City
}

function CitiesList({ currentCity }: CitiesListProps) {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => {
            const isActive = city.name === currentCity.name;

            return <CitiesListItem key={city.name} cityName={city.name} isActive={isActive} />;
          })}
        </ul>
      </section>
    </div>
  );
}

export default CitiesList;
