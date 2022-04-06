import { render, screen } from '@testing-library/react';
import Sorting from './sorting';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { SortingType } from '../../const';
import React from 'react';
const mockStore = configureMockStore();
const store = mockStore({
  OFFERS: {
    sortingType: SortingType.Popular,
  },
});

describe('Component: Sorting', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <Sorting />
      </Provider>);

    expect(container).toMatchSnapshot();
  });

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
