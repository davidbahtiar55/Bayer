beforeEach(() => {
  cy.visit(Cypress.env("devUrl"));
  cy.get(user_form).type(Cypress.env("username"))
  cy.get(pass_form).type(Cypress.env("password"))
  cy.get(login_btn).click()
})

//Variable
const name_company = 'Droid INK'
const promo_name = 'Gudang Sapu Bersih'
const fUllname_members = 'Qa Frontline'
const category_catalog = 'Droid Category'
const type_catalog = 'Droid Type'
const start_date = '2022-06-15'
const end_date = '2022-06-30'
const promo_action1 = 'Discount order by fixed amount'
const promo_code = 'GSP001'
const discount_amount = '50000'
const customer_limit = '10'
const status_detail = 'Available'
const adress_order = 'Home'
const product_order = 'Daxa air'
const quantity_order = '2'
const delivery_order = 'JNE REG'
const payment_order = 'Credit Card'

//Object Ghoib
const productCatalog = '#react-select-3-input'
const companyPromo  = '#react-select-2-input'
const categoryCatalog = '#react-select-3-input'
const typeCatalog = '#react-select-4-input'
const retailerCode_form = '#react-select-8-input'
const uniquecode_form = '#react-select-9-input'
const promoAction = '#react-select-4-input'
const companyDetail = '#react-select-5-input'
const promonameDetail = '#react-select-6-input'
const memberOder = '#react-select-10-input'
const adressOrder = '#react-select-13-input'
const productOrder= '#react-select-11-input'
const deliveryOrder = '#react-select-14-input'
const promocodeOrder = '#react-select-12-input'
const paymentOrder = '#react-select-9-input'


describe('Promo to Order', () => {
  context('Promo to Order', function (tions) {
    it('Promo to Order With Valid Data', function () {
      //Add Promo
      cy.get(managePromo).click()
      cy.get(promo).click()
      cy.get(add_btn).click()
      cy.wait(4000)
      cy.get(companyPromo).type(name_company, { force: true }).wait(8000).type(enter)
      cy.get(promoName).type(promo_name, { force: true })
      cy.get(startDate).type(start_date)
      cy.get(endDate).type(end_date)
      cy.get(promoAction).type(promo_action1, { force: true }).wait(5000).type(enter)
      cy.get(discountAmount).type(discount_amount, { force: true }).wait(5000).type(enter)
      cy.get(promoCode).type(promo_code)
      cy.get(customerLimit).type(customer_limit)
      cy.get(submit_btn).click()
      //Check Promo Table
      cy.get(namePromo_tb).should('have.text', promo_name).wait(2000)
      cy.get(codePromo_tb).should('have.text', promo_code).wait(2000)
      cy.get(LimitPromo_tb).should('have.text', customer_limit).wait(2000)
      cy.get(actionPromo_tb).should('have.text', promo_action1).wait(2000)
      cy.get(companyPromo_tb).should('have.text', name_company).wait(2000)

      //Add Promo Detail
      cy.wait(5000)
      cy.get(promoDetail).click()
      cy.get(add_btn).click({ force: true })
      cy.get(companyDetail).type(name_company, { force: true }).wait(8000).type(enter)
      cy.get(promonameDetail).type(promo_name, { force: true }).wait(5000).type(enter)
      cy.get(promocodeDetail).type(promo_code, { force: true })
      cy.get(statusDetail).select(status_detail)
      cy.get(submit_btn).click().wait(5000)
      //Check Promo Detail Table
      cy.get(codeDetail_tb).should('have.text', promo_code).wait(2000)
      cy.get(nameDetail_tb).should('have.text', promo_name).wait(2000)
      cy.get(statusDetail_tb).should('have.text', status_detail).wait(2000)

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
      //Check Promo Detail Table
      // cy.get(codeDetail_tb).should('have.text', promo_code)
      // cy.get(nameDetail_tb).should('have.text', promo_name)
      // cy.get(statusDetail_tb).should('have.text', status_detail)
    })
  })
})


//Variable


//Object
//General
const user_form = '.mb-3 > .form-control'
const pass_form = '.mb-4 > .form-control'
const login_btn = ':nth-child(1) > .btn'
const add_btn = '.col.d-flex > a > .btn'
const enter = '{enter}'
const submit_btn = '.btn'
const submit_btn_transc = '.d-flex > .btn'
const checkout_btn = ':nth-child(5) > .btn'
const submitOrder_btn = '[type="submit"]'
const actionOrder = '[href="#/orders/payment/105"] > .btn'
const pay_btn = '.btn'

//Promo
const promoName = '#name'
const startDate = '#startDate'
const endDate  =  '#endDate'
const promoCode= '#promoCode'
const discountAmount = '#discountAmount'
const customerLimit = '#limitCustomer'
const namePromo_tb = 'tbody > :nth-child(1) > :nth-child(1)'
const codePromo_tb = 'tbody > :nth-child(1) > :nth-child(2)'
const LimitPromo_tb = 'tbody > :nth-child(1) > :nth-child(3)'
const actionPromo_tb = 'tbody > :nth-child(1) > :nth-child(4)'
const companyPromo_tb = 'tbody > :nth-child(1) > :nth-child(7)'

//Promo Detail
const statusDetail = '#status'
const promocodeDetail = '#promocode'
const codeDetail_tb = 'tbody > :nth-child(1) > :nth-child(1)'
const nameDetail_tb = 'tbody > :nth-child(1) > :nth-child(2)'
const statusDetail_tb = 'tbody > :nth-child(1) > :nth-child(3)'

//Orders
const addorder_btn = '.justify-content-end > a > .btn'
const quantityOrder = ':nth-child(2) > .form-control'




//Menu CMS
const managePromo = ':nth-child(5) > .nav-group-toggle'
const promo = '.show > .nav-group-items > :nth-child(1) > .nav-link'
const promoDetail = '.show > .nav-group-items > :nth-child(2) > .nav-link'
const actionsMenu = '.nav-group-items > :nth-child(4) > .nav-link'
const manageTransc = '[items="[object Object],[object Object],[object Object]"] > .nav-group-toggle'
const transc_Menu = '.show > .nav-group-items > :nth-child(1) > .nav-link'
const manageOrder = ':nth-child(8) > .nav-group-toggle'
const orderMenu = '.show > .nav-group-items > .nav-item > .nav-link'
