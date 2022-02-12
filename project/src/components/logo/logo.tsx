import './style.css';

type LogoProps = {
  className: string,
  width: string,
  height: string,
}

function Logo({ className, width, height }: LogoProps) {
  const logoClassName = `${className}__logo`;
  const logoClassNameLink = `${logoClassName}-link`;

  return (
    <a className={logoClassNameLink} href="main.html">
      <img className={logoClassName} src="img/logo.svg" width={width} height={height} alt="6 cities logo" />
    </a>
  );
}

export default Logo;
