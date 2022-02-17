import classNames from 'classnames';
import LocationsItemLink from './locations-item-link';

type LocationsItemProps = {
  isActive?: boolean,
  key?: string,
  city: string
}

function LocationsItem({ key, city, isActive }: LocationsItemProps) {
  return (
    <li className="locations__item" key={key}>
      <LocationsItemLink className={classNames({
        'tabs__item': true,
        'tabs__item--active': isActive,
      })}
      city={city}
      />
    </li>
  );
}

export default LocationsItem;
