beforeEach(() => {
    cy.visit(Cypress.env("devUrl"));
    cy.get(user_form).type(Cypress.env("username"))
    cy.get(pass_form).type(Cypress.env("password"))
    cy.get(login_btn).click()
})

//Variable
const fUllname_members = 'Qa Frontline'
const adress_order = 'Home'
const product_order = 'Daxa air'
const quantity_order = '2'
const delivery_order = 'JNE REG'
const payment_order = 'Credit Card'
const promo_code = 'GAJ001'

//Object Ghoib
const memberOder = '#react-select-5-input'
const adressOrder = '#react-select-2-input'
const productOrder= '#react-select-6-input'
const paymentOrder = '#react-select-5-input'
const promocodeOrder = '#react-select-7-input'
const deliveryOrder = '#react-select-9-input'


describe('Promo to Order', () => {
    context('Promo to Order', function (tions) {
        it('Promo to Order With Valid Data', function () {
            //Add Order
            cy.wait(5000)
            cy.get(manageOrder).click()
            cy.get(orderMenu).click()
            cy.get(addorder_btn).click()
            cy.wait(4000)
            cy.get(memberOder).type(fUllname_members, { force: true }).wait(5000).type(enter)
            cy.get(adressOrder).type(adress_order, { force: true }).wait(5000).type(enter)
            cy.get(productOrder).type(product_order, { force: true }).wait(5000).type(enter)
            cy.get(quantityOrder).type(quantity_order, { force: true }).wait(5000)
            cy.get(checkout_btn).click()
            cy.wait(4000)
            cy.get(deliveryOrder).type(delivery_order, { force: true }).wait(5000).type(enter)
            cy.get(promocodeOrder).type(promo_code, { force: true }).wait(5000).type(enter)
            cy.get(paymentOrder).type(payment_order, { force: true }).wait(5000).type(enter)
            cy.get(submitOrder_btn).click()
            cy.wait(5000)
            cy.get(actionOrder).click()
            cy.get(pay_btn).click()
            // //Check Promo Detail Table
            // cy.get(codeDetail_tb).should('have.text', promo_code)
            // cy.get(nameDetail_tb).should('have.text', promo_name)
            // cy.get(statusDetail_tb).should('have.text', status_detail)

        })
    })
})

//Object
//General
const user_form = '.mb-3 > .form-control'
const pass_form = '.mb-4 > .form-control'
const login_btn = ':nth-child(1) > .btn'
const add_btn = '.col.d-flex > a > .btn'
const enter = '{enter}'
const submit_btn = '.btn'

const pay_btn = '.btn'
const actionOrder = '[href="#/orders/payment/105"] > .btn'
const submitOrder_btn = '[type="submit"]'
const submit_btn_transc = '.d-flex > .btn'
const checkout_btn = ':nth-child(5) > .btn'

//Menu CMS
const manageOrder = ':nth-child(8) > .nav-group-toggle'
const orderMenu = '.show > .nav-group-items > .nav-item > .nav-link'

//Orders
const addorder_btn = '.justify-content-end > a > .btn'
const quantityOrder = ':nth-child(2) > .form-control'
