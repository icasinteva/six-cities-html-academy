import classNames from 'classnames';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, PAGES } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { updateFavorites } from '../../store/api-actions';

type FavoriteButtonProps = {
  id: number,
  className: string,
  isFavorite: boolean,
  size: {
      width: number,
      height: number
  }
}

function FavoriteButton({ id, className, isFavorite, size }: FavoriteButtonProps) {
  const { width, height } = size;
  const classNameFavorite = `${className}__bookmark-button--active`;
  const bookmarkClassName = classNames(`${className}__bookmark-button`, 'button', {
    [classNameFavorite]: isFavorite,
  });
  const dispatch = useAppDispatch();
  const { authorizationStatus } = useAppSelector(({ USER }) => USER);
  const navigate = useNavigate();
  const location = useLocation();
  const [, pathname] = location.pathname.split('/');
  const page = PAGES[pathname];

  return (
    <button data-testid="favorite-button" className={bookmarkClassName} type="button" onClick={() => {
      if (authorizationStatus !== AuthorizationStatus.Auth) {
        navigate(AppRoute.SignIn);
      } else {
        dispatch(updateFavorites({ hotelId: `${id}`, isFavorite, page }));
      }
    }}
    >
      <svg className={`${className}__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>);
}

export default FavoriteButton;
