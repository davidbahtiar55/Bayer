//OBJECT GHOIB
const companyRewardsp = '#react-select-11-input'

//UPDATE VARIABLE BEFORE RUN TEST
const nameCompany = 'InsigniaID 408'
const fUllname_members = 'Tuti 408'
const phone_members = '081378849408'
const email_members = 'no408@mail.com'
const retailer_name = 'Insignia Store 408'
const name_product = 'Phone 408'
const code_rewardsp = 'RCP408'
const name_rewardsp = 'Medali 408'

beforeEach(() => {
    cy.visit(Cypress.env("devUrl"));
    cy.get(user_form).type(Cypress.env("username"))
    cy.get(pass_form).type(Cypress.env("password"))
    cy.get(login_btn).click()
})

describe('Flow CMS Company - Reward', () => {
    context('Flow CMS Company - Reward', function () {
        it('Flow CMS Company - Reward [POSITIVE]', function () {
            //ADD COMPANY
            cy.get(mng_company).click()
            cy.get(company_menu).click()
            cy.get(add_btn).click()
            cy.get(name_form).type(nameCompany)
            cy.get(phone_form).type(phone)
            cy.get(email_form).type(email)
            cy.get(website_form).type(website)
            // cy.get(address_form).type(address)
            cy.get(submit_btn).click()
            //Check companies table
            cy.get(name_tb).should('have.text', nameCompany)
            cy.get(phone_tb).should('have.text', phone)
            cy.get(email_tb).should('have.text', email)

            //ADD MEMBER
            cy.wait(2000)
            cy.get(mng_member).click()            
            cy.get(member_menu).click({ force: true })
            cy.get('.col.d-flex > a > .btn').click({ force: true }).wait(3000)
            cy.get(companyMembers).type(nameCompany, { force: true }).wait(3000).type(enter)
            cy.get(fUllnameMembers).type(fUllname_members)
            cy.get(phoneMembers).type(phone_members)
            cy.get(emailMembers).type(email_members)
            cy.get(passwordMembers).type(password_members)
            cy.get(birthdateMembers).type(birthdate_members)
            cy.get(submit_btn).click()
            cy.get(nameMember_tb).should('have.text', fUllname_members)

            cy.get(detail_btn).last().click()
            cy.wait(5000)
            cy.get(address_menu).click( { force: true })
            cy.get(addAddress_button).click()
            cy.get(province_form).type(province, { force: true }).wait(3000).type(enter)
            cy.get(city_form).type(city, { force: true } ).wait(3000).type(enter)
            cy.get(suburb_form).type(suburb, { force: true } ).wait(3000).type(enter)
            cy.get(area_form).type(area, { force: true } ).wait(3000).type(enter)
            cy.get(memberAddress_form).type(memberAddress)
            cy.get(addressName_form).type(addressName)
            cy.get(submit_btn).click()
            cy.wait(5000)

            //ADD RETAIL
            cy.wait(2000)
            cy.get(mng_transc).click()            
            cy.get(retailer_menu).click({ force: true })
            cy.get(add_btn).click({ force: true })
            cy.wait(2000)
            cy.get(company_form).type(nameCompany, { force: true }).type(enter)
            cy.get(name_form).type(retailer_name)
            cy.get(desc_form).type(desc)
            cy.get(submit_btn).click()
            cy.get(name_tb).should('have.text', retailer_name)

            //ADD REWADS
            //PHYSICAL
            cy.get(mng_redeem).click()            
            cy.get(reward_menu).click({ force: true })
            cy.get('.col.d-flex > a > .btn').click({ force: true })
            cy.get(companyRewardsp).type(nameCompany, { force: true }).wait(3000).type(enter)
            cy.get(codeRewards).type(code_rewardsp, { force: true })
            cy.get(nameRewards).type(name_rewardsp)
            cy.get(pointRewards).type(point_rewards)
            cy.get(stockRewards).type(stock_rewards)
            cy.get(typepRewards).select(typeP_rewards)
            const imagefilePhyisical = 'aair.png'
            cy.get('[name="image"]').attachFile(imagefilePhyisical)
            cy.wait(5000)
            cy.get(submit_btn).click()
            cy.wait(5000)
        })
    })
})

//VAR
//Company
const phone = '085325684999'
const email = 'insigniaid01@gmail.com'
const website = 'www.insignia.co.id'
const address = 'Bonjer Raya'

//Member
const password_members = 'coba123'
const birthdate_members = '2012-01-01'
const province = 'DKI Jakarta'
const city = 'Jakarta Selatan'
const suburb = 'Tebet'
const area = 'Tebet Timur'
const memberAddress = 'Jl. Awas Banyak Anak Kecil'
const addressName = 'Rumah'


//Retailer
const desc = 'Retail Retail Retail'

//Reward
const point_rewards = '1000'
const stock_rewards = '10'
const typeP_rewards = 'Physical'
const typeD_rewards = 'Digital'

//OBJ
//General
const add_btn = '.col.d-flex > a > .btn'
const name_form = '#name'
const submit_btn = '.btn'
const name_tb = 'tbody > :nth-child(1) > :nth-child(2)'
const enter = '{enter}'
const user_form = '.mb-3 > .form-control'
const pass_form = '.mb-4 > .form-control'
const login_btn = ':nth-child(1) > .btn'
const mng_transc = '[items="[object Object],[object Object],[object Object]"] > .nav-group-toggle'

//Company
const mng_company = ':nth-child(2) > .nav-group-toggle'
const company_menu = '.show > .nav-group-items > :nth-child(1) > .nav-link'
const phone_form = '#phone'
const email_form = '#email'
const website_form = '#website'
const address_form = ':nth-child(5) > .form-control'
const phone_tb = 'tbody > :nth-child(1) > :nth-child(3)'
const email_tb = 'tbody > :nth-child(1) > :nth-child(4)'

//Member
const mng_member = ':nth-child(3) > .nav-group-toggle'
const member_menu = '.show > .nav-group-items > .nav-item > .nav-link'
const companyMembers = '#react-select-2-input'
const fUllnameMembers = '#fullname'
const phoneMembers = '#phone'
const emailMembers = '#email'
const passwordMembers = '#password'
const birthdateMembers = '#birthdate'
const selectCompanyp = '.css-ackcql'
const nameMember_tb = 'tbody > :nth-child(1) > :nth-child(1)'

const detail_btn = '#root > div:nth-child(2) > div.wrapper.d-flex.flex-column.min-vh-100.bg-light > div.body.flex-grow-1.px-3 > div > div > div:nth-child(2) > div > div > div.my-4 > div.row.gap-2 > div.table-responsive > table > tbody > tr:nth-child(1) > td:nth-child(7) > div > a:nth-child(2) > button'
const address_menu = '.nav > :nth-child(5) > .nav-link'
const addAddress_button = 'a > .btn'
const province_form = '#react-select-6-input'
const city_form = '#react-select-7-input'
const suburb_form = '#react-select-8-input'
const area_form = '#react-select-9-input'
const memberAddress_form = ':nth-child(5) > .form-control'
const addressName_form = '#addressName'
const mainAddress_toggle = '#isMainAddress'



//Retail
const retailer_menu = '.show > .nav-group-items > :nth-child(2) > .nav-link'
const company_form = '#react-select-10-input'
const desc_form = ':nth-child(3) > .form-control'

//Reward
const mng_redeem = ':nth-child(7) > .nav-group-toggle'
const reward_menu = '.show > .nav-group-items > :nth-child(1) > .nav-link'
const codeRewards = '#code'
const nameRewards = '#name'
const pointRewards = '#point'
const stockRewards = '#stock'
const typepRewards = '#type'