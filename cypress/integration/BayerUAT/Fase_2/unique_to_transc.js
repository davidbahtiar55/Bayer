beforeEach(() => {
  cy.visit(Cypress.env("devUrl"));
  cy.get(user_form).type(Cypress.env("username"))
  cy.get(pass_form).type(Cypress.env("password"))
  cy.get(login_btn).click()
})

//Variable
const uniquecode = 'DMA002'
const nameCompany = 'Droid INK'
const name_actions = 'DMA'
const code_actions = 'DMA002'
const fUllname_members = 'Qa Frontline'
const name_product = 'DMA'
const retailer_name = 'Droid'
const invoice2 = 'INV-201'

//Object Ghoib
const reward_form = '#react-select-3-input'
const productActions = '#react-select-2-input'
const companyActions = '#react-select-3-input'
const memberCode_form = '#react-select-5-input'
const type_form = '#react-select-6-input'
const retailerCode_form = '#react-select-8-input'
const uniquecode_form = '#react-select-9-input'
const productUnique = '#react-select-4-input'



describe('Unique to Transc', () => {
  context('Unique to Transc', function (tions) {
    it('Unique to Transc With Valid Data', function () {

      //Add Uniquecode
      cy.get(manageProduct).click()
      cy.get(uniquecodeMenu).click()
      cy.get(add_btn).click()
      cy.wait(5000)
      cy.get(codeUniquecode).type(uniquecode)                   //UNIQUE
      cy.get(statusUniquecode).select(status_Uniquecode)
      cy.get(productActions).type(name_product, { force: true }).wait(2000).type(enter)
      cy.get(submit_btn).click()
      cy.wait(4000)

      //Check Uniquecode Table
      cy.get(code_Tbu).should('have.text', uniquecode)
      cy.get(status_Tbu).should('have.text', status_Uniquecode)
      cy.get(product_Tbu).should('have.text', name_product)

      //Action
      cy.get(actionsMenu).click()
      cy.get(add_btn).click()
      cy.get(companyActions).type(nameCompany, { force: true }).wait(5000).type(enter)
      cy.get(nameActions).type(name_actions, { force: true })
      cy.get(codeActions).type(code_actions)
      cy.get(pointActions).type(point_actions)
      cy.get(maxpointActions).type(maxpoint_actions)
      cy.wait(3000)
      cy.get(productUnique).type(name_product, { force: true }).type(enter)
      cy.get(maxcapperiodeActions).type(maxcapperiode_actions)
      cy.get(havemaxcapAction).check()
      cy.get(submit_btn).click()
      cy.wait(7000)

      //Check Actions Table
      cy.get(name_tba).should('have.text', name_actions)
      cy.get(code_tba).should('have.text', code_actions)
      cy.get(generationdays_tba).should('have.text', maxcapperiode_actions)

      //Transaction Unique Code
      cy.get(manageTransc).click()
      cy.get(transc_Menu).click()
      cy.get(add_btn).click({ force: true })
      cy.get(memberCode_form).type(fUllname_members, { force: true }).wait(2000).type(enter)
      cy.get(type_form).type('Unique Code', { force: true }).type(enter)
      cy.get(invoice_form).type(invoice2, { force: true })
      cy.get(retailerCode_form).type(retailer_name, { force: true }).type(enter)
      cy.get(addressretail_form).type(address_retail, { force: true })
      cy.get(date_form).type(date, { force: true })
      cy.get(uniquecode_form).type(uniquecode, { force: true }).type(enter)
      cy.get(submit_btn_transc).click({ force: true })

      cy.get('tbody > :nth-child(1) > :nth-child(1)').should('have.text', invoice2)
      cy.get('tbody > :nth-child(1) > :nth-child(6)').should('have.text', 'uniquecode')
      cy.get('tbody > :nth-child(1) > :nth-child(7)').should('have.text', fUllname_members)
      cy.wait(6000)

      cy.get(manageProduct).click()
      cy.get(uniquecodeMenu).click()
      cy.get('tbody > :nth-child(1) > :nth-child(2)').should('have.text', 'Not Available')


    })
  })
})


//Variable
const status_Uniquecode = 'Available'

//Object
//General
const user_form = '.mb-3 > .form-control'
const pass_form = '.mb-4 > .form-control'
const login_btn = ':nth-child(1) > .btn'
const add_btn = '.col.d-flex > a > .btn'
const enter = '{enter}'
const submit_btn = '.btn'
const submit_btn_transc = '.d-flex > .btn'

//Uniquecode
const codeUniquecode = '#code'
const statusUniquecode = '#statuss'
const code_Tbu = 'tbody > :nth-child(1) > :nth-child(1)'
const status_Tbu = 'tbody > :nth-child(1) > :nth-child(2)'
const product_Tbu = 'tbody > :nth-child(1) > :nth-child(3)'

//Action
const nameActions = '#name'
const point_actions = '100000'
const maxpoint_actions = '20000'
const maxpointActions = '#capGeneration'
const codeActions = '#code'
const pointActions = '#point'
const maxcapperiodeActions = '#capGenerationDays'
const maxcapperiode_actions = '3'
const havemaxcapAction = '#haveCapGeneration'
const name_tba = 'tbody > :nth-child(1) > :nth-child(2)'
const code_tba = 'tbody > :nth-child(1) > :nth-child(3)'
const generationdays_tba = 'tbody > :nth-child(1) > :nth-child(6)'

//Transaction
const invoice_form = '#InvoiceNumber'
const addressretail_form = '#RetailAddress'
const address_retail = 'Jl. Tebet Timur'
const date = '2022-05-12'
const date_form = '#TransactionDate'


//Menu CMS
const manageProduct = '[items="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"] > .nav-group-toggle'
const uniquecodeMenu = '.nav-group-items > :nth-child(5) > .nav-link'
const actionsMenu = '.nav-group-items > :nth-child(4) > .nav-link'
const manageTransc = '[items="[object Object],[object Object],[object Object]"] > .nav-group-toggle'
const transc_Menu = '.show > .nav-group-items > :nth-child(1) > .nav-link'