import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { AppRoute, BASE_CITY, CITIES } from '../../const';
import { useAppDispatch } from '../../hooks';
import { fetchOffers } from '../../store/api-actions';
import { setCity } from '../../store/offers-data/offers-data';

type CitiesListItemLinkProps = {
  className?: string,
  cityName: string,
}

function CitiesListItemLink({ className, cityName }: CitiesListItemLinkProps) {
  const dispatch = useAppDispatch();
  const selectedCity = CITIES.find((city) => city.name === cityName) || BASE_CITY;
  const isActive = className?.includes('active');
  const linkClassName = className ? classNames('locations__item-link', {
    [className]: className,
  }) : 'locations__item-link';

  const handleItemClick = () => {
    if (!isActive) {
      dispatch(setCity(selectedCity));
      dispatch(fetchOffers());
    }
  };

  return (
    <Link className={linkClassName} to={AppRoute.Main} onClick={handleItemClick}>
      <span>{cityName}</span>
    </Link>
  );
}

export default CitiesListItemLink;
