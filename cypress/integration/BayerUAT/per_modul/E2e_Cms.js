beforeEach(() => {
    cy.visit(Cypress.env("baseUrl"));
    cy.get(user_form).type(Cypress.env("username"))
    cy.get(pass_form).type(Cypress.env("password"))
    cy.get(login_btn).click()
})

//UPDATE VARIABLE BEFORE RUN TEST
const nameCompany = 'InsigniaID 258'
const retailer_name = 'Insignia Store 258'
const fUllname_members = 'Tuti 258'
const phone_members = '081378849258'
const email_members = 'no258@mail.com'
const name_product = 'Phone 258'
const uniquecode = 'ATM258'
const name_actions ='Light 258'
const code_actions = 'ACT258'
const invoice1 = 'INV-258'
const invoice2 = 'INV-258'
const code_rewardsp = 'RCP258'
const name_rewardsp = 'Medali 258'

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

describe('Flow CMS', () => {
    context('Flow CMS', function () {
        it('Full Flow CMS', function () {
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
            // cy.get(':nth-child(2) > .nav-link').click();
            // cy.get('.col.d-flex > a > .btn').click()
            // cy.get(companyMembers).type(company_members, { force: true }).type(enter)
            // cy.get(fUllnameMembers).type(fUllname_members);
            // cy.get(phoneMembers).type(phone_members);
            // cy.get(emailMembers).type(email_members);
            // cy.get(passwordMembers).type(password_members);
            // cy.get(birthdateMembers).type(birthdate_members);
            // cy.get(submit_btn).click();
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

const code_rewardsd = 'RWCD99'
const name_rewardsd = 'Piala'
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
const selectCompanyp = '.css-ackcql'
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
const transaction_form = '#TotalTransaction'
const retailer_form = '#react-select-5-input'
// const retailerCode_form = '#react-select-10-input'
const addressretail_form = '#RetailAddress'
const date_form = '#TransactionDate'
const img_form = '#ReceiptImage'
const status_form = ':nth-child(9) > .col-sm-10 > .form-control'
const action_form = '#react-select-4-input'
const qty_form = '#Qty'
const addpoint_btn = '#root > div:nth-child(2) > div.wrapper.d-flex.flex-column.min-vh-100.bg-light > div.body.flex-grow-1.px-3 > div > div > div > div > div.card-body > form > div:nth-child(12) > div:nth-child(1) > div:nth-child(4) > div.col-sm-10 > button'
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
const edit_btn = '[href="#/redemptions/moderate/149"] > .btn'


const nameProduct = '#name'

