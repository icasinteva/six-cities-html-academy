import { render, screen } from '@testing-library/react';

import { makeFakeOffer } from '../../utils/mocks';
import PropertyGoods from './property-goods';

describe('Component: PropertyGoods', () => {
  it('should render correctly', () => {
    const { goods } = makeFakeOffer();

    render(<PropertyGoods goods={goods} />);

    expect(screen.getByText('What\'s inside')).toBeInTheDocument();
    expect(screen.getAllByTestId('property__inside-item')).toHaveLength(goods.length);
  });
});
