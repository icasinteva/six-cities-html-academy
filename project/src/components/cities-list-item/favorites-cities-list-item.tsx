import CitiesListItemLink from '../cities-list-item-link/cities-list-item-link';

type FavoritesCityItemProps = {
  cityName: string
}

function FavoritesCityItem({ cityName }: FavoritesCityItemProps) {
  return (
    <div className="locations__item">
      <CitiesListItemLink cityName={cityName} />
    </div>
  );
}

export default FavoritesCityItem;
