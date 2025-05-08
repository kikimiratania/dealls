/// <reference types="cypress" />
import 'cypress-file-upload';
describe('Register ', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://job-portal-user-dev-skx7zw44dq-et.a.run.app/mentoring')
  })

  it('Register as Jobseeker via email [Back]', () => {
    cy.get('#dealls-navbar-register-btn').click();  // Klik button Register/Daftar
    cy.wait(1000);
    cy.get(':nth-child(1) > .mt-auto > .text-white').click(); // Click button Sign Up with email [jobseeker area]
    cy.get('.gap-6 > .flex > .font-bold').click(); // click button ENG for change language
    cy.get('.text-center').should('be.visible');  // verify text "Tell us your name" visible
    cy.get('.order-2').click(); //click button Cancel
  })
  
  it('Register as Jobseeker via email [Next]', () => {
    //Page 1 -Biodata
    cy.get('#dealls-navbar-register-btn').click();  // Klik button Register/Daftar
    cy.wait(1000);
    cy.get(':nth-child(1) > .mt-auto > .text-white').click(); // Click button Sign Up with email [jobseeker area]
    cy.get(1000);
    cy.get('.gap-6 > .flex > .font-bold').click(); // click button ENG for change language
    cy.get('.text-center').should('be.visible');  // verify text "Tell us your name" visible

    const randomNum = Math.floor(Math.random() * 100000);
    const fullName = `UserTest${randomNum}`;
    cy.get('#fullName').type (fullName); // input fullName
    cy.get('.order-1'). click(); //click button next
    cy.get('.flex.text-center > .flex > .font-bold').should('be.visible').contains('Let’s Build Profile That Attracts Employers.');
    cy.get('.flex.text-center > .mt-2').should('be.visible').contains('Our platform has 1.200+ daily active recruiters. Let them contact you with exciting offers.');
    cy.get('input[type="file"]').selectFile('cypress/fixtures/Photo.jpg', { force: true }); //add photo profil
    cy.get('#jobSearchStatus').click();
    cy.contains('.ant-select-item-option-content', 'Actively looking for the next 3 months').click()
    cy.get('#whatsapp').type('6281112233');
    cy.wait(1000)
    //Email
    const email = `user${Math.floor(Math.random() * 10000)}@yopmail.com`;
    cy.get('#email').type(email);
    cy.wait(2000)
    cy.get('#campus').type('Uni').click();
    cy.wait(2000);
    cy.contains('.ant-select-item-option-content', 'Cuak University').click();
    cy.get('#eligibility').click({ force: true });
    cy.contains('.ant-select-item-option-content', '4th Year Student').click();
    cy.get('.order-1').click();


    //  page 2 - Skip CV
    cy.contains('Skip for now, my CV is not ready', { timeout: 10000 }).should('be.visible');
    cy.contains('button', 'Skip for now, my CV is not ready').click();
    cy.get('.order-1').click();

    //current and past experience
    cy.get('#companyName').should('be.visible').type('ALSTOM');  // Type company name into the input
    cy.get('.ant-select-item-option').contains('ALSTOM').click(); // Wait for dropdown to appear and click the desired option
    cy.get('#roleLevel').should('be.visible').type('Intern'); // Type role level into the input
    cy.get('.ant-select-item-option').contains('Intern').click(); //Wait for dropdown to appear and click the desired option
    cy.get('#roleName').should('be.visible').type('QA Software Engineer'); // Type role name into the input
    cy.get('.ant-select-item-option').contains('QA Software Engineer').click(); //Wait for dropdown to appear and click the desired option
    cy.get('#startDate').should('be.visible').type('04/2024'); // input startdate
    cy.get('.ant-checkbox-input').click(); //click Im stiil working in this role
    cy.get('.order-1').click(); //click  btn next
   // Specialization 1
    //  cy.get('.scroll-container').scrollTo('bottom');
    //  cy.screenshot('custom-screenshot-name');
   cy.wait(2000);
   cy.get('.order-1').click();
   cy.get('#password').type('Password');
   cy.get('#passwordConfirmation').type('Password');
   cy.get('#checkPrivacyPolicy').click();
   cy.get('#dealls-onboarding-finish').click();

   // welcome dealls [banner]
   //cy.get('.ant-modal-body').should('be.visible');
   cy.wait(3000);
   cy.get('.ant-modal-close-x').click();
  })
})
