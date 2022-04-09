import { Navigate } from 'react-router-dom';
import { RouteProps } from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import Spinner from '../spinner/spinner';

type PrivateRouteProps = RouteProps & {
  children: JSX.Element;
}

function PrivateRoute({ children }: PrivateRouteProps) {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

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
