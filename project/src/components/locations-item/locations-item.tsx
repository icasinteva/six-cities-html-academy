import LocationsItemLink from './locations-item-link';

type LocationsItemProps = {
  isActive?: boolean,
  key?: string,
  city: string
}

function LocationsItem({ key, city, isActive }: LocationsItemProps) {
  const activeTabsItemClassName = isActive ? 'tabs__item--active' : '';
  const tabsItemsClassName = `tabs__item ${activeTabsItemClassName}`;

  return (
    <li className="locations__item" key={key}>
      <LocationsItemLink className={tabsItemsClassName} city={city} />
    </li>
  );
}

export default LocationsItem;
