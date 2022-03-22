import classNames from 'classnames';
import { useAppDispatch } from '../../hooks/index';
import { sortOffers } from '../../store/offers-data/offers-data';

type SortingListProps = {
  isOpened: boolean,
  selectedOption: string
  onSortingOptionClick: () => void
}

const sortingOptions = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

function SortingList({ isOpened, selectedOption, onSortingOptionClick }: SortingListProps) {
  const dispatch = useAppDispatch();
  const sortingListClassName = classNames('places__options places__options--custom', {
    'places__options--opened': isOpened,
  });

  return (
    <ul className={sortingListClassName}>
      {sortingOptions.map((option) => {
        const sortingOptionClassName = classNames('places__option', {
          'places__option--active': option === selectedOption,
        });
        return (
          <li key={option} className={sortingOptionClassName} tabIndex={0} onClick={(ev) => {
            if (ev.currentTarget.textContent) {
              dispatch(sortOffers(ev.currentTarget?.textContent));
            }

            onSortingOptionClick();
          }}
          >{option}
          </li>);
      })}
    </ul>
  );
}

export default SortingList;
