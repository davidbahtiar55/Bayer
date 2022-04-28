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
        cy.get('.col.d-flex > a > .btn').click({force: true});

        //Click Data Company for Role Company User
        cy.get('.css-6j8wv5-Input').click();
        
        //Select Companies For Role Super Admin
        cy.contains('Amd Tbk').click();

        //Input Fullname
        cy.get('#fullname').type('nono');

        //Input Phone
        cy.get('#phone').type('081378840000');

        //Input Transaction
        cy.get('#email').type('no2@mail.com');

        //Input Password
        cy.get('#password').type('coba123');

        //Input Birth Date
        cy.get('#birthdate').type('2012-01-01');

        //Submit data
        cy.get('.btn').click();
    }) 

})