import { LocationItem } from '../../const';
import LocationItemItemLink from './locations-item-link';

type FavoritesLocationItemItemProps = {
  location: LocationItem
}

function FavoritesLocationItemItem({ location }: FavoritesLocationItemItemProps) {
  return (
    <div className="locations__item">
      <LocationItemItemLink location={location} />
    </div>
  );
}

export default FavoritesLocationItemItem;
