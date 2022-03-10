import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { getFavorites } from '../../helpers';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import NotFound from '../../pages/not-found/not-found';
import Room from '../../pages/room/room';
import { User } from '../../types/user';
import Layout from '../layout/layout';
import PrivateRoute from '../private-route/private-route';
import { Offer } from '../../types/offer';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { getOffers } from '../../store/action';

type AppProps = {
  authorizationStatus: AuthorizationStatus,
  offers: Offer[],
  user: User,
}

function App({ authorizationStatus, offers, user }: AppProps): JSX.Element {
  const dispatch = useAppDispatch();
  const city = useAppSelector((state) => state.city);

  useEffect(() => {
    dispatch(getOffers());
  }, [city, dispatch]);

  const offersByCity = useAppSelector((state) => state.offers);
  const favorites = getFavorites(offers);
  const isEmptyLayout = !offersByCity?.length || !Object.keys(favorites).length;
  const [isEmpty, setEmpty] = useState<boolean>(isEmptyLayout);
  const handleLayoutChange = (val: boolean) => {
    setEmpty(val);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Layout authorizationStatus={authorizationStatus} isEmptyLayout={isEmpty} user={user} />}>
          <Route index element={<Main offers={offersByCity} currentCity={city} onLayoutChange={handleLayoutChange} />} />
          <Route path={AppRoute.Favorites} element={<PrivateRoute authorizationStatus={authorizationStatus}><Favorites favorites={favorites} /></PrivateRoute>} />
          <Route path={AppRoute.Room} element={<Room userName={user.name} />} />
          <Route path={AppRoute.SignIn} element={authorizationStatus === AuthorizationStatus.NoAuth ? <Login cityName={city.name} /> : <Navigate to={AppRoute.Main} />} />
          <Route element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );}

export default App;
