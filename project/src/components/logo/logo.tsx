import { Link } from 'react-router-dom';

type LogoProps = {
  className: string,
  width: string,
  height: string,
}

function Logo({ className, width, height }: LogoProps) {
  const logoClassName = `${className}__logo`;
  const logoClassNameLink = `${logoClassName}-link`;

  return (
    <Link className={logoClassNameLink} to="/">
      <img className={logoClassName} src="img/logo.svg" width={width} height={height} alt="6 cities logo" />
    </Link>
  );
}

export default Logo;
