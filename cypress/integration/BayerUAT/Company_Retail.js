beforeEach(() => {
    cy.visit(Cypress.env("baseUrl"));
    cy.get(user_form).type(Cypress.env("username"))
    cy.get(pass_form).type(Cypress.env("password"))
    cy.get(login_btn).click()
})

describe('Company - Retail', () => {
  context('Add Company - Add Retail', function () {
    it('Add Company - Add Retail', function () {
      cy.get(company_menu).click()
      cy.get(add_btn).click()
      cy.get(name_form).type(name)
      cy.get(phone_form).type(phone)
      cy.get(email_form).type(email)
      cy.get(website_form).type(website)
      cy.get(address_form).type(address)
      cy.get(submit_btn).click()

      //Check companies table
      cy.get(name_tb).should('have.text', name)
      cy.get(phone_tb).should('have.text', phone)
      cy.get(email_tb).should('have.text', email)
      
      //ADD RETAIL
      cy.get(retailer_menu).click()
      cy.get(add_btn).click()
      cy.get(company_form).type(name, { force: true }).type(enter)
      cy.get(name_form).type(retailer_name)
      cy.get(desc_form).type(desc)
      cy.get(submit_btn).click()
      cy.get(name_tb).should('have.text', retailer_name)

        
    })



  })
})

//Variable
const name = 'InsigniaID 01'
const phone = '085325684987'
const email = 'insigniaid01@gmail.com'
const website = 'www.insignia.co.id'
const address = 'Bonjer Raya'
const retailer_name = 'Insignia Store'
const desc = 'Retail Retail Retail'

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
const company_form = '#react-select-2-input'
const desc_form = ':nth-child(3) > .form-control'
const enter = '{enter}'