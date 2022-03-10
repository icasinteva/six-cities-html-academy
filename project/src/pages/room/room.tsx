import Map from '../../components/map/map';
import NearPlaces from '../../components/near-places/near-places';
import PropertyInfo from '../../components/property-info/property-info';
import PropertyReviewsList from '../../components/property-reviews-list/property-reviews-list';
import ReviewsForm from '../../components/reviews-form/reviews-form';
import { useParams } from 'react-router-dom';
import PropertyGallery from '../../components/property-gallery/property-gallery';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchOffer, fetchNearByHotels, fetchComments } from '../../store/api-actions';

type RoomProps = {
  userName: string;
};

function Room({ userName }: RoomProps) {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchOffer(id));
      dispatch(fetchComments(id));
      dispatch(fetchNearByHotels(id));
    }
  }, [id, dispatch]);

  const { offer, nearByOffers, reviews } = useAppSelector((state) => state);

  return (
    offer && (
      <>
        <section className="property">
          <PropertyGallery images={offer.images} />
          <div className="property__container container">
            <div className="property__wrapper">
              <PropertyInfo offer={offer} />
              <section className="property__reviews reviews">
                <PropertyReviewsList reviews={reviews} />
                <ReviewsForm />
              </section>
            </div>
          </div>
          <Map className='property' city={offer.city} offers={nearByOffers} selectedPoint={null} resetable />
        </section>
        { !!nearByOffers.length && <NearPlaces offers={nearByOffers} />}
      </>
    )
  );
}
export default Room;
