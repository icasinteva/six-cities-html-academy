import { useRef, useEffect, useState } from 'react';
import {Icon, Marker} from 'leaflet';
import useMap from '../../hooks/useMap';
import {City, Point} from '../../types/map';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import 'leaflet/dist/leaflet.css';
import { CITY } from '../../mocks/city';
import { Offers } from '../../types/offer';

type MapProps = {
  location: City;
  offers: Offers,
  selectedPoint: Point | null;
  className: string
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map(props: MapProps): JSX.Element {
  const { location, offers, selectedPoint, className } = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, location);
  const [currentLocation, setCurrentLocation] = useState(CITY.title);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        new Marker(offer)
          .setIcon(
            selectedPoint && offer.id === selectedPoint.title
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(map);
      });

      if (location.title !== currentLocation) {
        map.setView(location);
        setCurrentLocation(location.title);
      }
    }
  }, [map, offers, selectedPoint, location]);

  return <section className={`${className}__map map`} style={{ height: '500px' }} ref={mapRef}></section>;
}

export default Map;
