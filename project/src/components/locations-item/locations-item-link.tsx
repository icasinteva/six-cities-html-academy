type LocationsItemLinkProps = {
    className?: string,
    city: string,
}

function LocationsItemLink({ className, city }: LocationsItemLinkProps) {
  return (
    <a className={`locations__item-link ${className}`} href="#">
      <span>{city}</span>
    </a>
  );
}

export default LocationsItemLink;
