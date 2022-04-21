describe('Location Demo', function(){

    beforeEach(function(){
        cy.visit('http://159.65.3.9:1338/')
    });

    it('should have title tag with value Loyalty CMS', function(){
        cy.title().should('eq','Loyalty CMS');
    });

     it('should redirect Menu Rewards', function(){
        cy.get('.mb-3 > .form-control').type('cte@mail.com');
        cy.get('.mb-4 > .form-control').type('coba123');
        cy.get(':nth-child(1) > .btn').click();
        cy.get(':nth-child(7) > .nav-link').click();
        cy.get('.col.d-flex > a > .btn').click();
        cy.get('#code').type('RWC001');
        cy.get('#name').type('Buku');
        cy.get('#point').type('15000');
        cy.get('#stock').type('10');
        cy.get('#type').select('Physical');
        cy.get('#image')
     }) 

})