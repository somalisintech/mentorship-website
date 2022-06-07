import { render } from '@testing-library/react';
import Home from '@/pages/index';
import About from '@/pages/about';
import Profile from '@/pages/profile';
import Mentors from '@/pages/mentors';

it('<Home /> should render "Landing page"', () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});

it('<About /> should render "About page"', () => {
  const { container } = render(<About />);
  expect(container).toMatchSnapshot();
});

it('<Mentors /> should render "Mentors page"', () => {
  const { container } = render(<Mentors />);
  expect(container).toMatchSnapshot();
});

it('<Profile /> should render "User profile page"', () => {
  const { container } = render(<Profile />);
  expect(container).toMatchSnapshot();
});
