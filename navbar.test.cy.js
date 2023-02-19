describe('Navbar Test', () => {
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Should display online banking content', () => {
        // cy.get('#onlineBankingMenu').click()
        cy.get('#onlineBankingMenu').should('have.text', 'Online Banking');
        // cy.url().should('include', 'online-banking.html')
        cy.get('#onlineBankingMenu').should('be.visible');
        // cy.get('h1').should('be.visible')
    })

    it('Should display feedback content', () => {
        cy.get('#feedback').should('have.text', 'Feedback');
        // cy.get('#feedback').click()
        // cy.url().should('include', 'feedback.html')
        cy.get('#feedback').click();
    })

    it('Should display homepage content', () =>{
        cy.get('#homeMenu').should('have.text', 'Home');
        // cy.contains('Zero Bank').click()
        // cy.url().should('include', 'index.html')
        cy.get('#homeMenu').should('be.visible');
    })
})