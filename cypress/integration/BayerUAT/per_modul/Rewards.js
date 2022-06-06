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
        //Klik Button Login
        cy.get(':nth-child(1) > .btn').click();
        //Click Rewards Role Company User
        // cy.get(':nth-child(7) > .nav-link').click();
        cy.wait(4000)
        //Click Rewards Role Super Admin
        cy.get(':nth-child(9) > .nav-link').click({force: true});
        //Click Add Button
        cy.get('.col.d-flex > a > .btn').click();
        //Select Companies For Role Super Admin 
        cy.get(companyRewardsp).type(company_rewards, { force: true }).type(enter);
        //Input Code
        cy.get(codeRewards).type(code_rewardsp, {force: true});
        //Input Name 
        cy.get(nameRewards).type(name_rewardsp);
        //Input Point
        cy.get(pointRewards).type(point_rewards);
        //Input Stock
        cy.get(stockRewards).type(stock_rewards);
        //Select Type
        cy.get(typepRewards).select(typeP_rewards);
        //Upload File
        const imagefile = 'aair.png';
        cy.get('[name="image"]').attachFile(imagefile);
        //Submit Data Rewards
        cy.get(btn_submitRewards).click();

        //Check Data Table Rewards
        //cy.get(name_tbr).should('have.text',name_rewardsp)
        //cy.wait(2000)
        //cy.get(company_tbr).should('have.text',company_rewards)
        //cy.get(type_tbr).should('have.text',typeP_rewards)
        cy.wait(2000)


        //Rewards Digital
        //Click Add Button
        cy.get('.col.d-flex > a > .btn').click({force: true});
        cy.wait(2000)
        cy.get(companyRewardsd).type(company_rewards, { force: true }).type(enter);
        //Input Code
        cy.get(codeRewards).type(code_rewardsd, {force: true});
        //Input Name 
        cy.get(nameRewards).type(name_rewardsd);
        //Input Point
        cy.get(pointRewards).type(point_rewards);
        //Input Stock
        cy.get(stockRewards).type(stock_rewards);
        //Select Type 
        cy.get(typepRewards).select(typeD_rewards);
        //Upload File
        const imagefile1 = 'dana.jpeg';
        cy.get('[name="image"]').attachFile(imagefile1);
        //Submit Data Rewards
        cy.get(btn_submitRewards).click();

        //Check Data Table Rewards
        cy.get(name_tbr).should('have.text',name_rewardsd)
        cy.get(company_tbr).should('have.text',company_rewards)


     }) 
})

// Variabel
const company_rewards = 'Scania Motor'
const code_rewardsp = 'RCP91'
const code_rewardsd = 'RWCD91'
const name_rewardsd = 'Glazd'
const name_rewardsp = 'Glazp'
const point_rewards = '1000'
const stock_rewards = '10'
const typeP_rewards = 'Physical'
const typeD_rewards = 'Digital'


// Object
const companyRewardsp = '#react-select-2-input'
const companyRewardsd = '#react-select-3-input'
const codeRewards = '#code'
const nameRewards = '#name'
const pointRewards = '#point'
const stockRewards = '#stock'
const typepRewards = '#type'
const btn_submitRewards = '.btn'
const enter = '{enter}'
const name_tbr = 'tbody > :nth-child(1) > :nth-child(2)'
const company_tbr = 'tbody > :nth-child(1) > :nth-child(5)'
const type_tbr = 'tbody > :nth-child(1) > :nth-child(7)'