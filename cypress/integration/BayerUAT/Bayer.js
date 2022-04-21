describe('Location Demo', function(){

    beforeEach(function(){
        cy.visit('http://159.65.3.9:1338/')
    });

    it('should have title tag with value Loyalty CMS', function(){
        cy.title().should('eq','Loyalty CMS');
    });

    it('should redirect Dashboard CMS', function(){
        cy.get('.mb-3 > .form-control').type('cte@mail.com');
        cy.get('.mb-4 > .form-control').type('coba123');
        cy.get(':nth-child(1) > .btn').click();
     })



})