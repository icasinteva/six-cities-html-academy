import { renderHook } from '@testing-library/react-hooks';

import { mocked } from 'jest-mock';
import { useRef } from 'react';

import { BASE_CITY } from '../const';
import { MapRef } from '../types/map';
import useMap from './use-map';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useRef: jest.fn(),
}));

const useMockRef = mocked(useRef);

describe('Hook: useMap', () => {
  it('should return map', () => {
    const mapRef: MapRef = { current: null };

    useMockRef.mockReturnValueOnce(mapRef);

    const { result } = renderHook(() => useMap(mapRef, BASE_CITY.location));

    const map = result.current;

    expect(map).toBe(null);
  });
});
