import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import browserHistory from '../../browser-history';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import NotFound from '../../pages/not-found/not-found';
import Room from '../../pages/room/room';
import { checkAuthorization } from '../../store/api-actions';
import HistoryRouter from '../history-route';
import Layout from '../layout/layout';
import PrivateRoute from '../private-route/private-route';


function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuthorization());
  }, [dispatch]);


  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} element={<Layout />}>
          <Route index element={<Main />} />
          <Route path={AppRoute.Favorites} element={<PrivateRoute><Favorites /></PrivateRoute>} />
          <Route path={AppRoute.Room} element={<Room />} />
          <Route path={AppRoute.SignIn} element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HistoryRouter>
  );}

export default App;
