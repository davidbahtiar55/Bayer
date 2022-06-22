
//UPDATE VARIABLE BEFORE RUN TEST
const nameCompany = 'InsigniaID 404'

beforeEach(() => {
    cy.visit(Cypress.env("devUrl"));
    cy.get(user_form).type(Cypress.env("username"))
    cy.get(pass_form).type(Cypress.env("password"))
    cy.get(login_btn).click()
})

describe('Flow CMS Company - Product', () => {
    it('Flow CMS Company - Product [POSITIVE]', function () {
        cy.get(mng_product).click()

        //Inventory
        cy.get(product_invt).click()
        cy.get(add_btn).click()
        // cy.get(invtComp_form).type(nameCompany).type(enter)
        // cy.get(product_catalog).click()
        // cy.get(product_invt).click()
        // cy.get(add_btn).click()
        cy.get(invtComp_form).type(nameCompany).type(enter)
        cy.get(invtCtg_form).type(catalogName).type(enter)
        cy.get(invt_form).type(idInvt).type(enter)
        cy.get(stock_form).type(stock).type(enter)
        cy.get(unit_form).type(unit).type(enter)
        cy.get(submit_btn).click({ force: true })
        cy.wait(3000)
        cy.get(noInvt_tb).should('have.text', idInvt)
        cy.get(stock_tb).should('have.text', stock)
        cy.wait(5000)

        //Stock Card
        cy.get(product_stock).click()
        cy.get(addStock_btn).click()
        cy.get(companyStock_form).type(nameCompany).type(enter)
        cy.get(noInvtStock_form).type(idInvt).type(enter)
        cy.get(qty_form).type(stock)
        cy.get(type_form).type('out')
        cy.get(submit_btn).click()
        cy.wait(3000)
        cy.get(stockCard_tb).should('have.text', stock)
        cy.get(type_tb).should('have.text', 'out')
        cy.get(catalog_tb).should('have.text', catalogName)
        cy.wait(5000)
    })
})

//VAR
//Category
const categoryName = 'Perabotan Rumah'
const descCategory = 'Category Category Category'

//Type 
const typeName = 'Dapur'
const descType = 'Type Type Type'

//Catalog
const catalogName = 'Kompor Listrik'
const catalogDesc = 'Kompor Listrik Kompor Listrik Kompor Listrik'
const price = '17000'
const point = '100'
const maxcap = '1000'
const pointExp = '1000'
const imagefileProuct = 'aair.png'
const weight = '20'
const width = '20'
const length = '60'
const height = '10'

//Inventory
const idInvt = 'ID123'
const stock = '1000'
const unit = 'Unit'


//OBJ
//General
const user_form = '.mb-3 > .form-control'
const pass_form = '.mb-4 > .form-control'
const login_btn = ':nth-child(1) > .btn'
const mng_product = '[items="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"] > .nav-group-toggle'
const submit_btn = '.btn'
const enter = '{enter}'
const add_btn = '.justify-content-end > a > .btn'
const name_form = '#name'
const desc_form = '#description'

//Inventory
const product_invt = '.nav-group-items > :nth-child(6) > .nav-link'
const invtComp_form = '#react-select-2-input'
const invtCtg_form = '#react-select-3-input'
const invt_form = '#idinventory'
const stock_form = '#stock'
const unit_form = '#unit'
const noInvt_tb = 'tbody > :nth-child(1) > :nth-child(1)'
const stock_tb = 'tbody > :nth-child(1) > :nth-child(2)'

//Stock Card
const product_stock = '.nav-group-items > :nth-child(7) > .nav-link'
const addStock_btn = 'a > .btn'
const companyStock_form = '#react-select-4-input'
const noInvtStock_form = '#react-select-5-input'
const qty_form = '#qty'
const type_form = '#type'
const stockCard_tb = 'tbody > :nth-child(1) > :nth-child(1)'
const type_tb = 'tbody > :nth-child(1) > :nth-child(2)'
const catalog_tb = 'tbody > :nth-child(1) > :nth-child(3)'


