import { useEffect, useRef, useState } from 'react';
import { Icon, Layer, Marker } from 'leaflet';

import { BASE_CITY, UrlMarker } from '../../const';
import useMap from '../../hooks/use-map';
import { City, Location } from '../../types/map';
import { Offer } from '../../types/offer';

import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City;
  offers: Offer[],
  selectedPoint: Location | null;
  className: string
};

const defaultCustomIcon = new Icon({
  iconUrl: UrlMarker.Default,
  iconSize: [27, 39],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: UrlMarker.Current,
  iconSize: [27, 39],
  iconAnchor: [20, 40],
});

function Map({ city, offers, selectedPoint, className }: MapProps): JSX.Element {
  const { location, name } = city;
  const mapRef = useRef(null);
  const map = useMap(mapRef, location);
  const [currentCityName, setCurrentCityName] = useState(BASE_CITY.name);

  useEffect(() => {
    if (map) {
      map.eachLayer((layer: Layer) => {
        if (layer && layer.getAttribution && !layer.getAttribution()) {
          layer.remove();
        }
      });

      offers.forEach((offer) => {
        const { latitude, longitude } = offer.location;
        const marker = new Marker({
          lat: latitude,
          lng: longitude,
        });

        marker.setIcon(
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

  return <section className={`${className}__map map`} data-testid={`${className}__map`} ref={mapRef}></section>;
}

export default Map;
