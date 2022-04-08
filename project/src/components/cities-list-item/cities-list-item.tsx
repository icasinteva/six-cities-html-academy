import classNames from 'classnames';

import CitiesListItemLink from '../cities-list-item-link/cities-list-item-link';

type CitiesListItemProps = {
  isActive?: boolean,
  cityName: string,
}

function CitiesListItem({ cityName, isActive }: CitiesListItemProps) {
  const dataTestId = isActive ? 'tabs__item--active' : 'tabs__item';
  const tabClassName = classNames({
    'tabs__item': true,
    'tabs__item--active': isActive,
  });

  return (
    <li className="locations__item" data-testid={dataTestId}>
      <CitiesListItemLink className={tabClassName} cityName={cityName}/>
    </li>
  );
}

export default CitiesListItem;
