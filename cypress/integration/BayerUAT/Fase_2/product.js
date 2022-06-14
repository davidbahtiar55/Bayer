
//UPDATE VARIABLE BEFORE RUN TEST
const nameCompany = 'InsigniaID 407'

beforeEach(() => {
    cy.visit(Cypress.env("devUrl"));
    cy.get(user_form).type(Cypress.env("username"))
    cy.get(pass_form).type(Cypress.env("password"))
    cy.get(login_btn).click()
})

describe('Flow CMS Company - Product', () => {
    it('Flow CMS Company - Product [POSITIVE]', function () {
        cy.get(mng_product).click()
        cy.get(product_ctg).click()
        cy.get(addCategory_btn).click()
        cy.get(categoryComp_form).type(nameCompany, { force: true }).wait(3000).type(enter)
        cy.get(categoryName_form).type(categoryName)
        cy.get(categoryDesc_form).type(desc)
        cy.get(submit_btn).click()


    })
})

//VAR
//Category
const categoryName = 'Perabotan Rumah'
const desc = 'Category Category Category'



//OBJ
//General
const user_form = '.mb-3 > .form-control'
const pass_form = '.mb-4 > .form-control'
const login_btn = ':nth-child(1) > .btn'
const mng_product = '[items="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"] > .nav-group-toggle'
const submit_btn = '.btn'
const enter = '{enter}'

//Category
const product_ctg = '.show > .nav-group-items > :nth-child(1) > .nav-link'
const addCategory_btn = '.justify-content-end > a > .btn'
const categoryComp_form = '#react-select-2-input'
const categoryName_form = '#name'
const categoryDesc_form = '#description'
