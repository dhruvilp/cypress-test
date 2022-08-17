import App from '../../src/App';

describe('App.cy.js', () => {
  it('playground', () => {
    cy.mount(<App />);
    cy.wait(5000);
    cy.get('#learn-react-hyperlink').should('have.text', 'Learn React');
    cy.contains('Learn React').click();
    cy.go('back');
  })
})