import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type CitiesListItemLinkProps = {
    className?: string,
    cityName: string,
    onClick?: (cityName: string) => void,
}

function CitiesListItemLink({ className, cityName, onClick }: CitiesListItemLinkProps) {
  return (
    <Link className={`locations__item-link ${className}`} to={AppRoute.Main} onClick={()=> onClick?.(cityName)}>
      <span>{cityName}</span>
    </Link>
  );
}

export default CitiesListItemLink;
