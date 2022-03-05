import { LocationItem } from '../const';

export type City = {
    title: LocationItem;
    lat: number;
    lng: number;
    zoom?: number;
  };

export type Point = {
    title: string;
    lat: number;
    lng: number;
  };

