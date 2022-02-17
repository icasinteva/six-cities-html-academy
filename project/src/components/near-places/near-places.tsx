import PlaceCard from '../place-card/place-card';

const info = {
  id: '3792ywigfeurt47-near',
  premium: true,
  favorite: true,
  type: 'Apartment',
  rating: 4,
  price: 120,
  title: 'Beautiful & luxurious apartment at great location',
  imageSrc: 'img/apartment-01.jpg',
};

function NearPlaces() {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          <PlaceCard className='near-places' info={info} />
          <PlaceCard className='near-places' info={{...info, premium: false, favorite: false}} />
          <PlaceCard className='near-places' info={info} />
        </div>
      </section>
    </div>
  );
}
export default NearPlaces;
