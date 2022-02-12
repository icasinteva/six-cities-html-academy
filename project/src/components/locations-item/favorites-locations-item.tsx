import LocationsItemLink from './locations-item-link';

type FavoritesLocationsItemProps = {
  city: string
}

function FavoritesLocationsItem({ city }: FavoritesLocationsItemProps) {
  return (
    <div className="locations__item">
      <LocationsItemLink city={city} />
    </div>
  );
}

export default FavoritesLocationsItem;
