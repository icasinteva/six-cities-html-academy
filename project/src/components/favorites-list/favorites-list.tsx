import PlaceCard from '../place-card/place-card';
import FavoritesLocationsItem from '../locations-item/favorites-locations-item';

const info = {
  id: '3792ywigfeurt47',
  premium: true,
  favorite: true,
  type: 'Apartment',
  rating: 4,
  price: 120,
  title: 'Beautiful & luxurious apartment at great location',
  imageSrc: 'img/apartment-01.jpg',
};

function FavoritesList() {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <FavoritesLocationsItem city='Amsterdam' />
          </div>
          <div className="favorites__places">
            <PlaceCard className='favorites' info={info} />
            <PlaceCard className='favorites' info={info} />
          </div>
        </li>

        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <FavoritesLocationsItem city='Cologne' />
          </div>
          <div className="favorites__places">
            <PlaceCard className='favorites' info={info} />
          </div>
        </li>
      </ul>
    </section>
  );
}

export default FavoritesList;
