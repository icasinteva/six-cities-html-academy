import { Link } from 'react-router-dom';
import { AppRoute, BASE_CITY, CITIES } from '../../const';
import { useAppDispatch } from '../../hooks';
import { setCity } from '../../store/action';

type CitiesListItemLinkProps = {
    className?: string,
    cityName: string,
}

function CitiesListItemLink({ className, cityName }: CitiesListItemLinkProps) {
  const dispatch = useAppDispatch();
  const selectedCity = CITIES.find((city) => city.name === cityName) || BASE_CITY;

  return (
    <Link className={`locations__item-link ${className}`} to={AppRoute.Main} onClick={()=> dispatch(setCity(selectedCity))}>
      <span>{cityName}</span>
    </Link>
  );
}

export default CitiesListItemLink;
