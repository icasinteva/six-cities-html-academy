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
        <ul className="locations__list tabs__list" data-testid="locations__list">
          {CITIES.map((city) => {
            const { name } = city;
            const isActive = name === currentCity.name;

            return <CitiesListItem key={name} cityName={name} isActive={isActive} />;
          })}
        </ul>
      </section>
    </div>
  );
}

export default CitiesList;
