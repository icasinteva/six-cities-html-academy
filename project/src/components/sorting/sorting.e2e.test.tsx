import React from 'react';

import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';

import { Provider } from 'react-redux';

import { SortingType } from '../../const';
import Sorting from './sorting';

const mockStore = configureMockStore();
const store = mockStore({
  OFFERS: {
    sortingType: SortingType.Popular,
  },
});

describe('Component: Sorting', () => {
  it('should call setState with true when user clicked Sorting', () => {
    const setStateMock = jest.fn();
    const useStateMock: any = (useState: any) => [useState, setStateMock];

    jest.spyOn(React, 'useState').mockImplementation(useStateMock);

    render(
      <Provider store={store}>
        <Sorting />
      </Provider>);

    const sortingTypeToggle = screen.getByTestId('sorting-type');

    sortingTypeToggle.click();

    expect(setStateMock).toHaveBeenCalledTimes(1);
    expect(setStateMock).toHaveBeenCalledWith(true);
  });
});
