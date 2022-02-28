import Map from '../../components/map/map';
import NearPlaces from '../../components/near-places/near-places';
import PropertyInfo from '../../components/property-info/property-info';
import PropertyReviewsList from '../../components/property-reviews-list/property-reviews-list';
import ReviewsForm from '../../components/reviews-form/reviews-form';
import { offers } from '../../mocks/offers';
import { useParams } from 'react-router-dom';

type RoomProps = {
  userName: string,
}

function Room({userName}: RoomProps) {
  const { id } = useParams();
  const [defaultOffer] = offers;
  const info = offers.find((offer) => offer.id === id) ?? defaultOffer;

  return (
    <>
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
    </>
  );
}
export default Room;
