import CitiesListItemLink from '../cities-list-item-link/cities-list-item-link';

type FavoritesCityListItemProps = {
  cityName: string
}

function FavoritesCityListItem({ cityName }: FavoritesCityListItemProps) {
  return (
    <div className="locations__item">
      <CitiesListItemLink cityName={cityName} />
    </div>
  );
}

export default FavoritesCityListItem;
