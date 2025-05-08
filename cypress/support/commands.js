// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', () => {
    cy.request({
      method: 'POST',
      url: 'https://job-portal-user-dev-skx7zw44dq-et.a.run.app/mentoring',
      body: {
        username: 'user2799@yopmail.com',
        password: 'Password'
      }
    }).then((response) => {
      window.localStorage.setItem('authToken', response.body.token);
    });
  });

  // Cypress.Commands.add('selectDateRange', (startDate, endDate) => {
  //   cy.get('.rmdp-container > :nth-child(1) > .h-9').click();
  
  //   // Format: "Choose Monday May 12 of 2025"
  //   const formatAriaLabel = (date) => {
  //     const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  //     return `Choose ${date.toLocaleDateString('en-US', options)}`;
  //   };
  
  //   const start = new Date(startDate);
  //   const end = new Date(endDate);
  
  //   const startLabel = formatAriaLabel(start);
  //   const endLabel = formatAriaLabel(end);
  
  //   // choose start date
  //   cy.get('[aria-label="${startLabel}"]').click();
  
  //   // choose end date
  //   cy.get('[aria-label="${endLabel}"]').click();
  // });
  