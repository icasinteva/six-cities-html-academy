import classNames from 'classnames';
import { LocationItem } from '../../const';
import LocationItemItemLink from './locations-item-link';

type LocationItemItemProps = {
  isActive?: boolean,
  location: LocationItem,
  onClick: (location: LocationItem) => void,
}

function LocationItemItem({location, onClick, isActive }: LocationItemItemProps) {
  return (
    <li className="locations__item">
      <LocationItemItemLink className={classNames({
        'tabs__item': true,
        'tabs__item--active': isActive,
      })}
      location={location}
      onClick={onClick}
      />
    </li>
  );
}

export default LocationItemItem;
