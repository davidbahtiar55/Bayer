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
        
        cy.get(':nth-child(1) > .btn').click();

        //Click Rewards Role Company User
        // cy.get(':nth-child(7) > .nav-link').click();

        //Click Rewards Role Super Admin
        cy.get(':nth-child(9) > .nav-link').click();
        // cy.wait(4000)
        cy.get('.col.d-flex > a > .btn').click({force: true});

        //Click Data Company for Role Company User
        cy.get('.css-6j8wv5-Input').click({force: true});
        
        //Select Companies For Role Super Admin 
        cy.contains('Scania Motor').click();

        //Input Code
        cy.get('#code').type('RWCAF5');

        //Input Name Rewards
        cy.get('#name').type('Tiket Penerbangan');

        //Input Point
        cy.get('#point').type('15000');

        //Input Stock
        cy.get('#stock').type('10');

        //Select Type
        cy.get('#type').select('Physical');

        //Upload File
        const imagefile = 'aair.png';
        cy.get('[name="image"]').attachFile(imagefile);

        //Submit Data Rewards
        cy.get('.btn').click();
     }) 

})