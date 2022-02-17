import { Link } from 'react-router-dom';

type LocationsItemLinkProps = {
    className?: string,
    city: string,
}

function LocationsItemLink({ className, city }: LocationsItemLinkProps) {
  return (
    <Link className={`locations__item-link ${className}`} to='/'>
      <span>{city}</span>
    </Link>
  );
}

export default LocationsItemLink;
