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
        cy.get('.btn').click();

        cy.contains('Scania Motor').click();
        cy.get('#code').type('RWCAF1');
        cy.get('#name').type('Tiket Penerbangan');
        cy.get('#point').type('15000');
        cy.get('#stock').type('10');
        cy.get('#type').select('Physical');

        //Input Kalender
        cy.get('.type').click();

        //Upload File
        const imagefile = 'aair.png';
        cy.get('[name="image"]').attachFile(imagefile);

        // cy.get('.btn').click();
     }) 

})