import classNames from 'classnames';

type SortingListProps = {
  isOpened: boolean,
  selectedOption: string
}

const sortingOptions = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

function SortingList({ isOpened, selectedOption }: SortingListProps) {
  const sortingListClassName = classNames('places__options places__options--custom', {
    'places__options--opened': isOpened,
  });

  return (
    <ul className={sortingListClassName}>
      {sortingOptions.map((option) => <li key={option} className={`places__option ${option === selectedOption ? ' places__option--active' : ''}`} tabIndex={0}>{option}</li>)}
    </ul>
  );
}

export default SortingList;
