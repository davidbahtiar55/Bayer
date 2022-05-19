describe('Location Demo', function () {

    beforeEach(function () {
        cy.visit('https://crm-cms.stag-rewardx.insignia.co.id/#/tiering')
    });

    it('should have title tag with value Loyalty CMS', function () {
        cy.title().should('eq', 'Loyalty CMS');
    });

    it('should redirect Menu Product', function () {

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

        //Select Menu Product Role Super Admin & Company User
        cy.get(':nth-child(3) > .nav-link').click({ force: true });

        cy.get('.col.d-flex > a > .btn').click();

        //Select Companies For Role Super Admin
        cy.get(companyProduct).type(company_product, { force: true }).type(enter)

        //Input Product
        cy.get(nameProduct).type(name_product);

        //Input Description
        cy.get(descriptionProduct).type(description_product);

        //Input Transaction
        cy.get(transactionProduct).type(transaction_product);

        //Input Kalender
        cy.get(periodeProduct).type(periode_product);

        //Upload File
        const imagefile = 'aair.png';
        cy.get('[name="image"]').attachFile(imagefile);

        //Submit data
        cy.get(btn_submitProduct).click();

        //Check Product Table
        cy.get(tb_name).should('have.text', name_product)
        cy.get(tb_description).should('have.text', description_product)
        cy.get(tb_transcation).should('have.text', transaction_product)
        cy.get(tb_periode).should('have.text', periode_product)
        cy.get(tb_company).should('have.text', company_product)
    })
})


// Variabel
const name_product = 'Cam web 1'
const description_product = 'Lorem Ipsum'
const transaction_product = '17000'
const periode_product = '2022-01-01'
const company_product = 'Mandalika Tbk'

// Object
const selectCompanyp = '.css-ackcql'
const nameProduct = '#name'
const companyProduct = '#react-select-2-input'
const descriptionProduct = ':nth-child(3) > .form-control'
const transactionProduct = '#transaction'
const periodeProduct = '#periode'
const btn_submitProduct = '.btn'
const enter = '{enter}'
const tb_name = 'tbody > :nth-child(1) > :nth-child(2)'
const tb_description = 'tbody > :nth-child(1) > :nth-child(3)'
const tb_transcation = 'tbody > :nth-child(1) > :nth-child(4)'
const tb_periode = 'tbody > :nth-child(1) > :nth-child(5)'
const tb_company = 'tbody > :nth-child(1) > :nth-child(6)'