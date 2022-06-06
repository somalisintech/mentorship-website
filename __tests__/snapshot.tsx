import { render } from '@testing-library/react';
import Home from '@/pages/index';

it('should render "Hello World!" on the homepage', () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});
