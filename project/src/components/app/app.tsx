import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import browserHistory from '../../browser-history';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import NotFound from '../../pages/not-found/not-found';
import Room from '../../pages/room/room';
import { checkAuthorization, fetchOffers } from '../../store/api-actions';
import HistoryRouter from '../history-route';
import Layout from '../layout/layout';
import PrivateRoute from '../private-route/private-route';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const { city } = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(checkAuthorization());
    dispatch(fetchOffers());
  }, [city, dispatch]);

  const offersByCity = useAppSelector((state) => state.offers);

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} element={<Layout />}>
          <Route index element={<Main offers={offersByCity} currentCity={city} />} />
          <Route path={AppRoute.Favorites} element={<PrivateRoute><Favorites /></PrivateRoute>} />
          <Route path={AppRoute.Room} element={<Room />} />
          <Route path={AppRoute.SignIn} element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HistoryRouter>
  );}

export default App;
