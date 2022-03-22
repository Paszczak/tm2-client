/// <reference types="cypress" />

describe('Visit the home page', () => {
  it('can visit the app root', () => {
    cy.visit('http://localhost:3000');
  });

  it('can navigate to /home', () => {
    cy.contains('Wiadomości').click()
    cy.location().should((loc) => {
      expect(loc.host === '/news')
    })
  });

  it('can read news', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Wiadomości').click()
    cy.get('li').click()
    cy.get('#backdrop-root').within(() => {
      cy.get('div').should('be.visible')
    })
    cy.get('#modal-root').within(() => {
      cy.get('h3').should('be.visible')
      cy.get('p').should('be.visible')
      cy.get('div[role="button"]').click()
    })
    cy.get('#modal-root').should('be.empty')
    cy.get('#backdrop-root').should('be.empty')
  })

  it('can view all newses', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Wiadomości').click();
    cy.contains(/pokaż wszystkie aktualności/i).should('be.visible').click()
    cy.get('li').should('have.length', 3)
    cy.get('ul>li').each(($li) => {
      cy.wrap($li).click()
      cy.get('#backdrop-root').within(() => {
        cy.get('div').should('be.visible')
      })
      cy.get('#modal-root').within(() => {
        cy.get('h3').should('be.visible')
        cy.get('p').should('be.visible')
        cy.get('div[role="button"]').click()
      })
      cy.get('#modal-root').should('be.empty')
      cy.get('#backdrop-root').should('be.empty')
    })
    cy.contains(/pokaż tylko aktualne/i).should('be.visible').click()
    cy.get('li').should('have.length', 1)
  })

  it('can return home', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Wiadomości').click();
    cy.contains(/teoria muzyki/i).click()
    cy.location().should((loc) => {
      expect(loc.host === '/')
    })
  })
});
