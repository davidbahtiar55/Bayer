describe('Location Demo', function(){

    beforeEach(function(){
        cy.visit('https://crm-cms.stag-rewardx.insignia.co.id/#/tiering')
    });

    it('should have title tag with value Loyalty CMS', function(){
        cy.title().should('eq','Loyalty CMS');
    });

     it('should redirect Menu Product', function(){

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
        cy.get(':nth-child(3) > .nav-link').click();

        cy.get('.col.d-flex > a > .btn').click();

        //Select Companies For Role Super Admin
        cy.get(companyProduct).type(company_product, { force: true }).type(enter)

        // //Input Product
        cy.get(nameProduct).type(name_product);

        // //Input Description
        cy.get(descriptionProduct).type(description_product);

        // //Input Transaction
        cy.get(transactionProduct).type(transaction_product);

        // //Input Kalender
        cy.get(periodeProduct).type(periode_product);

        //Upload File
        const imagefile = 'aair.png';
        cy.get('[name="image"]').attachFile(imagefile);

        //Submit data
        cy.get(btn_submitProduct).click();

    }) 
})


// Variabel
const name_product = 'Terminal Satu'
const description_product = 'Lorem Ipsum'
const transaction_product = '19000'
const periode_product = '2019-01-01'
const company_product= 'Mandalika Tbk'

// Object
const selectCompanyp = '.css-ackcql'
const nameProduct = '#name'
const companyProduct = '#react-select-2-input'
const descriptionProduct = ':nth-child(3) > .form-control'
const transactionProduct = '#transaction'
const periodeProduct = '#periode'
const btn_submitProduct = '.btn'
const enter = '{enter}'