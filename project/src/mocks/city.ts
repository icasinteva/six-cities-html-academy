import { LocationItem } from '../const';
import {City} from '../types/map';

export const CITY: City = {
  title: LocationItem.Amsterdam,
  lat: 52.3676,
  lng: 4.9041,
};

export const CITIES: City[] = [
  CITY,
  {
    title: LocationItem.Paris,
    lat: 48.8566,
    lng: 2.3522,
  },
];
