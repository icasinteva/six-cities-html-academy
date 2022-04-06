import { render, screen } from '@testing-library/react';
import { makeFakeOffer } from '../../utils/mocks';
import HostView from './host-view';

describe('Component: Logo', () => {
  test('should render correctly', () => {
    const fakeOffer = makeFakeOffer();
    const { host, description } = fakeOffer;

    render(
      <HostView host={host} description={description} />,
    );

    expect(screen.getByText('Meet the host')).toBeInTheDocument();
    expect(screen.getByText(host.name)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });
});
