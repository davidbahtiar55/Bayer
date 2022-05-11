describe('Location Demo', function(){

    beforeEach(function(){
        cy.visit('https://www.saucedemo.com/')
    });

    it.skip('should have title tag with value Swab Labs', function(){
        cy.title().should('eq','Swag Labs');
    });

    it('URL should be https://www.saucedemo.com/', function(){
        cy.url().should('eq', 'https://www.saucedemo.com/');
    })

    it('should be HTTPS',function(){
        cy.location('protocol').should('contains', 'https');
    });

    it('the hostname should be www.saucedemo.com', function(){
        cy.location('hostname').should('eq', 'www.saucedemo.com')
    })

    it('should redirect /inventory.html', function(){
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.location('pathname').should('eq', '/inventory.html')
    })

     it('Add to Cart and check out', function(){
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('#item_4_title_link > .inventory_item_name').click();
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('.shopping_cart_link').click();
        cy.get('[data-test="checkout"]').click();
       
        //Checkout Addres
          cy.get('[data-test="firstName"]').type('Sutisna');
          cy.get('[data-test="lastName"]').type('Wira');
          cy.get('[data-test="postalCode"]').type('123456')
          cy.get('[data-test="continue"]').click();
          cy.get('[data-test="finish"]').click();
     })

})