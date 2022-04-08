import React from 'react';

import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';

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
  it('should call setState with false when user clicked any sorting option', () => {
    const setStateMock = jest.fn();
    const useStateMock: any = (useState: any) => [useState, setStateMock];

    jest.spyOn(React, 'useState').mockImplementation(useStateMock);

    render(
      <Provider store={store}>
        <SortingList isOpened={false} selectedOption={SortingType.Popular} onSortingOptionClick={() => {
          setStateMock(false);
        }}
        />
      </Provider>);

    const sortingTypeToggle = screen.getByTestId('sorting-option-Price: low to high');

    sortingTypeToggle.click();

    expect(setStateMock).toHaveBeenCalledTimes(1);
    expect(setStateMock).toHaveBeenCalledWith(false);
  });
});
