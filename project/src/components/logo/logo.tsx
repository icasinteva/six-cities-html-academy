import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type LogoProps = {
  className: string,
  width: string,
  height: string,
}

function Logo({ className, width, height }: LogoProps) {
  return (
    <Link className={`${className}__logo`} to={AppRoute.Main} data-testid={`${className}__logo`}>
      <img className={`${className}__logo-link`} src="img/logo.svg" width={width} height={height} alt="6 cities logo" />
    </Link>
  );
}

export default Logo;
