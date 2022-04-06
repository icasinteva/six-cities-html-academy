import { render, screen } from '@testing-library/react';
import PropertyGallery from '../components/property-gallery/property-gallery';
import { GALLERY_IMAGES_COUNT } from '../const';
import { makeFakeOffer } from '../utils/mocks';

describe('Component: PropertyGallery', () => {
  it('should render correctly', () => {
    const { images } = makeFakeOffer();

    render(<PropertyGallery images={images} />);
    expect(screen.getAllByTestId('property__image-wrapper')).toHaveLength(GALLERY_IMAGES_COUNT);
  });
});
