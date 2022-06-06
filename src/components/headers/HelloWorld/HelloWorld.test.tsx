import { render, screen } from '@testing-library/react';
import { HelloWorld } from './HelloWorld';

test('HelloWorld renders to the document', () => {
  render(<HelloWorld />);
  expect(
    screen.getByRole('heading', {
      level: 1,
      name: /Hello World!/i
    })
  ).toBeInTheDocument();
});
