/// <reference types="cypress" />

describe('Visit the school page', () => {
  it('can navigate to /school', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Szkoła').click()
    cy.location().should((loc) => {
      expect(loc.host === '/school')
    })
  })

  it('can choose a class and get displayed correct answers', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Szkoła').click();
    cy.get('ul[data-testid="school-classes"]>li').should('have.length', 3)
    cy.contains(/harmonia/i).click()
    cy.location().should((loc) => {
      expect(loc.host === '/school/c1')
    })
    cy.get('ul[data-testid="class-content"]').should('be.visible')
    cy.contains(/historia muzyki/i).click()
    cy.get('div[data-testid="class-content"]').should('be.visible')
  })

  it('can choose a class content', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Szkoła').click();
    cy.contains(/harmonia/i).click()
    cy.get('ul[data-testid="class-content"]>li').each(($li) => {
      cy.wrap($li).click()
      cy.get('#backdrop-root').within(() => {
        cy.get('div').should('be.visible')
      })
      cy.get('#modal-root').within(() => {
        cy.get('h3').should('be.visible')
        cy.get('p').should('be.visible')
        cy.get('b').should('have.html', 'Pliki')
        cy.get('div[role="button"]').click()
      })
      cy.get('#modal-root').should('be.empty')
      cy.get('#backdrop-root').should('be.empty')
    })
  })

  it('can return home', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Szkoła').click();
    cy.contains(/teoria muzyki/i).click()
    cy.location().should((loc) => {
      expect(loc.host === '/')
    })
  })
})