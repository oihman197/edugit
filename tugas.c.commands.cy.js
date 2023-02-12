describe('test zero.webappsecurity', () => {
    it('visit web', () => {
    cy.visit('http://zero.webappsecurity.com/login.html');
    cy.url().should('include', 'login.html')
    });

    it('Should fill Login', () => {
        cy.visit('http://zero.webappsecurity.com/login.html');
        cy.get('#user_login').wait(1000).clear()
        cy.get('#user_login').wait(1000).type('username')
        cy.get('#user_password').wait(1000).clear()
        cy.get('#user_password').wait(1000).type('password')
        cy.get('#user_remember_me').wait(1000).click()
        cy.get('#user_remember_me').wait(1000).type('keep me signed in')
        cy.get('.btn').wait(1000).submit
        cy.get('.btn').wait(1000).click()
        cy.get('#pay_bills_tab').wait(1000).click()
        cy.get('#sp_payee').wait(1000).select('bofa')
        cy.get('#sp_account').wait(1000).select("5")
        cy.get('#sp_amount').wait(1000).type('50')
        cy.get('#sp_date').wait(1000).type('2023-02-15')
        cy.get('#pay_saved_payees').wait(1000).submit
    });
})