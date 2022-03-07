import { useRef, useEffect, useState } from 'react';
import {Icon, Marker} from 'leaflet';
import useMap from '../../hooks/useMap';
import {City, Location} from '../../types/map';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT, BASE_CITY} from '../../const';
import 'leaflet/dist/leaflet.css';
import { Offers } from '../../types/offer';

type MapProps = {
  resetable?: boolean,
  city: City;
  offers: Offers,
  selectedPoint: Location | null;
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

function Map({ city, offers, selectedPoint, className, resetable }: MapProps): JSX.Element {
  const { location, name } = city;
  const mapRef = useRef(null);
  const map = useMap(mapRef, location);
  const [currentCityName, setCurrentCityName] = useState(BASE_CITY.name);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const { latitude, longitude } = offer.location;

        new Marker({
          lat: latitude,
          lng: longitude,
        })
          .setIcon(
            selectedPoint && latitude === selectedPoint.latitude && longitude === selectedPoint.longitude
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(map);
      });

      if (name !== currentCityName) {
        const { latitude, longitude } = location;

        map.setView({
          lat: latitude,
          lng: longitude,
        });

        setCurrentCityName(name);
      }
    }
  }, [currentCityName, location, map, name, offers, selectedPoint]);

  return <section className={`${className}__map map`} style={{ height: '500px' }} ref={mapRef}></section>;
}

export default Map;
