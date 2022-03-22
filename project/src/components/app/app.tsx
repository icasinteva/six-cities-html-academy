import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import NotFound from '../../pages/not-found/not-found';
import Room from '../../pages/room/room';
import Layout from '../layout/layout';
import PrivateRoute from '../private-route/private-route';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path={AppRoute.Main} element={<Layout />}>
        <Route index element={<Main />} />
        <Route path={AppRoute.Favorites} element={<PrivateRoute><Favorites /></PrivateRoute>} />
        <Route path={AppRoute.Room} element={<Room />} />
        <Route path={AppRoute.SignIn} element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );}

export default App;
