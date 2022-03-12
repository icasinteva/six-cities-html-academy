import { FormEvent, useCallback, useRef } from 'react';
import FavoritesCityItem from '../../components/cities-list-item/favorites-cities-list-item';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { login } from '../../store/api-actions';

function Login() {
  const { city } = useAppSelector(({ OFFERS }) => OFFERS);
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

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
    <div className="page__login-container container">
      <section className="login">
        <h1 className="login__title">Sign in</h1>
        <form className="login__form form" action="" onSubmit={handleSubmit}>
          <div className="login__input-wrapper form__input-wrapper">
            <label className="visually-hidden">E-mail</label>
            <input ref={loginRef} className="login__input form__input" type="email" name="email" placeholder="Email" required={false} />
          </div>
          <div className="login__input-wrapper form__input-wrapper">
            <label className="visually-hidden">Password</label>
            <input ref={passwordRef} className="login__input form__input" type="password" name="password" placeholder="Password" required={false} />
          </div>
          <button className="login__submit form__submit button" type="submit">Sign in</button>
        </form>
      </section>
      <section className="locations locations--login locations--current">
        <FavoritesCityItem cityName={city.name} />
      </section>
    </div>
  );
}

export default Login;
