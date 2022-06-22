
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

        //Product Category
        cy.get(product_ctg).click()
        cy.get(add_btn).click()
        cy.get(categoryComp_form).type(nameCompany, { force: true }).wait(3000).type(enter)
        cy.get(name_form).type(categoryName)
        cy.get(desc_form).type(descCategory)
        cy.get(submit_btn).click()
        cy.wait(3000)
        cy.get(nameCtg_tb).should('have.text', categoryName)
        cy.get(companyCtg_tb).should('have.text', nameCompany)
        cy.wait(5000)

         //Product Type
        cy.get(product_type).click()
        cy.get(add_btn).click()
        cy.get(typeComp_form).type(nameCompany, {force : true}).wait(3000).type(enter)
        cy.get(name_form).type(typeName)
        cy.get(desc_form).type(descType)
        cy.wait(3000)
        cy.get(submit_btn).click()
        cy.get(nameType_tb).should('have.text', typeName)
        cy.get(companyType_tb).should('have.text', nameCompany)
        cy.wait(5000)

        //Catalog
        cy.get(product_catalog).click()
        cy.get(addCatalog_btn).click()
        cy.get(catalogComp_form).type(nameCompany, { force: true }).wait(3000).type(enter)
        cy.get(catalogCtg_form).type(categoryName, {force : true}).wait(3000).type(enter)
        cy.get(catalogType_form).type(typeName, {force : true}).wait(3000).type(enter)
        cy.get(name_form).type(catalogName, {force : true})
        cy.get(desc_form).type(catalogDesc,  { force: true })
        cy.get(price_form).type(price,  { force: true })
        cy.get(point_form).type(point,  { force: true })
        cy.get(capGen_form).type(maxcap,  { force: true })
        cy.get(pointExp_form).type(pointExp,  { force: true })
        cy.get(image_form).attachFile(imagefileProuct,  { force: true })
        cy.get(haveMax_tgl).click({ force: true })
        cy.get(weight_form).type(weight,  { force: true })
        cy.get(width_form).type(width,  { force: true })
        cy.get(length_form).type(length,  { force: true })
        cy.get(height_form).type(height,  { force: true })
        cy.get(submit_btn).click({ force: true })
        cy.wait(3000)
        cy.get(nameCatalog_tb).should('have.text', catalogName)
        cy.get(companyCatalog_tb).should('have.text', nameCompany)
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

//Category
const product_ctg = '.show > .nav-group-items > :nth-child(1) > .nav-link'
const categoryComp_form = '#react-select-2-input'
const nameCtg_tb = 'tbody > :nth-child(1) > :nth-child(1)'
const companyCtg_tb = 'tbody > :nth-child(1) > :nth-child(3)'

//Type
const product_type = '.show > .nav-group-items > :nth-child(2) > .nav-link'
const typeComp_form = '#react-select-3-input'
const nameType_tb = 'tbody > :nth-child(1) > :nth-child(1)'
const companyType_tb = 'tbody > :nth-child(1) > :nth-child(3)'

//Catalog
const product_catalog = '.show > .nav-group-items > :nth-child(3) > .nav-link'
const addCatalog_btn = '.col.d-flex > a > .btn'
const catalogComp_form = '#react-select-4-input'
const catalogCtg_form = '#react-select-5-input'
const catalogType_form = '#react-select-6-input'
const price_form = '#transaction'
const point_form = '#point'
const capGen_form = '#capGeneration'
const pointExp_form = '#pointExperation'
const image_form = '#image'
const haveMax_tgl = '#haveCapGeneration'
const weight_form = '#weight'
const width_form = '#width'
const length_form = '#length'
const height_form = '#height'
const nameCatalog_tb = 'tbody > :nth-child(1) > :nth-child(4)'
const companyCatalog_tb = 'tbody > :nth-child(1) > :nth-child(8)'

//Inventory
const product_invt = '.nav-group-items > :nth-child(6) > .nav-link'
const invtComp_form = '#react-select-7-input'
const invtCtg_form = '#react-select-8-input'
const invt_form = '#idinventory'
const stock_form = '#stock'
const unit_form = '#unit'

