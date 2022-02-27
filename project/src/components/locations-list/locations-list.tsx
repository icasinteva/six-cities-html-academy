import { LocationItem, LocationItems } from '../../const';
import LocationItemItem from '../locations-item/locations-item';
type LocationItemListProps = {
  activeLocation: LocationItem,
  onClick: (location: LocationItem) => void
}

function LocationItemList({ activeLocation, onClick }: LocationItemListProps) {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {LocationItems.map((location) => {
            const isActive = location === activeLocation;

            return <LocationItemItem key={location} location={location} isActive={isActive} onClick={onClick} />;
          })}
        </ul>
      </section>
    </div>
  );
}

export default LocationItemList;
