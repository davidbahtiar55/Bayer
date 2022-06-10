describe('Location Demo', function () {

    beforeEach(function () {
        cy.visit('https://crm-cms.stag-rewardx.insignia.co.id/#/tiering')
    });

    it('should have title tag with value Loyalty CMS', function () {
        cy.title().should('eq', 'Loyalty CMS');
    });

    it('should redirect Menu Actions', function () {

        //Input Username (Role Compny User)
        // cy.get('.mb-3 > .form-control').type('cte@mail.com');
        //Input Password
        // cy.get('.mb-4 > .form-control').type('coba123');

        //Input Username (Role Super Admin)
        cy.get('.mb-3 > .form-control').type('su@insignia.co.id');
        //Input Password
        cy.get('.mb-4 > .form-control').type('admin1234');

        //Submit Login
        cy.get(':nth-child(1) > .btn').click();
        //Select Menu Actions Role Super Admin & Company User
        cy.get(':nth-child(6) > .nav-link').click();

        //Click Add Btn Actions
        cy.get('.col.d-flex > a > .btn').click();
        //Select Companies For Role Super Admin
        cy.get(companyActions).type(company_actions, { force: true }).type(enter)
        //Input Name Actions
        cy.get(nameActions).type(name_actions, { force: true })
        //Input Code Actions
        cy.get(codeActions).type(code_actions)
        //Input Point Actions
        cy.get(pointActions).type(point_actions)
        //Input Maxcap Point Actions
        cy.get(maxpointActions).type(maxpoint_actions)
        cy.wait(3000)
        //Input Product Actions
        cy.get(productActions).type(product_actions, { force: true }).type(enter)
        //Input Maxcap Periode Actions
        cy.get(maxcapperiodeActions).type(maxcapperiode_actions)
        //On Slide Have Maxcap Actions
        cy.get(havemaxcapAction).check()
        //Klik Submit Button
        cy.get(btnsubmitActions).click()

        //Check Actions Table
        cy.get(name_tba).should('have.text', name_actions)
        cy.get(code_tba).should('have.text', code_actions)
        cy.get(generationdays_tba).should('have.text', maxcapperiode_actions)  
    })
})


// Variabel
const company_actions = 'Mandalika Tbk'
const name_actions ='Light 1'
const code_actions = 'ACT172'
const point_actions = '10000'
const maxpoint_actions = '20000'
const product_actions = 'Terminal Satu 1'
const maxcapperiode_actions = '3'

// Object
const companyActions = '#react-select-2-input'
const nameActions = '#name'
const codeActions = '#code'
const pointActions = '#point'
const maxpointActions = '#capGeneration'
const productActions = '#react-select-3-input'
const maxcapperiodeActions = '#capGenerationDays'
const havemaxcapAction = '#haveCapGeneration'
const enter = '{enter}'
const btnsubmitActions = '.btn'
const name_tba = 'tbody > :nth-child(1) > :nth-child(2)'
const code_tba = 'tbody > :nth-child(1) > :nth-child(3)'
const point_tba = 'tbody > :nth-child(1) > :nth-child(4)'
const maxcap_tba = 'tbody > :nth-child(1) > :nth-child(5)'
const generationdays_tba = 'tbody > :nth-child(1) > :nth-child(6)'
const product_tba = 'tbody > :nth-child(1) > :nth-child(7)'