describe('Location Demo', function () {

    beforeEach(function () {
        cy.visit('https://crm-cms.stag-rewardx.insignia.co.id/#/tiering')
    });

    it('should have title tag with value Loyalty CMS', function () {
        cy.title().should('eq', 'Loyalty CMS');
    });

    it('should redirect Menu Retailer', function () {

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

        //Click menu Retailer
        cy.get(':nth-child(12) > .nav-link').click();

        cy.get('.col.d-flex > a > .btn').click();

        //Click Company Tier
        cy.get(companyRetailer).type(company_retailer, { force: true }).type(enter);

        cy.get(nameRetailer).type(name_retailer);
    })

})


// Varibel
const company_retailer = 'Scania Motor'
const name_retailer = 'Pademangan'

// Object
const companyRetailer = '#react-select-2-input'
const nameRetailer = '#name'
const enter = '{enter}'