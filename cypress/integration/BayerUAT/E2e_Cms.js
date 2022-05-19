beforeEach(() => {
    cy.visit(Cypress.env("baseUrl"));
    cy.get(user_form).type(Cypress.env("username"))
    cy.get(pass_form).type(Cypress.env("password"))
    cy.get(login_btn).click()
})

describe('Company - Retail', () => {
    context('Add Company - Add Retail', function () {
        it('Add Company - Add Retail', function () {
            //ADD COMPANY
            cy.get(company_menu).click()
            cy.get(add_btn).click()
            cy.get(name_form).type(nameCompany)
            cy.get(phone_form).type(phone)
            cy.get(email_form).type(email)
            cy.get(website_form).type(website)
            cy.get(address_form).type(address)
            cy.get(submit_btn).click()
            //Check companies table
            cy.get(name_tb).should('have.text', nameCompany)
            cy.get(phone_tb).should('have.text', phone)
            cy.get(email_tb).should('have.text', email)

            //ADD MEMBER
            cy.wait(2000)
            cy.get(':nth-child(2) > .nav-link').click();
            cy.get('.col.d-flex > a > .btn').click();
            cy.get(companyMembers).type(company_members, { force: true }).type(enter)
            cy.get(fUllnameMembers).type(fUllname_members);
            cy.get(phoneMembers).type(phone_members);
            cy.get(emailMembers).type(email_members);
            cy.get(passwordMembers).type(password_members);
            cy.get(birthdateMembers).type(birthdate_members);
            cy.get(btn_submitMembers).click();

            //ADD RETAIL
            cy.wait(2000)
            cy.get(retailer_menu).click()
            cy.get(add_btn).click()
            cy.wait(2000)
            cy.get(company_form).type(nameCompany, { force: true }).type(enter)
            cy.get(name_form).type(retailer_name)
            cy.get(desc_form).type(desc)
            cy.get(submit_btn).click()
            cy.get(name_tb).should('have.text', retailer_name)

            //ADD PRODUCT
            cy.wait(2000)
            cy.get(':nth-child(3) > .nav-link').click({ force: true });
            cy.get('.col.d-flex > a > .btn').click({ force: true });
            cy.wait(4000)
            cy.get(companyProduct).type(company_product, { force: true }).type(enter)
            cy.wait(4000)
            cy.get(nameProduct).type(name_product);
            cy.get(descriptionProduct).type(description_product);
            cy.get(transactionProduct).type(transaction_product);
            cy.get(periodeProduct).type(periode_product);
            const imagefileProuct = 'aair.png';
            cy.get('[name="image"]').attachFile(imagefileProuct);
            cy.get(btn_submitProduct).click();
            //Check Product table
            cy.get(tb_name).should('have.text', name_product)
            cy.wait(4000)
            cy.get(tb_description).should('have.text', description_product)
            cy.get(tb_transcation).should('have.text', transaction_product)
            cy.get(tb_periode).should('have.text', periode_product)
            cy.get(tb_company).should('have.text', company_product)

            //ADD REWADS
            //PHYSICAL
            cy.get(':nth-child(9) > .nav-link').click({ force: true });
            cy.get('.col.d-flex > a > .btn').click();
            cy.get(companyRewardsp).type(company_rewards, { force: true }).type(enter);
            cy.get(codeRewards).type(code_rewardsp, { force: true });
            cy.get(nameRewards).type(name_rewardsp);
            cy.get(pointRewards).type(point_rewards);
            cy.get(stockRewards).type(stock_rewards);
            cy.get(typepRewards).select(typeP_rewards);
            const imagefilePhyisical = 'aair.png';
            cy.get('[name="image"]').attachFile(imagefilePhyisical);
            cy.get(btn_submitRewards).click();
            cy.wait(2000)

            //DIGITAL
            cy.get('.col.d-flex > a > .btn').click({ force: true });
            cy.wait(2000)
            cy.get(companyRewardsd).type(company_rewards, { force: true }).type(enter);
            cy.get(codeRewards).type(code_rewardsd, { force: true });
            cy.get(nameRewards).type(name_rewardsd);
            cy.get(pointRewards).type(point_rewards);
            cy.get(stockRewards).type(stock_rewards);
            cy.get(typepRewards).select(typeD_rewards);
            const imagefileDigital = 'dana.jpeg';
            cy.get('[name="image"]').attachFile(imagefileDigital);
            cy.get(btn_submitRewards).click();
            //Check Data Table Rewards
            cy.get(name_tbr).should('have.text', name_rewardsd)
            cy.get(company_tbr).should('have.text', company_rewards)

        })
    })
})

//Variable
//Company
const nameCompany = 'InsigniaID 99'
const phone = '085325684999'
const email = 'insigniaid01@gmail.com'
const website = 'www.insignia.co.id'
const address = 'Bonjer Raya'
//Retailer
const retailer_name = 'Insignia Store 99'
const desc = 'Retail Retail Retail'
const company_members = 'Scania Motor'
//Member
const fUllname_members = 'Tuti'
const phone_members = '081378849099'
const email_members = 'no99@mail.com'
const password_members = 'coba123'
const birthdate_members = '2012-01-01'
//Product
const name_product = 'Phone 99'
const description_product = 'Lorem Ipsum'
const transaction_product = '17000'
const periode_product = '2022-01-01'
const company_product = 'Mandalika Tbk'
//REWADS PHYSICAL & DIGITAL
const company_rewards = 'Scania Motor'
const code_rewardsp = 'RCP99'
const code_rewardsd = 'RWCD99'
const name_rewardsd = 'Piala'
const name_rewardsp = 'Medali'
const point_rewards = '1000'
const stock_rewards = '10'
const typeP_rewards = 'Physical'
const typeD_rewards = 'Digital'

//Object
const user_form = '.mb-3 > .form-control'
const pass_form = '.mb-4 > .form-control'
const login_btn = ':nth-child(1) > .btn'
const company_menu = ':nth-child(7) > .nav-link'
const retailer_menu = ':nth-child(11) > .nav-link'
const add_btn = '.col.d-flex > a > .btn'
const name_form = '#name'
const phone_form = '#phone'
const email_form = '#email'
const website_form = '#website'
const address_form = ':nth-child(5) > .form-control'
const submit_btn = '.btn'
const name_tb = 'tbody > :nth-child(1) > :nth-child(2)'
const phone_tb = 'tbody > :nth-child(1) > :nth-child(3)'
const email_tb = 'tbody > :nth-child(1) > :nth-child(4)'
const company_form = '#react-select-3-input'
const desc_form = ':nth-child(3) > .form-control'
const companyMembers = '#react-select-2-input'
const fUllnameMembers = '#fullname'
const phoneMembers = '#phone'
const emailMembers = '#email'
const passwordMembers = '#password'
const birthdateMembers = '#birthdate'
const btn_submitMembers = '.btn'
const selectCompanyp = '.css-ackcql'
const nameProduct = '#name'
const companyProduct = '#react-select-4-input'
const descriptionProduct = ':nth-child(3) > .form-control'
const transactionProduct = '#transaction'
const periodeProduct = '#periode'
const btn_submitProduct = '.btn'
const tb_name = 'tbody > :nth-child(1) > :nth-child(2)'
const tb_description = 'tbody > :nth-child(1) > :nth-child(3)'
const tb_transcation = 'tbody > :nth-child(1) > :nth-child(4)'
const tb_periode = 'tbody > :nth-child(1) > :nth-child(5)'
const tb_company = 'tbody > :nth-child(1) > :nth-child(6)'
const companyRewardsp = '#react-select-2-input'
const companyRewardsd = '#react-select-3-input'
const codeRewards = '#code'
const nameRewards = '#name'
const pointRewards = '#point'
const stockRewards = '#stock'
const typepRewards = '#type'
const btn_submitRewards = '.btn'
const name_tbr = 'tbody > :nth-child(1) > :nth-child(2)'
const company_tbr = 'tbody > :nth-child(1) > :nth-child(5)'
const type_tbr = 'tbody > :nth-child(1) > :nth-child(7)'
const enter = '{enter}'