import { GALLERY_IMAGES_COUNT } from '../../const';

type PropertyGalleryProps = {
    images: string[]
}

function PropertyGallery({ images }: PropertyGalleryProps) {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images.slice(0, GALLERY_IMAGES_COUNT).map((image, idx) =>
          (
            <div key={idx.toString()} className="property__image-wrapper" data-testid='property__image-wrapper'>
              <img className="property__image" src={`${image}`} alt='Property' />
            </div>
          ))}
      </div>
    </div>);
}

export default PropertyGallery;
