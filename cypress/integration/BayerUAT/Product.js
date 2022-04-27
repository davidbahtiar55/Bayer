describe('Location Demo', function(){

    beforeEach(function(){
        cy.visit('http://159.65.3.9:1338/')
    });

    it('should have title tag with value Loyalty CMS', function(){
        cy.title().should('eq','Loyalty CMS');
    });

     it('should redirect Menu Rewards', function(){

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

        //Click Data Company for Role Company User
        cy.get('.css-6j8wv5-Input').click();
        
        //Select Companies For Role Super Admin
        cy.contains('Mandalika Tbk').click();

        //Input Product
        cy.get('#name').type('Payung');

        //Input Description
        cy.get('#description').type('Lorem Ipsum');

        //Input Transaction
        cy.get('#transaction').type('15000');

        //Input Kalender
        cy.get('#periode').type('2012-01-01');

        //Upload File
        const imagefile = 'aair.png';
        cy.get('[name="image"]').attachFile(imagefile);

        //Submit data
        cy.get('.btn').click();

    }) 

})