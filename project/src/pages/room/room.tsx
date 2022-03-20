import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Map from '../../components/map/map';
import NearPlaces from '../../components/near-places/near-places';
import NotFound from '../not-found/not-found';
import PropertyGallery from '../../components/property-gallery/property-gallery';
import PropertyInfo from '../../components/property-info/property-info';
import PropertyReviewsList from '../../components/property-reviews-list/property-reviews-list';
import ReviewsForm from '../../components/reviews-form/reviews-form';
import Spinner from '../../components/spinner';
import { AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useLoading } from '../../hooks/use-loading';
import { fetchOffer } from '../../store/api-actions';


function Room() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [loading, handleLoading] = useLoading();

  useEffect(() => {
    if (id) {
      dispatch(fetchOffer(id));
    }
  }, [id, dispatch]);

  const { authorizationStatus } = useAppSelector(({ USER }) => USER);

  const { nearByOffers } = useAppSelector(({ NEARBY_OFFERS }) => NEARBY_OFFERS);

  const { offer, reviews, loadingStatus } = useAppSelector(({ OFFER }) => OFFER);

  useEffect(() => {
    handleLoading(loadingStatus);
  }, [loadingStatus]);

  if (loading) {
    return <Spinner />;
  }

  if (!offer) {
    return <NotFound />;
  }

  const { city, images, location } = offer;

  return (
    <>
      <section className="property">
        <PropertyGallery images={images} />
        <div className="property__container container">
          <div className="property__wrapper">
            <PropertyInfo offer={offer} />
            <section className="property__reviews reviews">
              {!!reviews.length && <PropertyReviewsList reviews={reviews} />}
              {authorizationStatus === AuthorizationStatus.Auth && <ReviewsForm hotelId={`${id}`} />}
            </section>
          </div>
        </div>
        <Map className='property' city={city} offers={[...nearByOffers, offer]} selectedPoint={location} resetable />
      </section>
      { !!nearByOffers.length && <NearPlaces offers={nearByOffers} />}
    </>
  );
}
export default Room;
