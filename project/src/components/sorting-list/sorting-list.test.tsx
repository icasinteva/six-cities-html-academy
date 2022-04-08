import { configureMockStore } from '@jedmao/redux-mock-store';
import { render } from '@testing-library/react';

import { Provider } from 'react-redux';

import { SortingType } from '../../const';
import SortingList from './sorting-list';

const mockStore = configureMockStore();
const store = mockStore({
  OFFERS: {
    sortingType: SortingType.Popular,
  },
});

describe('Component: SortingList', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <SortingList isOpened={false} selectedOption={SortingType.Popular} onSortingOptionClick={jest.fn()} />
      </Provider>);

    expect(container).toMatchSnapshot();
  });
});
