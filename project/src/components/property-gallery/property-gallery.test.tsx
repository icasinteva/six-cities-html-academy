import { render, screen } from '@testing-library/react';

import { GALLERY_IMAGES_COUNT } from '../../const';
import { makeFakeOffer } from '../../utils/mocks';
import PropertyGallery from './property-gallery';

describe('Component: PropertyGallery', () => {
  it('should render correctly', () => {
    const { images } = makeFakeOffer();

    render(<PropertyGallery images={images} />);
    expect(screen.getAllByTestId('property__image-wrapper')).toHaveLength(GALLERY_IMAGES_COUNT);
  });
});
