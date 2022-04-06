import { render, screen } from '@testing-library/react';
import Map from './map';
import { BASE_CITY } from '../../const';
import { makeFakeOffers } from '../../utils/mocks';

describe('Component: Map', () => {
  it('should render correctly', () => {
    const offersCount = 10;
    const fakeOffers = makeFakeOffers(offersCount);

    render(<Map className="cities" offers={fakeOffers} city={BASE_CITY} selectedPoint={null} />);

    const markers = screen.getAllByRole('img');

    expect(screen.getByTestId('cities__map')).toBeInTheDocument();
    expect(markers).toHaveLength(offersCount);
  });
});
