
describe('login ', () => {
    beforeEach(() => {
      cy.visit('https://job-portal-user-dev-skx7zw44dq-et.a.run.app/mentoring')
      cy.wait(6000);
    })
    it('login when email not found', () => {
        // Click button "Masuk"
     cy.get('#dealls-navbar-login-btn').click({ force: true });
      cy.get('input[placeholder="Enter your email"]').type('user@yopmail.com');
      cy.get('input[placeholder="Enter your password"]').type('Paswword');
      cy.get('.border-none').click();
      cy.get('.ant-message-notice-content').should('be.visible');
      cy.wait(1000);
      })

      it('Login when email & password is empty', () => {
        // Click button "Masuk"
      cy.get('#dealls-navbar-login-btn').click({ force: true });
      cy.get('.border-none').click();
      cy.get('#basic_email_help > .ant-form-item-explain-error').should ('contains.text', 'Missing email');
      cy.get('#basic_password_help > .ant-form-item-explain-error').should ('contains.text', 'Missing password');
      })

      it('Login when email without "@"', () => {
        // Click button "Masuk"
      cy.get('#dealls-navbar-login-btn').click({ force: true });
      cy.get('input[placeholder="Enter your email"]').type('askdjas');
      cy.get('.border-none').click();
      cy.get('.ant-form-item-explain-error').should ('contains.text', 'Invalid email format');
      })

      it('Login when password < 8 characters', () => {
        // Click button "Masuk"
      cy.get('#dealls-navbar-login-btn').click({ force: true });
      cy.get('input[placeholder="Enter your password"]').type('asda');
      cy.get('.border-none').click();
      cy.get('#basic_password_help > .ant-form-item-explain-error').should('contains.text', 'Password must be at least 8 characters');
      })

      it('verify icon view password', () => {
        // Click button "Masuk"
      cy.get('#dealls-navbar-login-btn').click({ force: true });
      cy.get('.ant-input-suffix')
      })

      it('Login successfully', () => {
        // Click button "Masuk"
      cy.get('#dealls-navbar-login-btn').click({ force: true });
      cy.wait(4000);
      cy.get('input[placeholder="Enter your email"]').type('user2799@yopmail.com');
      cy.get('input[placeholder="Enter your password"]').type('Password');
      cy.get('.border-none').click();
      })
})