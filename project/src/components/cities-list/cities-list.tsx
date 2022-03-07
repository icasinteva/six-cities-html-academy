import { CITIES } from '../../const';
import { City } from '../../types/map';
import CitiesListItem from '../city-item/city-item';
type CitiesListProps = {
  currentCity: City,
  onClick: (city: string) => void
}

function CitiesList({ currentCity, onClick }: CitiesListProps) {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city, idx) => {
            const isActive = city.name === currentCity.name;

            return <CitiesListItem key={idx.toString()} cityName={city.name} isActive={isActive} onClick={onClick} />;
          })}
        </ul>
      </section>
    </div>
  );
}

export default CitiesList;
