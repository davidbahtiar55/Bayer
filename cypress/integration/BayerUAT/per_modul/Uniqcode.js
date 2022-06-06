describe('Location Demo', function () {

    beforeEach(function () {
        cy.visit('https://crm-cms.stag-rewardx.insignia.co.id/#/tiering')
    });

    it('should have title tag with value Loyalty CMS', function () {
        cy.title().should('eq', 'Loyalty CMS');
    });

    it('should redirect Menu UniqCode', function () {

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

        //Click Menu Uniqcode
        cy.get(':nth-child(4) > .nav-link').click();

        //Click Add Btn Uniqcode
        cy.get('.col.d-flex > a > .btn').click();

        //Input Code
        cy.get('#code').type('ACB101');

        //Select Status
        cy.get('#statuss').select('Available');
        //Input Product
        cy.get(productUniqcode).type(product_uniqcode, { force: true }).type(enter)

        //Submit data
        cy.get('.btn').click();
    })

    it.skip('Generate UniqCode', function () {

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

        //Click Menu Uniqcode
        cy.get(':nth-child(4) > .nav-link').click();

        //Click Add Btn Uniqcode
        cy.get('.d-inline-flex > :nth-child(1) > .btn').click();

        //Input Quantity
        cy.get('#quantity').type('5');

        //Input Product
        cy.get(productUniqcode).type(product_uniqcode, { force: true }).type(enter)

        //Submit Generate Uniqcode
        cy.get('form > .btn').click();
    })
})


// Variabel
const product_uniqcode = 'Stand'

// Object
const productUniqcode = '#react-select-2-input'
const enter = '{enter}'