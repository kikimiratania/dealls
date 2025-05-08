
describe('Mentoring', () => {
    beforeEach(() => {
        cy.visit('https://job-portal-user-dev-skx7zw44dq-et.a.run.app/mentoring');
        cy.wait(3000); // waiting 3s
    //    cy.Register();
        cy.login();
    })


    // Search for mentors by category
    it('search data not found', () => {
        cy.get('.fixed > [href="/mentoring"]').click();
        // cy.scrollTo('Cari berdasarkan nama');
        cy.get('#searchMentor').type ('adasd');
        //cy.get('.mt-\[57px\]').should('be.visible'); //verify data not found
    })

    it('search data is found', () => {
        cy.get('.fixed > [href="/mentoring"]').click();
        // cy.scrollTo('Cari berdasarkan nama');
        cy.get('#searchMentor').type ('adasd');
        //cy.get('.mt-\[57px\]').should('be.visible'); //verify data not found
        cy.get('#searchMentor').clear();
    })

    it('search By name', () => {
        cy.get('.fixed > [href="/mentoring"]').click();
        // cy.scrollTo('Cari berdasarkan nama');
        cy.get('#searchMentor').type ('Cika');
        //cy.get('.mt-\[57px\]').should('be.visible'); //verify data not found
        cy.get('#searchMentor').clear();
    })

    it('search By Company', () => {
        cy.get('.fixed > [href="/mentoring"]').click();
        // cy.scrollTo('Cari berdasarkan nama');
        cy.get('#searchMentor').type ('Microsoft');
        cy.get('#searchMentor').clear();
    })

    it('search By role', () => {
        cy.get('.fixed > [href="/mentoring"]').click();
        // cy.scrollTo('Cari berdasarkan nama');
        cy.get('#searchMentor').type ('Software Architect');
       
        cy.get('#searchMentor').clear();
    })

    it('search By Company', () => {
        cy.get('.fixed > [href="/mentoring"]').click();
        // cy.scrollTo('Cari berdasarkan nama');
        cy.get('#searchMentor').type ('Microsoft');
        
        cy.get('#searchMentor').clear();
        //cy.get('.my-9 > .gap-2 > .flex')
    })

    
    it('Eksplor Career  Accounting', () => {
        cy.get('.swiper-slide-next').click();
    })

    it('Eksplor by Career  Art & design', () => {
        cy.get('.swiper-wrapper > :nth-child(3)').click();
    })
    
    it('Eksplor by Career  Business', () => {
        cy.get('.swiper-wrapper > :nth-child(4)').click();
    })

    it(' Eksplor by Career  Data', () => {
        cy.get('.swiper-wrapper > :nth-child(5)').click();
    })

    it('Book a mentoring session by career', () => {
        cy.get('[href="/mentoring/bi-598"]').click(); // click mentor
        cy.wait(4000);
        cy.scrollTo('bottom')
        cy.get('.mt-3').click();  // btn Ajukan Jadwal
        // Step 1 : Select the topic you want to discuss with your mentor.
        cy.get('.grid > :nth-child(1) > .relative').click();
        cy.get('.grid > :nth-child(2) > .relative > .font-semibold').click();
        cy.get('.col-start-1 > .relative > .font-semibold').click();
        cy.get('#mentoring-schedule-topic-request-session-btn').click();  //btn Next

        //Step 2:
        cy.get('.rmdp-container > :nth-child(1) > .h-9').click(); 
        cy.contains('span', '12').click();  // date 12 mei
        cy.contains('span', '15').click(); // date 15 mei
        cy.wait(3000);
        cy.get('#proposedTimes_0_startTime').click();
        cy.get('#proposedTimes_0_startTime').type('10:00'); //start time
        cy.get('#proposedTimes_0_endTime').click().type('11:00'); //end time
        cy.get('.ant-select-selection-item').should('be.visible');
        cy.get('#mentoring-schedule-pick-schedule-request-session-btn').click();


        //step 3
        cy.get('#fullName').type('test'); //name
        cy.get('#whatsapp').type('6281112238'); //WA
        const email = `user${Math.floor(Math.random() * 10000)}@yopmail.com`;
        cy.get('#email').type(email); //email
        cy.get('#birthDate').click().type('12/01/1998'); // birth date
        //CV
        cy.get('input[type="file"]').selectFile('cypress/fixtures/Dealls.pdf', { force: true }); //add photo profil
        // Portofolio
        cy.get('.ant-radio-group > :nth-child(1)').click();
        cy.get('#customPortfolios_0_url').type('test.git');
        cy.get('#mentoring-schedule-personal-information-request-session-btn > span').click();


        //Step 4
        cy.get('#password').type('Password');
        cy.get('#confirmPassword').type('Password');
        cy.get(':nth-child(1) > .ant-checkbox-wrapper > :nth-child(2)').click();
        cy.get(':nth-child(2) > .ant-checkbox-wrapper > :nth-child(2)').click();
        cy.get('#mentoring-schedule-finish-request-session-btn').click();
        cy.get('.ant-btn').click();
        cy.wait(3000);
        })

    it('My session ', () => {
        cy.get('.mt-4 > .relative').click();
        cy.screenshot();
        //cy.get('.ant-modal-close-x').click();
        })
        
})