
import Places from '../places/places';
import NoPlaces from '../no-places/no-places';

type CityProps = {
  city: string,
  placesCount: number
}

function City({ city, placesCount }: CityProps) {
  return (
    <div className="cities">
      <div className={`cities__places-container ${!placesCount ? 'cities__places-container--empty' : ''} container`}>
        {placesCount ?
          <Places city={city} placesCount={placesCount} /> :
          <NoPlaces />}
      </div>
    </div>);
}

export default City;
