describe('Location Demo', function(){

    beforeEach(function(){
        cy.visit('https://crm-cms.stag-rewardx.insignia.co.id/#/tiering')
    });

    it('should have title tag with value Loyalty CMS', function(){
        cy.title().should('eq','Loyalty CMS');
    });

     it('should redirect Menu Member', function(){

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

        //Select Menu Members Role Super Admin & Company User
        cy.get(':nth-child(2) > .nav-link').click();

        //Click Add Btn Members
        cy.get('.col.d-flex > a > .btn').click();

        //Click Data Company for Role Company User
        cy.get(companyMembers).type(company_members, { force: true }).type(enter)

        //Input Fullname
        cy.get(fUllnameMembers).type(fUllname_members);

        //Input Phone
        cy.get(phoneMembers).type(phone_members);

        //Input Email
        cy.get(emailMembers).type(email_members);

        //Input Password
        cy.get(passwordMembers).type(password_members);

        //Input Birth Date
        cy.get(birthdateMembers).type(birthdate_members);

        //Submit data
        cy.get(btn_submitMembers).click();
    }) 

})

// Variabel
const company_members = 'Scania Motor'
const fUllname_members = 'Tejo'
const phone_members = '081378849000'
const email_members = 'no21@mail.com'
const password_members = 'coba123'
const birthdate_members = '2012-01-01'

// Object
const companyMembers = '#react-select-2-input'
const fUllnameMembers = '#fullname'
const phoneMembers = '#phone'
const emailMembers = '#email'
const passwordMembers = '#password'
const birthdateMembers = '#birthdate'
const btn_submitMembers = '.btn'
const enter = '{enter}'