describe('Flow CMS Company - Reward', () => {
    context('Flow CMS Company - Reward', function () {
        it('Flow CMS Company - Reward [POSITIVE]', function () {
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
            cy.get(':nth-child(2) > .nav-link').click({ force: true })
            cy.get('.col.d-flex > a > .btn').click({ force: true })
            cy.get(companyMembers).type(nameCompany, { force: true }).wait(3000).type(enter)
            cy.get(fUllnameMembers).type(fUllname_members)
            cy.get(phoneMembers).type(phone_members)
            cy.get(emailMembers).type(email_members)
            cy.get(passwordMembers).type(password_members)
            cy.get(birthdateMembers).type(birthdate_members)
            cy.get(submit_btn).click()

            //ADD RETAIL
            cy.wait(2000)
            cy.get(retailer_menu).click({ force: true })
            cy.get(add_btn).click({ force: true })
            cy.wait(2000)
            cy.get(company_form).type(nameCompany, { force: true }).type(enter)
            cy.get(name_form).type(retailer_name)
            cy.get(desc_form).type(desc)
            cy.get(submit_btn).click()
            cy.get(name_tb).should('have.text', retailer_name)

            //ADD PRODUCT
            cy.wait(2000)
            cy.get(':nth-child(3) > .nav-link').click({ force: true })
            cy.get('.col.d-flex > a > .btn').click({ force: true })
            cy.wait(4000)
            cy.get(companyProduct).type(nameCompany, { force: true }).type(enter)
            cy.wait(4000)
            cy.get(nameProduct).type(name_product)
            cy.get(descriptionProduct).type(description_product)
            cy.get(transactionProduct).type(transaction_product)
            cy.get(periodeProduct).type(periode_product)
            const imagefileProuct = 'aair.png'
            cy.get('[name="image"]').attachFile(imagefileProuct)
            cy.wait(10000)
            cy.get(btn_submitProduct).click()
            //Check Product table
            cy.wait(20000)
            cy.get(tb_name).should('have.text', name_product)
            cy.get(tb_description).should('have.text', description_product)
            cy.get(tb_periode).should('have.text', periode_product)
            cy.get(tb_company).should('have.text', nameCompany)

            //ADD REWADS
            //PHYSICAL
            cy.get(':nth-child(9) > .nav-link').click({ force: true })
            cy.get('.col.d-flex > a > .btn').click({ force: true })
            cy.get(companyRewardsp).type(nameCompany, { force: true }).type(enter)
            cy.get(codeRewards).type(code_rewardsp, { force: true })
            cy.get(nameRewards).type(name_rewardsp)
            cy.get(pointRewards).type(point_rewards)
            cy.get(stockRewards).type(stock_rewards)
            cy.get(typepRewards).select(typeP_rewards)
            const imagefilePhyisical = 'aair.png'
            cy.get('[name="image"]').attachFile(imagefilePhyisical)
            cy.wait(5000)
            cy.get(btn_submitRewards).click()
            cy.wait(5000)
        })
    })
})

//VAR




//OBJ
//General
const add_btn = '.col.d-flex > a > .btn'
const name_form = '#name'
const submit_btn = '.btn'

//Company
const company_menu = ':nth-child(7) > .nav-link'
const phone_form = '#phone'
const email_form = '#email'
const website_form = '#website'
const address_form = ':nth-child(5) > .form-control'
const name_tb = 'tbody > :nth-child(1) > :nth-child(2)'
const phone_tb = 'tbody > :nth-child(1) > :nth-child(3)'
const email_tb = 'tbody > :nth-child(1) > :nth-child(4)'

//Member
const companyMembers = '#react-select-2-input'
const fUllnameMembers = '#fullname'
const emailMembers = '#email'
const passwordMembers = '#password'
const birthdateMembers = '#birthdate'
const selectCompanyp = '.css-ackcql'

//Retail
const retailer_menu = ':nth-child(11) > .nav-link'