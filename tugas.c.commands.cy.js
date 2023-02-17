describe('test zero.webappsecurity', function() {
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/login.html');
        cy.url().should('include', 'login.html')
    })

    it('Should fill Login', () => {
        cy.get('#user_login').submit
        cy.get('#user_login').type('username')
        cy.get('#user_password').submit
        cy.get('#user_password').type('password')
        cy.get('#user_remember_me').click()
        cy.get('#user_remember_me').type('keep me signed in')
        cy.get('.btn').submit
        cy.get('.btn').click()
        
    });

    it('Should fill to payment',() => {
        cy.get('#user_login').submit
        cy.get('#user_login').type('username')
        cy.get('#user_password').submit
        cy.get('#user_password').type('password')
        cy.get('#user_remember_me').click()
        cy.get('#user_remember_me').type('keep me signed in')
        cy.get('.btn').submit
        cy.get('.btn').click()
        cy.get('#pay_bills_tab').submit
        cy.get('#pay_bills_tab').click()
        // cy.get('#sp_payee').wait(1000).select('bofa')
        // cy.get('#sp_account').wait(1000).select("5")
        // cy.get('#sp_amount').wait(1000).type('50')
        // cy.get('#sp_date').wait(1000).type('2023-02-15')
        cy.payment('bofa', "5", '50', '2023-02-15')
        cy.get('#pay_saved_payees').submit
        cy.contains('pay').click()
       
        cy.get('#pay_saved_payees').click();
        cy.get('#alert_content > span').should('be.visible');
        cy.get('#alert_content > span').should('have.text', 'The payment was successfully submitted.');
        
    });
});