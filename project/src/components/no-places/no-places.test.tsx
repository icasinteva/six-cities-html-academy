import { render, screen } from '@testing-library/react';
import NoPlaces from './no-places';
import { BASE_CITY } from '../../const';

describe('Component: NoPlaces', () => {
  it('should render correctly', () => {
    render(<NoPlaces city={BASE_CITY} />);

    const title = screen.getByText('No places to stay available');
    const subTitle = screen.getByText(`We could not find any property available at the moment in ${BASE_CITY.name}`);

    expect(title).toBeInTheDocument();
    expect(subTitle).toBeInTheDocument();
  });
});
