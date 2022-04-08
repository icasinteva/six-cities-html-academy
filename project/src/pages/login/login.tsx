import { FormEvent, useCallback, useRef } from 'react';
import { Navigate } from 'react-router-dom';

import FavoritesCityItem from '../../components/cities-list-item/favorites-cities-list-item';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getRandomCity } from '../../services/helpers';
import { login } from '../../store/api-actions';

function Login() {
  const city = getRandomCity();
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const { authorizationStatus } = useAppSelector(({ USER }) => USER);

  const dispatch = useAppDispatch();

  const handleSubmit = useCallback((evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(login({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      }));
    }
  }, [dispatch]);

  return (
    authorizationStatus === AuthorizationStatus.NoAuth
      ?
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title" data-testid="login-title">Sign in</h1>
          <form className="login__form form" action="" onSubmit={handleSubmit}>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden" htmlFor="email">E-mail</label>
              <input ref={loginRef} className="login__input form__input" type="email" id="email" name="email" placeholder="Email" required data-testid="email" />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden" htmlFor="password">Password</label>
              <input ref={passwordRef} className="login__input form__input" type="password" id="password" name="password" placeholder="Password" minLength={2} required pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{2,}$" data-testid="password" />
            </div>
            <button className="login__submit form__submit button" type="submit">Sign in</button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <FavoritesCityItem cityName={city.name} />
        </section>
      </div>
      : <Navigate to={AppRoute.Main} />
  );
}

export default Login;
