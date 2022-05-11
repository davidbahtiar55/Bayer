describe ('Location Chatbot', function(){

    beforeEach(function(){
        cy.visit('https://chats.landbot.io/v3/H-1201454-IEWWNJM0B52C435E/index.html')
    });

    it('Help center', function(){
    })

    it('Reuest a refund', function(){
        cy.get('.sc-lbVvki > .sc-gKAaRy').click();
        cy.contains('Request a refund').click();
        cy.get('.InputTextLong__TextArea').type('the payment has been successful the balance does not enter');
        cy.get('.sc-kLojOw').dblclick();
        cy.get('.input').type('Qa Test');
        cy.get('.sc-giAqHp').click();
        cy.get('.input').type('qaeinsignia@gmail.com');
        cy.get('.sc-giAqHp').dblclick();
        cy.get('.sc-lbVvki > :nth-child(1)').click();
    })

    it('Cancel contract', function(){
        cy.get('.sc-lbVvki > .sc-gKAaRy').click();
        cy.get('.sc-lbVvki > :nth-child(2)').click();
        cy.get('.InputTextLong__TextArea').type('I did not continue the contract due to financial reasons not so');
        cy.get('.sc-kLojOw').dblclick();
        cy.get('.input').type('Qa Test');
        cy.get('.sc-giAqHp').click();
        cy.get('.input').type('qaeinsignia@gmail.com');
        cy.get('.sc-giAqHp').dblclick();
        cy.get('.sc-lbVvki > :nth-child(1)').click();
    })

    it('Report an issue', function(){
        cy.get('.sc-lbVvki > .sc-gKAaRy').click();
        cy.get('.sc-lbVvki > :nth-child(3)').click();
        cy.get('.InputTextLong__TextArea').type('I m having trouble with payments, the description from the application always fails');
        cy.get('.sc-kLojOw').dblclick();
        cy.get('.input').type('Qa Test');
        cy.get('.sc-giAqHp').click();
        cy.get('.input').type('qaeinsignia@gmail.com');
        cy.get('.sc-giAqHp').dblclick();
        cy.get('.sc-lbVvki > :nth-child(1)').click();
    })

    it('Other', function(){
        cy.get('.sc-lbVvki > .sc-gKAaRy').click();
        cy.get('.sc-lbVvki > :nth-child(4)').click();
        cy.get('.InputTextLong__TextArea').type('I am happy that using this application is very easy');
        cy.get('.sc-kLojOw').dblclick();
        cy.get('.input').type('Qa Test');
        cy.get('.sc-giAqHp').click();
        cy.get('.input').type('qaeinsignia@gmail.com');
        cy.get('.sc-giAqHp').dblclick();
        cy.get('.sc-lbVvki > :nth-child(1)').click();
    })

})