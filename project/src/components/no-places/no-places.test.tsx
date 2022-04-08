import { render } from '@testing-library/react';

import { BASE_CITY } from '../../const';
import NoPlaces from './no-places';

describe('Component: NoPlaces', () => {
  it('should render correctly', () => {
    const { container } = render(<NoPlaces city={BASE_CITY} />);

    expect(container).toMatchSnapshot();
  });
});
