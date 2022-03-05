import { Offers } from '../../types/offer';
import OffersList from '../offers-list/offers-list';

type NearPlacesProps = {
  offers: Offers
}

function NearPlaces({offers}: NearPlacesProps) {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <OffersList offers={offers} className='near-places' />
      </section>
    </div>
  );
}
export default NearPlaces;
