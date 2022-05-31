beforeEach(() => {
    cy.visit(Cypress.env("baseUrl"));
    cy.get(user_form).type(Cypress.env("username"))
    cy.get(pass_form).type(Cypress.env("password"))
    cy.get(login_btn).click()
})

//UPDATE VARIABLE BEFORE RUN TEST
const nameCompany = 'InsigniaID 259'
const retailer_name = 'Insignia Store 259'
const fUllname_members = 'Tuti 259'
const phone_members = '081378849259'
const email_members = 'no259@mail.com'
const name_product = 'Phone 258'
const uniquecode = 'ATM258'
const name_actions = 'Light 258'
const code_actions = 'ACT259'
const invoice1 = 'INV-259'
const invoice2 = 'INV-259'
const code_rewardsp = 'RCP259'
const name_rewardsp = 'Medali 259'

//Object Ghoib
const companyRewardsp = '#react-select-5-input'
const companyActions = '#react-select-7-input'
const type_form = '#react-select-10-input'
const memberCode_form = '#react-select-9-input'
const retailerCode_form = '#react-select-12-input'
const uniquecode_form = '#react-select-13-input'
const productActions = '#react-select-8-input'
const member_form = '#react-select-14-input'
const reward_form = '#react-select-15-input'

describe('Flow CMS Uniquecode - Member Detail', () => {
    context('Flow CMS Uniquecode - Member Detail', function () {
        it('Flow CMS Uniquecode - Member Detail [POSITIVE]', function () {
            //Uniquecode
            cy.get(':nth-child(4) > .nav-link').click({ force: true })
            cy.wait(5000)
            cy.get('.col.d-flex > a > .btn').click({ force: true })
            cy.wait(5000)
            cy.get('#code').type(uniquecode)                   //UNIQUE
            cy.get('#statuss').select('Available')
            cy.get('#react-select-6-input').type(name_product, { force: true }).wait(2000).type(enter)
            cy.get('.btn').click()
            cy.wait(4000)

            //Action
            cy.get(':nth-child(6) > .nav-link').click()
            cy.get('.col.d-flex > a > .btn').click()
            cy.get(companyActions).type(company_actions, { force: true }).type(enter)
            cy.get(nameActions).type(name_actions, { force: true })
            cy.get(codeActions).type(code_actions)
            cy.get(pointActions).type(point_actions)
            cy.get(maxpointActions).type(maxpoint_actions)
            cy.wait(3000)
            cy.get(productActions).type(product_actions, { force: true }).type(enter)
            cy.get(maxcapperiodeActions).type(maxcapperiode_actions)
            cy.get(havemaxcapAction).check()
            cy.get(btnsubmitActions).click()
            cy.wait(7000)

            //Check Actions Table
            cy.get(name_tba).should('have.text', name_actions)
            cy.get(code_tba).should('have.text', code_actions)
            cy.get(generationdays_tba).should('have.text', maxcapperiode_actions)

            //Transaction Unique Code
            cy.get(transc_menu).click()
            cy.wait(7000)
            cy.get(addtransc_btn).click({ force: true })
            cy.get(type_form).type('Unique Code', { force: true }).type(enter)
            cy.get(memberCode_form).type(fUllname_members, { force: true }).wait(2000).type(enter)
            cy.get(invoice_form).type(invoice2, { force: true })
            cy.get(retailerCode_form).type(retailer_name, { force: true }).type(enter)
            cy.get(addressretail_form).type(address_retail, { force: true })
            cy.get(date_form).type(date, { force: true })
            cy.get(uniquecode_form).type(uniquecode, { force: true }).type(enter)

            cy.get(sumbit_btn).click()
            cy.get('tbody > :nth-child(1) > :nth-child(1)').should('have.text', name_actions)
            cy.get('tbody > :nth-child(1) > :nth-child(6)').should('have.text', 'uniquecode')
            cy.get('tbody > :nth-child(1) > :nth-child(7)').should('have.text', fUllname_members)
            cy.wait(6000)

            cy.get(uniquecode_menu).click()
            cy.get('tbody > :nth-child(1) > :nth-child(2)').should('have.text', 'Not Available')

            //Redeem
            cy.wait(4000)
            cy.get(redeem_menu).click()
            cy.wait(3000)
            cy.get(addRedeem_btn).click({ force: true })
            cy.get(member_form).type(fUllname_members).type(enter)

            // cy.get(member_form).type(fUllname_members,{ force: true }).type(enter)
            cy.get(description_form).type(descreward)
            cy.get(receiverName_form).type(receiverName)
            cy.get(receiverPhone_form).type(receiverPhone)
            cy.get(receiverAddress_form).type(receiverAddress)
            cy.get(reward_form).type(reward_1, { force: true }).type(enter)
            cy.get(qty_form_1).clear().type(qty2)
            cy.get(totalPoint_obj).should('have.text', 'Total Point:  30.000') //Check Grand Total Redemption
            cy.get(submit_btn).click()

            //Check redemption table after submit form
            cy.get(member_tb).should('have.text', fUllname_members)
            cy.get(receiverName_tb).should('have.text', receiverName)
            cy.get(totalPoint_tb).should('have.text', '300.000')
            cy.get(status_tb).should('have.text', waitingStatus)

            //MEMBER
            cy.get(':nth-child(2) > .nav-link').click();
            cy.get('.col.d-flex > a > .btn').click()
            cy.get(companyMembers).type(company_members, { force: true }).type(enter)
            cy.get(fUllnameMembers).type(fUllname_members);
            cy.get(phoneMembers).type(phone_members);
            cy.get(emailMembers).type(email_members);
            cy.get(passwordMembers).type(password_members);
            cy.get(birthdateMembers).type(birthdate_members);
            cy.get(submit_btn).click();
        })
    })
})


//Variable
//Company
const phone = '085325684999'
const email = 'insigniaid01@gmail.com'
const website = 'www.insignia.co.id'
const address = 'Bonjer Raya'

//Retailer
const desc = 'Retail Retail Retail'
const company_members = 'Scania Motor'

//Member
const password_members = 'coba123'
const birthdate_members = '2012-01-01'

//Product
const description_product = 'Lorem Ipsum'
const transaction_product = '17000'
const periode_product = '2022-01-01'
const company_product = 'Mandalika Tbk'

//REWADS PHYSICAL & DIGITAL
const company_rewards = 'Scania Motor'
const code_rewardsd = 'RWCD65'
const name_rewardsd = 'Podium'
const point_rewards = '1000'
const stock_rewards = '10'
const typeP_rewards = 'Physical'
const typeD_rewards = 'Digital'

//Object
const user_form = '.mb-3 > .form-control'
const pass_form = '.mb-4 > .form-control'
const login_btn = ':nth-child(1) > .btn'
const fUllnameMembers = '#fullname'
const phoneMembers = '#phone'
const emailMembers = '#email'
const passwordMembers = '#password'
const birthdateMembers = '#birthdate'

//ACTION
// Variabel
const company_actions = 'Mandalika Tbk'
const point_actions = '100000'
const maxpoint_actions = '20000'
const product_actions = 'Terminal Satu 1'
const maxcapperiode_actions = '3'

// Object
const nameActions = '#name'
const codeActions = '#code'
const pointActions = '#point'
const maxpointActions = '#capGeneration'
const maxcapperiodeActions = '#capGenerationDays'
const havemaxcapAction = '#haveCapGeneration'
const btnsubmitActions = '.btn'
const name_tba = 'tbody > :nth-child(1) > :nth-child(2)'
const code_tba = 'tbody > :nth-child(1) > :nth-child(3)'
const point_tba = 'tbody > :nth-child(1) > :nth-child(4)'
const maxcap_tba = 'tbody > :nth-child(1) > :nth-child(5)'
const generationdays_tba = 'tbody > :nth-child(1) > :nth-child(6)'
const product_tba = 'tbody > :nth-child(1) > :nth-child(7)'

//TRANSACTION
//Variable
const member = 'Dimas WA'
const type = 'Unique Code'
const total_transc = '15000000'
const retailer = 'ALFAMART'
const address_retail = 'Jl. Tebet Timur'
const date = '2022-05-12'
const nota1 = 'img/nota1.jpeg'
const nota2 = 'img/nota2.jpg'
const status = 'Approve'
const action1 = 'Sepatu Dewasa'
const action2 = 'Dompet Keren'
const qty1 = '20'
const qty2 = '30'

//Object
const uniquecode_menu = ':nth-child(4) > .nav-link'
const transc_menu = ':nth-child(5) > .nav-link'
const addtransc_btn = '.col.d-flex > a > .btn'
const memberReceipt_form = '#react-select-2-input'
const enter = '{enter}'
const type_uniquecode = '//*[@value="uniquecode"]/input'
const invoice_form = '#InvoiceNumber'
// // const retailerCode_form = '#react-select-10-input'
const addressretail_form = '#RetailAddress'
const date_form = '#TransactionDate'
const sumbit_btn = '.d-flex > .btn'

//REDEEM
//Variable
const descreward = 'Reward Reward Reward Reward Reward'
const receiverName = 'Putra Herlambang'
const receiverPhone = '085645213987'
const receiverAddress = 'Jl. Awas Banyak Anak Kecil No. 45A-B'
const reward_1 = 'Medali'
const qty = '2'
const totalPoint = 'Total Point:  301.000'
const waitingStatus = 'waiting'
const processStatus = 'process'
const shippingStatus = 'shipping'
const completedStatus = 'completed'
const rejectedStatus = 'rejected'

//Object
const addRedeem_btn = '.col.d-flex > a > .btn'
const description_form = ':nth-child(2) > .form-control'
const receiverAddress_form = ':nth-child(6) > .form-control'
const qty_form_1 = 'tbody > :nth-child(1) > :nth-child(2) > .form-control'
const totalPoint_obj = '.col-12 > .d-flex'
const receiverName_tb = 'tbody > :nth-child(1) > :nth-child(4)'


