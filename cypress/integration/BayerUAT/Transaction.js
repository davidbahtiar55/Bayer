//<reference types="Cypress"/>

//PLEASE UPDATE THIS VARIBLE BEFORE RUN TEST 
const invoice1 = 'INV-022'
const invoice2 = 'INV-022'
const uniquecode = 'GJU022'


beforeEach(() => {
    cy.visit(Cypress.env("baseUrl"));
    cy.get(user_form).type(Cypress.env("username"))
    cy.get(pass_form).type(Cypress.env("password"))
    cy.get(login_btn).click()
    cy.wait(6000)
})

describe('Transaction', () => {
    context('Upload Receipt', function () {
        it('Upload with Valid Data', function () {
            cy.get(transc_menu).click()
            cy.get(addtransc_btn).click({ force: true })
            cy.get(memberReceipt_form).type(member, { force: true }).type(enter)
            cy.get(invoice_form).type(invoice1, { force: true })
            cy.get(transaction_form).type(total_transc, { force: true })
            cy.get(retailer_form).type(retailer, { force: true }).type(enter)
            cy.get(addressretail_form).type(address_retail, { force: true })
            cy.get(date_form).type(date, { force: true })
            cy.get(img_form).selectFile('cypress/fixtures/img/nota2.jpg', { action: 'drag-drop' })
            cy.get(status_form).select(status)

            // ADD Point (Mobil Diecast)
            cy.get(action_form).type(action1, { force: true }).type(enter)
            cy.get(qty_form).type(qty1, { force: true })
            cy.get(addpoint_btn).click()
            cy.get(qty_form).clear()
            cy.get('tbody > tr > :nth-child(1)').should('have.text', 'Mobil Diecast')   
            cy.get('tbody > tr > :nth-child(3)').should('have.text', '11000')

            // ADD Point (Baju Baja)
            cy.get(action_form).type(action2, { force: true }).type(enter)
            cy.get(qty_form).type(qty2, { force: true })
            cy.get(addpoint_btn).click()
            cy.get('tbody > :nth-child(2) > :nth-child(1)').should('have.text', 'Baju Baja')
            cy.get('tbody > :nth-child(2) > :nth-child(3)').should('have.text', '10500')
            cy.wait(5000)

            cy.get(sumbit_btn).click()
            cy.get('tbody > :nth-child(1) > :nth-child(1)').should('have.text', invoice1)
            cy.get('tbody > :nth-child(1) > :nth-child(6)').should('have.text', 'upload-receipt')
            cy.get('tbody > :nth-child(1) > :nth-child(7)').should('have.text', member)

        })

    })

    context('Unique Code', function () {
        it('Input with Valid Data', function () {

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


        })

    })
})

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
const action1 = 'Mobil Diecast'
const action2 = 'Baju Baja'
const qty1 = '2'
const qty2 = '3'


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
