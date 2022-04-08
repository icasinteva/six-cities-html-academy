import { Navigate } from 'react-router-dom';
import { RouteProps } from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import { useAppSelector } from '../../hooks';
import Spinner from '../spinner/spinner';

type PrivateRouteProps = RouteProps & {
  children: JSX.Element;
}

function PrivateRoute({ children }: PrivateRouteProps) {
  const { authorizationStatus } = useAppSelector(({ USER }) => USER);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return <Spinner />;
  }

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.SignIn} />
  );
}

export default PrivateRoute;
