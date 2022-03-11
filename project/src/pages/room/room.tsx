import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Map from '../../components/map/map';
import NearPlaces from '../../components/near-places/near-places';
import PropertyGallery from '../../components/property-gallery/property-gallery';
import PropertyInfo from '../../components/property-info/property-info';
import PropertyReviewsList from '../../components/property-reviews-list/property-reviews-list';
import ReviewsForm from '../../components/reviews-form/reviews-form';
import Spinner from '../../components/spinner';
import { AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchComments, fetchNearByHotels, fetchOffer } from '../../store/api-actions';
import NotFound from '../not-found/not-found';

function Room() {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchOffer(id));
      dispatch(fetchComments(id));
      dispatch(fetchNearByHotels(id));
    }
  }, [id, dispatch]);

  const { authorizationStatus, offer, nearByOffers, reviews, isOfferLoaded, isOfferNotFound } = useAppSelector((state) => state);

  if (isOfferNotFound) {
    return <NotFound />;
  }

  if (!isOfferLoaded) {
    return <Spinner speed={5} customText='Loading...' />;
  }

  return (
    offer && (
      <>
        <section className="property">
          <PropertyGallery images={offer.images} />
          <div className="property__container container">
            <div className="property__wrapper">
              <PropertyInfo offer={offer} />
              <section className="property__reviews reviews">
                {!!reviews.length && <PropertyReviewsList reviews={reviews} />}
                {authorizationStatus === AuthorizationStatus.Auth &&  <ReviewsForm hotelId={`${offer.id}`} />}
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
