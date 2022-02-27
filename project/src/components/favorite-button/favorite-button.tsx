import classNames from 'classnames';

type FavoriteButtonProps = {
    className: string,
    favorite?: boolean,
    size: {
        width: number,
        height: number
    }
}

function FavoriteButton({ className, favorite, size }: FavoriteButtonProps) {
  const {width, height} = size;
  const classNameFavorite = `${className}__bookmark-button--active`;
  const bookmarkClassName = classNames(`${className}__bookmark-button`, 'button', {
    [classNameFavorite]: favorite,
  });

  return (
    <button className={bookmarkClassName} type="button">
      <svg className={`${className}__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>);
}

export default FavoriteButton;
