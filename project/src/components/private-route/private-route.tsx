import {Navigate} from 'react-router-dom';
import {RouteProps} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';

type PrivateRouteProps = RouteProps & {
  authorizationStatus: string;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps){
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.SignIn} />
  );
}

export default PrivateRoute;
