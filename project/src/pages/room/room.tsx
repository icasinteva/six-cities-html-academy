import Map from '../../components/map/map';
import NearPlaces from '../../components/near-places/near-places';
import PropertyInfo from '../../components/property-info/property-info';
import PropertyReviewsList from '../../components/property-reviews-list/property-reviews-list';
import ReviewsForm from '../../components/reviews-form/reviews-form';
import { offers } from '../../mocks/offers';
import { useParams } from 'react-router-dom';
import PropertyGallery from '../../components/property-gallery/property-gallery';
import { reviews } from '../../mocks/reviews';
import { useMemo } from 'react';

type RoomProps = {
  userName: string,
}

function Room({ userName }: RoomProps) {
  const { id } = useParams();
  const [defaultOffer] = offers;
  const currentOffer = offers?.find((offer) => `${offer.id}` === id) ?? defaultOffer;
  const nearOffers = useMemo(() => offers?.filter((offer) => offer.city === currentOffer.city && `${offer.id}` !== id), [id]);

  return (
    <>
      <section className="property">
        <PropertyGallery images={currentOffer.images} />
        <div className="property__container container">
          <div className="property__wrapper">
            <PropertyInfo offer={currentOffer} />
            <section className="property__reviews reviews">
              <PropertyReviewsList reviews={reviews} />
              <ReviewsForm />
            </section>
          </div>
        </div>
        <Map className='property' city={currentOffer.city} offers={nearOffers} selectedPoint={null} resetable />
      </section>
      {nearOffers.length ? <NearPlaces offers={nearOffers} /> : null}
    </>
  );
}
export default Room;
