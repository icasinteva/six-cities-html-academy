import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { getFavorites, getOffersByLocation } from '../../helpers';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import NotFound from '../../pages/not-found/not-found';
import Room from '../../pages/room/room';
import { LocationOffers } from '../../types/offer';
import { User } from '../../types/user';
import Layout from '../layout/layout';
import PrivateRoute from '../private-route/private-route';
import {City} from '../../types/map';

type AppProps = {
  authorizationStatus: AuthorizationStatus,
  offers: LocationOffers,
  baseLocation: City
  user: User,
}

function App({ authorizationStatus, offers, baseLocation, user }: AppProps): JSX.Element {
  const locationOffers = getOffersByLocation(offers, baseLocation.title);
  const favorites = getFavorites();
  const isEmptyLayout = !locationOffers.length || !favorites.length;
  const [isEmpty, setEmpty] = useState<boolean>(isEmptyLayout);
  const handleLayoutChange = (val: boolean) => {
    setEmpty(val);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Layout authorizationStatus={authorizationStatus} isEmptyLayout={isEmpty} user={user} />}>
          <Route index element={<Main offers={offers} baseLocation={baseLocation} onLayoutChange={handleLayoutChange} />} />
          <Route path={AppRoute.Favorites} element={<PrivateRoute authorizationStatus={authorizationStatus}><Favorites favorites={favorites} /></PrivateRoute>} />
          <Route path={AppRoute.Room} element={<Room userName={user.userName} />} />
          <Route path={AppRoute.SignIn} element={authorizationStatus === AuthorizationStatus.NoAuth ? <Login location={baseLocation.title} /> : <Navigate to={AppRoute.Main} />} />
          <Route element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );}

export default App;
