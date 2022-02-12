type SortingListProps = {
    selectedOption: string
}

const sortingOptions = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

function SortingList({selectedOption}: SortingListProps) {
  return (
    <ul className="places__options places__options--custom places__options--opened">
      {sortingOptions.map((option) => <li key='' className={`places__option ${option === selectedOption ? ' places__option--active' : ''}`} tabIndex={0}>{option}</li>)}
    </ul>
  );
}

export default SortingList;
