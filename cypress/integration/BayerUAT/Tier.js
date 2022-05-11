describe('Location Demo', function () {

    beforeEach(function () {
        cy.visit('https://crm-cms.stag-rewardx.insignia.co.id/#/tiering')
    });

    it('should have title tag with value Loyalty CMS', function () {
        cy.title().should('eq', 'Loyalty CMS');
    });

    it('should redirect Menu Tier', function () {

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

        //Click Menu Tier
        cy.wait(4000)
        cy.get(':nth-child(11) > .nav-link').click();

        //Click Add Btn Tier
        cy.get('.justify-content-end > a > .btn').click();

        //Click Company Tier
        cy.get(companyTier).type(company_tier, { force: true }).type(enter);

        //Input Name Tier
        cy.get(nameTier).type(name_tier);

        //Input Description Tier
        cy.get(descriptionTier).type(description_tier);

        //Input Total Tier
        cy.get(transactionTier).type(transaction_tier);

        //Click Submit data Tier
        cy.get(btn_submitTier).click();
    })

})

// Variabel
const company_tier = 'Scania Motor'
const name_tier = 'Premium'
const description_tier = 'Upgrade class'
const transaction_tier = '2000'

// Object
const companyTier = '#react-select-2-input'
const nameTier = '#name'
const descriptionTier = ':nth-child(3) > .form-control'
const transactionTier = '#totalTransaction'
const btn_submitTier = '.btn'
const enter = '{enter}'