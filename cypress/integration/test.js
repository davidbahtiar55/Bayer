describe('Location Demo', function () {

    beforeEach(function () {
        cy.visit('https://crm-cms.stag-rewardx.insignia.co.id/#/tiering')
    });

    it('should have title tag with value Loyalty CMS', function () {
        cy.title().should('eq', 'Loyalty CMS');
    });

    it.skip('should redirect Menu UniqCode', function () {

        //uniquecode
        cy.get(':nth-child(4) > .nav-link').click();
        cy.get('.col.d-flex > a > .btn').click();
        cy.get('#code').type('ACB001');                     //UNIQUE
        cy.get('#statuss').select('Available');
        cy.get('.css-6j8wv5-Input').click();
        cy.contains('Modem USB').click(); 
        cy.get('.btn').click();  
      
        //Action
        cy.get(':nth-child(6) > .nav-link').click();
        cy.get('.col.d-flex > a > .btn').click();
        cy.get(companyActions).type(company_actions, { force: true }).type(enter)
        cy.get(nameActions).type(name_actions, { force: true })       //Unique
        cy.get(codeActions).type(code_actions)                        //Unique
        cy.get(pointActions).type(point_actions)
        cy.get(maxpointActions).type(maxpoint_actions)
        cy.wait(3000)
        cy.get(productActions).type(product_actions, { force: true }).type(enter)
        cy.get(maxcapperiodeActions).type(maxcapperiode_actions)
        cy.get(havemaxcapAction).check()
        cy.get(btnsubmitActions).click()

        cy.get(name_tba).should('have.text', name_actions)
        cy.get(code_tba).should('have.text', code_actions)
        cy.get(generationdays_tba).should('have.text', maxcapperiode_actions)  


        //Transaction
        cy.get(uniquecode_menu).click()
            cy.get('.col.d-flex > a > .btn').click()
            cy.get('#code').type(uniquecode)
            cy.get('#statuss').select('Available')
            cy.get('#react-select-2-input').type(action1, { force: true }).type(enter)
            cy.get('.btn').click()
            cy.get('tbody > :nth-child(1) > :nth-child(2)').should('have.text', 'Available')
            cy.wait(6000)

            cy.get(transc_menu).click()
            cy.get(addtransc_btn).click({ force: true })
            cy.get(type_form).type('Unique Code', { force: true }).type(enter)
            cy.get(memberCode_form).type(member, { force: true }).wait(2000).type(enter)
            cy.get(invoice_form).type(invoice2, { force: true })
            cy.get(retailerCode_form).type(retailer, { force: true }).type(enter)
            cy.get(addressretail_form).type(address_retail, { force: true })
            cy.get(date_form).type(date, { force: true })
            cy.get(uniquecode_form).type(uniquecode, { force: true }).type(enter)

            cy.get(sumbit_btn).click()
            cy.get('tbody > :nth-child(1) > :nth-child(1)').should('have.text', invoice2)
            cy.get('tbody > :nth-child(1) > :nth-child(6)').should('have.text', 'uniquecode')
            cy.get('tbody > :nth-child(1) > :nth-child(7)').should('have.text', member)
            cy.wait(6000)

            cy.get(uniquecode_menu).click()
            cy.get('tbody > :nth-child(1) > :nth-child(2)').should('have.text', 'Not Available')

        //Redeem
        cy.get(redeem_menu).click()
        // cy.wait(3000)
        cy.get(addRedeem_btn).click({ force: true })
        cy.get(member_form).type(member, { force: true }).type(enter)
        cy.get(description_form).type(desc)
        cy.get(receiverName_form).type(receiverName)
        cy.get(receiverPhone_form).type(receiverPhone)
        cy.get(receiverAddress_form).type(receiverAddress)
        cy.get(reward_form).type(reward_1, { force: true }).type(enter)
        cy.get(reward_form).type(reward_2, { force: true }).type(enter)
        cy.get(reward_form).type(reward_3, { force: true }).type(enter)
        cy.get(qty_form_1).clear().type(qty)
        cy.get(qty_form_2).clear().type(qty)
        cy.get(qty_form_3).clear().type(qty)

        cy.get(totalPoint_obj).should('have.text', totalPoint) //Check Grand Total Redemption

        cy.get(submit_btn).click()

        //Check redemption table after submit form
        cy.get(member_tb).should('have.text', member)
        cy.get(receiverName_tb).should('have.text', receiverName)
        cy.get(totalPoint_tb).should('have.text', '301.000')
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
        cy.get(btn_submitMembers).click();
        
    })
})


// Variabel
const company_actions = 'Mandalika Tbk'
const name_actions ='Light 1'
const code_actions = 'ACT172'
const point_actions = '10000'
const maxpoint_actions = '20000'
const product_actions = 'Terminal Satu 1'
const maxcapperiode_actions = '3'

// Object
const companyActions = '#react-select-2-input'
const nameActions = '#name'
const codeActions = '#code'
const pointActions = '#point'
const maxpointActions = '#capGeneration'
const productActions = '#react-select-3-input'
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
const user_form = '.mb-3 > .form-control'
const pass_form = '.mb-4 > .form-control'
const login_btn = ':nth-child(1) > .btn'
const uniquecode_menu = ':nth-child(4) > .nav-link'
const transc_menu = ':nth-child(5) > .nav-link'
const addtransc_btn = '.col.d-flex > a > .btn'
const memberReceipt_form = '#react-select-2-input'
const memberCode_form = '#react-select-3-input'
const enter = '{enter}'

const type_form = '#react-select-4-input'
const type_uniquecode = '//*[@value="uniquecode"]/input'
const invoice_form = '#InvoiceNumber'
const transaction_form = '#TotalTransaction'
const retailer_form = '#react-select-5-input'
const retailerCode_form = '#react-select-6-input'
// const retailerCode_form = '#react-select-10-input'
const addressretail_form = '#RetailAddress'
const date_form = '#TransactionDate'
const img_form = '#ReceiptImage'
const status_form = ':nth-child(9) > .col-sm-10 > .form-control'
const action_form = '#react-select-4-input'
const qty_form = '#Qty'
const addpoint_btn = '#root > div:nth-child(2) > div.wrapper.d-flex.flex-column.min-vh-100.bg-light > div.body.flex-grow-1.px-3 > div > div > div > div > div.card-body > form > div:nth-child(12) > div:nth-child(1) > div:nth-child(4) > div.col-sm-10 > button'
const sumbit_btn = '.d-flex > .btn'
const uniquecode_form = '#react-select-7-input'


//REDEEM
//Variable
const desc = 'Reward Reward Reward Reward Reward'
const receiverName = 'Putra Herlambang'
const receiverPhone = '085645213987'
const receiverAddress = 'Jl. Awas Banyak Anak Kecil No. 45A-B'
const reward_1 = 'GoPay'
const reward_2 = 'Voucher McD'
const reward_3 = 'Boneka Chucky'
const qty = '2'
const totalPoint = 'Total Point:  301.000'
const waitingStatus = 'waiting'
const processStatus = 'process'
const shippingStatus = 'shipping'
const completedStatus = 'completed'
const rejectedStatus = 'rejected'



//Object
const redeem_menu = ':nth-child(10) > .nav-link'
const addRedeem_btn = '.col.d-flex > a > .btn'
const member_form = '#react-select-2-input'
const description_form = ':nth-child(2) > .form-control'
const receiverName_form = '#receiverName'
const receiverPhone_form = '#receiverPhone'
const receiverAddress_form = ':nth-child(6) > .form-control'
const reward_form = '#react-select-3-input'
const qty_form_1 = 'tbody > :nth-child(1) > :nth-child(2) > .form-control'
const qty_form_2 = ':nth-child(2) > :nth-child(2) > .form-control'
const qty_form_3 = ':nth-child(3) > :nth-child(2) > .form-control'
const totalPoint_obj = '.col-12 > .d-flex'
const submit_btn = '.btn'
const member_tb = 'tbody > :nth-child(1) > :nth-child(3)'
const receiverName_tb = 'tbody > :nth-child(1) > :nth-child(4)'
const totalPoint_tb = 'tbody > :nth-child(1) > :nth-child(9)'
const status_tb = 'tbody > :nth-child(1) > :nth-child(10)'
const edit_btn = '[href="#/redemptions/moderate/149"] > .btn'

//MEMBER
// Variabel
const company_members = 'Scania Motor'
const fUllname_members = 'Tejo'
const phone_members = '081378849000'
const email_members = 'no21@mail.com'
const password_members = 'coba123'
const birthdate_members = '2012-01-01'

// Object
const companyMembers = '#react-select-2-input'
const fUllnameMembers = '#fullname'
const phoneMembers = '#phone'
const emailMembers = '#email'
const passwordMembers = '#password'
const birthdateMembers = '#birthdate'
const btn_submitMembers = '.btn'