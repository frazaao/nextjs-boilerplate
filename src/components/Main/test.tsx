import { render, screen } from '@testing-library/react';
import Main from '.';

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />);
    expect(screen.getByText('NextJS Boilerplate')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the logo', () => {
    render(<Main />);
    expect(screen.getByAltText('Imagem de átomo')).toBeInTheDocument();
  });

  it('should render the color correctly', () => {
    const { container } = render(<Main />);
    expect(container.firstChild).toHaveStyle({
      backgroundColor: '#06092b'
    });
  });
});
