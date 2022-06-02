beforeEach(() => {
    cy.visit(Cypress.env("baseUrl"));
    cy.get(user_form).type(Cypress.env("username"))
    cy.get(pass_form).type(Cypress.env("password"))
    cy.get(login_btn).click()
    cy.wait(10000)
})

//UPDATE VARIABLE BEFORE RUN TEST
const uniquecode = 'ATM301'
const name_product = 'Phone 301'
const name_actions ='Light 301'
const code_actions = 'ACT301'
const fUllname_members = 'Tuti 301'
const invoice2 = 'INV-301'
const retailer_name = 'Insignia Store 301'

//Object Ghoib
const companyActions = '#react-select-3-input'
const productActions = '#react-select-4-input'
const type_form = '#react-select-6-input'
const memberCode_form = '#react-select-5-input'
const retailerCode_form = '#react-select-9-input'
const uniquecode_form = '#react-select-7-input'
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
            cy.get('#react-select-2-input').type(name_product, { force: true }).wait(2000).type(enter)
            cy.get(submit_btn).click()
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
            cy.get(submit_btn).click()
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

            cy.get(submit_btn).click()
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

//VAR
//Unique Code

//Action
const company_actions = 'Mandalika Tbk'
const point_actions = '100000'
const maxpoint_actions = '20000'
const product_actions = 'Terminal Satu 1'
const maxcapperiode_actions = '3'


//Transaction
const address_retail = 'Jl. Tebet Timur'
const date = '2022-05-12'

//Redeem
const descreward = 'Reward Reward Reward Reward Reward'
const receiverName = 'Putra Herlambang'
const receiverPhone = '085645213987'
const receiverAddress = 'Jl. Awas Banyak Anak Kecil No. 45A-B'
const reward_1 = 'Medali'
const qty2 = '30'
const waitingStatus = 'waiting'
const processStatus = 'process'
const shippingStatus = 'shipping'
const completedStatus = 'completed'
const rejectedStatus = 'rejected'

//Member
const company_members = 'Scania Motor'
const phone_members = '081378849258'
const email_members = 'no258@mail.com'
const password_members = 'coba123'
const birthdate_members = '2012-01-01'

//OBJ
//General
const submit_btn = '.btn'
const user_form = '.mb-3 > .form-control'
const pass_form = '.mb-4 > .form-control'
const login_btn = ':nth-child(1) > .btn'
const enter = '{enter}'

//Unique Code
const uniquecode_menu = ':nth-child(4) > .nav-link'

//Action
const nameActions = '#name'
const codeActions = '#code'
const pointActions = '#point'
const maxpointActions = '#capGeneration'
const maxcapperiodeActions = '#capGenerationDays'
const havemaxcapAction = '#haveCapGeneration'
const name_tba = 'tbody > :nth-child(1) > :nth-child(2)'
const code_tba = 'tbody > :nth-child(1) > :nth-child(3)'
const generationdays_tba = 'tbody > :nth-child(1) > :nth-child(6)'

//Transaction
const transc_menu = ':nth-child(5) > .nav-link'
const addtransc_btn = '.col.d-flex > a > .btn'
const invoice_form = '#InvoiceNumber'
const addressretail_form = '#RetailAddress'
const date_form = '#TransactionDate'

//Redeem
const redeem_menu = ':nth-child(10) > .nav-link'
const addRedeem_btn = '.col.d-flex > a > .btn'
const description_form = ':nth-child(2) > .form-control'
const receiverName_form = '#receiverName'
const receiverPhone_form = '#receiverPhone'
const receiverAddress_form = ':nth-child(6) > .form-control'
const qty_form_1 = 'tbody > :nth-child(1) > :nth-child(2) > .form-control'
const totalPoint_obj = '.col-12 > .d-flex'
const member_tb = 'tbody > :nth-child(1) > :nth-child(3)'
const receiverName_tb = 'tbody > :nth-child(1) > :nth-child(4)'
const totalPoint_tb = 'tbody > :nth-child(1) > :nth-child(9)'
const status_tb = 'tbody > :nth-child(1) > :nth-child(10)'

//Member
const companyMembers = '#react-select-2-input'
const fUllnameMembers = '#fullname'
const phoneMembers = '#phone'
const emailMembers = '#email'
const passwordMembers = '#password'
const birthdateMembers = '#birthdate'




