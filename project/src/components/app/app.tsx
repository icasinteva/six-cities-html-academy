import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import NotFound from '../../pages/not-found/not-found';
import Room from '../../pages/room/room';
import Layout from '../layout/layout';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  authorizationStatus: string,
  favoritesCount: number,
  cities: string[],
  placesCount: number,
  activeCity: string
}

function App({ authorizationStatus, cities, favoritesCount, placesCount, activeCity }: AppProps): JSX.Element {
  const isEmptyLayout = !placesCount || !favoritesCount;
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout authorizationStatus={authorizationStatus} isEmptyLayout={isEmptyLayout} />}>
          <Route index element={<Main cities={cities} placesCount={placesCount} activeCity={activeCity} />} />
          <Route path={AppRoute.Favorites} element={<PrivateRoute authorizationStatus={authorizationStatus}><Favorites favoritesCount={favoritesCount} /></PrivateRoute>} />
          <Route path={AppRoute.Room} element={<Room />} />
          <Route path={AppRoute.SignIn} element={!authorizationStatus ? <Login city={activeCity} /> : <Navigate to={AppRoute.Main} />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );}

export default App;
