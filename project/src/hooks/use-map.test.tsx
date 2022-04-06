import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { mocked } from 'jest-mock';
import { useRef } from 'react';
import Map from '../components/map/map';
import { BASE_CITY } from '../const';
import { makeFakeOffers } from '../utils/mocks';
import useMap from './use-map';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useRef: jest.fn(),
}));

const useMockRef = mocked(useRef);

xdescribe('Hook: useMap', () => {
  it('should return map', () => {
    const mapRef = { current: null };

    Object.defineProperty(mapRef, 'current', {
      set(_current) {
        this._current = _current;
      },
      get() {
        return this._current;
      },
    });

    useMockRef.mockReturnValueOnce(mapRef);

    const { result } = renderHook(() => useMap(mapRef, BASE_CITY.location));

    render(<Map className="cities" offers={makeFakeOffers(10)} city={BASE_CITY} selectedPoint={null} />);

    const map = result.current;

    expect(map).toBe(null);
  });
});
