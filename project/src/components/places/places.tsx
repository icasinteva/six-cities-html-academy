import PlaceCard from '../place-card/place-card';
import Map from '../map/map';
import Sorting from '../sorting/sorting';

type PlacesProps = {
  city: string,
  placesCount: number
}

const info = {
  premium: true,
  favorite: true,
  type: 'Apartment',
  rating: 4,
  price: 120,
  title: 'Beautiful & luxurious apartment at great location',
  imageSrc: 'img/apartment-01.jpg',
};

function Places({city, placesCount}: PlacesProps) {
  return (
    <>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{placesCount} places to stay in {city}</b>
        <Sorting sortOption='Popular' />
        <div className="cities__places-list places__list tabs__content">
          <PlaceCard className={'cities'} info={info} />
          <PlaceCard className={'cities'} info={{...info, favorite: false}} />
          <PlaceCard className={'cities'} info={info} />
          <PlaceCard className={'cities'} info={info} />
          <PlaceCard className={'cities'} info={info} />
          <PlaceCard className={'cities'} info={info} />
        </div>
      </section>
      <div className="cities__right-section">
        <Map className='cities' />
      </div>
    </>
  );
}

export default Places;
