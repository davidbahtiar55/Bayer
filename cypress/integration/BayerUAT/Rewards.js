describe('Location Demo', function(){

    beforeEach(function(){
        cy.visit('https://crm-cms.stag-rewardx.insignia.co.id/#/tiering')
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
        cy.wait(4000)
        //Click Rewards Role Super Admin
        cy.get(':nth-child(9) > .nav-link').click({force: true});
        
        cy.get('.col.d-flex > a > .btn').click();
        
        //Select Companies For Role Super Admin 
        cy.get(companyRewards).type(company_rewards, { force: true }).type(enter);

        //Input Code
        cy.get(codeRewards).type(code_rewards, {force: true});

        //Input Name Rewards
        cy.get(nameRewards).type(name_rewards);

        //Input Point
        cy.get(pointRewards).type(point_rewards);

        //Input Stock
        cy.get(stockRewards).type(stock_rewards);

        //Select Type
        cy.get(typeRewards).select(type_rewards);

        //Upload File
        const imagefile = 'aair.png';
        cy.get('[name="image"]').attachFile(imagefile);

        //Submit Data Rewards
        // cy.get(btn_submitRewards).click();
     }) 
})

// Variabel
const company_rewards = 'Scania Motor'
const code_rewards = 'RWCA99'
const name_rewards = 'Piston'
const point_rewards = '1000'
const stock_rewards = '10'
const type_rewards = 'Physical'

// Object
const companyRewards = '#react-select-2-input'
const codeRewards = '#code'
const nameRewards = '#name'
const pointRewards = '#point'
const stockRewards = '#stock'
const typeRewards = '#type'
const btn_submitRewards = '.btn'
const enter = '{enter}'