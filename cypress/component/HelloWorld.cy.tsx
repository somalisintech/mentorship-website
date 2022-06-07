import { HelloWorld } from '@/components/headers/HelloWorld';

describe('HelloWorld.cy.tsx', () => {
  it('playground', () => {
    cy.mount(<HelloWorld />);

    cy.get('h1').contains(/hello world/i);
  });
});
