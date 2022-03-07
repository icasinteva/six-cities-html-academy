import classNames from 'classnames';
import CitiesListItemLink from './city-item-link';

type CitiesListItemProps = {
  isActive?: boolean,
  cityName: string,
  onClick: (cityName: string) => void,
}

function CitiesListItem({cityName, onClick, isActive }: CitiesListItemProps) {
  return (
    <li className="locations__item">
      <CitiesListItemLink className={classNames({
        'tabs__item': true,
        'tabs__item--active': isActive,
      })}
      cityName={cityName}
      onClick={onClick}
      />
    </li>
  );
}

export default CitiesListItem;
