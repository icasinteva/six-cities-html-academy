import Header from '../header/header';
import NearPlaces from '../near-places/near-places';
import PropertyInfo from '../property-info/property-info';
import PropertyReviewsList from '../property-reviews-list/property-reviews-list';
import ReviewsForm from '../reviews-form/reviews-form';
import Map from '../map/map';

type PropertyPageProps = {
  loggedIn: boolean,
}

type Review = {
  author: string,
  avatar: string,
  rating: number,
  text: string,
  date: {
    month: string,
    year: number
  }
}

type Host = {
  pro: boolean,
  name: string,
  avatar: string,
  description: string[],
}

type PropertyInfoType = {
  premium: boolean,
  favorite: boolean,
  facilities: string[],
  price: number,
  rating: number,
  type: string,
  host: Host,
  reviews: Review[]
}

const info: PropertyInfoType = {
  premium: true,
  favorite: false,
  facilities: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
  price: 120,
  rating: 4.8,
  type: 'Apartment',
  host: {
    pro: true,
    name: 'Angelina',
    avatar: 'img/avatar-angelina.jpg',
    description: ['A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.', 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.'],
  },
  reviews: [{
    author: 'Max',
    rating: 4,
    avatar: 'img/avatar-max.jpg',
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: {
      month: 'April',
      year: 2019,
    },
  }],
};

function PropertyPage({ loggedIn }: PropertyPageProps) {
  return (
    <div className="page">
      <Header loggedIn={loggedIn} />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              <div className="property__image-wrapper">
                <img className="property__image" src="img/room.jpg" alt="Photo studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-01.jpg" alt="Photo studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-02.jpg" alt="Photo studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-03.jpg" alt="Photo studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/studio-01.jpg" alt="Photo studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-01.jpg" alt="Photo studio" />
              </div>
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <PropertyInfo info={info} />
              <section className="property__reviews reviews">
                <PropertyReviewsList reviews={info.reviews} />
                <ReviewsForm />
              </section>
            </div>
          </div>
          <Map className='property' />
        </section>
        <NearPlaces />
      </main>
    </div>
  );
}
export default PropertyPage;
