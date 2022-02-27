import { Link } from 'react-router-dom';
import { AppRoute, LocationItem } from '../../const';

type LocationItemItemLinkProps = {
    className?: string,
    location: LocationItem,
    onClick?: (location: LocationItem) => void,
}

function LocationItemItemLink({ className, location, onClick }: LocationItemItemLinkProps) {
  return (
    <Link className={`locations__item-link ${className}`} to={AppRoute.Main} onClick={()=> onClick?.(location)}>
      <span>{location}</span>
    </Link>
  );
}

export default LocationItemItemLink;
