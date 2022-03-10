import classNames from 'classnames';
import CitiesListItemLink from './cities-list-item-link';

type CitiesListItemProps = {
  isActive?: boolean,
  cityName: string,
}

function CitiesListItem({cityName, isActive }: CitiesListItemProps) {
  return (
    <li className="locations__item">
      <CitiesListItemLink className={classNames({
        'tabs__item': true,
        'tabs__item--active': isActive,
      })}
      cityName={cityName}
      />
    </li>
  );
}

export default CitiesListItem;
