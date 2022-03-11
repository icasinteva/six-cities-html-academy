import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import SortingList from './sorting-list';

function Sorting() {
  const sortingType = useAppSelector((state) => state.sortingType);
  const [opened, setOpened] = useState(false);
  const handleListClose = () => {
    setOpened(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      &nbsp;
      <span className="places__sorting-type" tabIndex={0} onClick={() => setOpened(!opened)} >
        {sortingType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <SortingList isOpened={opened} selectedOption={sortingType} onSortingOptionClick={handleListClose} />
    </form>
  );
}

export default Sorting;
