import { Navigate } from 'react-router-dom';
import { RouteProps } from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import { useAppSelector } from '../../hooks';

type PrivateRouteProps = RouteProps & {
  children: JSX.Element;
}

function PrivateRoute({ children }: PrivateRouteProps) {
  const { authorizationStatus } = useAppSelector((state) => state);

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.SignIn} />
  );
}

export default PrivateRoute;
