beforeEach(() => {
    cy.visit(Cypress.env("devUrl"));
    cy.get(user_form).type(Cypress.env("username"))
    cy.get(pass_form).type(Cypress.env("password"))
    cy.get(login_btn).click()
})

//UPDATE VARIABLE BEFORE RUN TEST
const member = 'Tuti 407'
const reward_1 = 'Medali 407'

describe('Redemption', () => {
    context('Add Redeemption', function () {
        it('Add Redemption With Valid Data', function () {
            //Redeem //Waiting commite from unique to transc test case
            cy.get(mng_redeem).click()
            cy.get(redeem_menu).click()
            cy.get(addRedeem_btn).click({ force: true })
            cy.get(member_form).type(member, { force: true }).type(enter)
            cy.get(description_form).type(desc)
            cy.get(receiverName_form).type(receiverName)
            cy.get(receiverPhone_form).type(receiverPhone)
            cy.get(receiverAddress_form).type(receiverAddress)
            cy.get(reward_form).type(reward_1, { force: true }).type(enter)
            cy.get(qty_form_1).clear().type(qty2)
            cy.get(totalPoint_obj).should('have.text', totalPoint) //Check Grand Total Redemption
            cy.get(submit_btn).click()
      
            //Check redemption table after submit form
            cy.get(member_tb).should('have.text', member)
            cy.get(receiverName_tb).should('have.text', receiverName)
            cy.get(totalPoint_tb).should('have.text', '2.000')
            cy.get(status_tb).should('have.text', waitingStatus)
            //Updaate Status Redeem
            // cy.wait(5000)
            // cy.get(updateRedeem).click({ force: true })

            //Member Detail
            cy.get(mng_member).click()            
            cy.get(member_menu).click({ force: true })
            cy.get(detail_btn).last().click()
            cy.wait(3000)
            // cy.get(pointHistory_detail).click({ force: true })
            // cy.get(point_tb).should('have.text', '100.000')
            // cy.get(totalblnc_tb).should('have.text', '100.000')
            // cy.wait(3000)
            // cy.get(transactionHistory_detail).click({ force: true })
            // cy.get(totaltranc_tb).should('have.text', '17.000')
            // cy.get(statustransc_tb).should('have.text', 'approve')
            // cy.get(statustransc_tb).should('have.text', 'uniquecode')
            // cy.wait(3000)
            // cy.get(redemtionHistory_detaail).click({ force: true })
            // cy.get(totalpoint_tb).should('have.text', '2.000')
            // cy.get(statusredeem_tb).should('have.text', 'waiting')
            // cy.wait(3000)
            cy.get(address_menu).click({ force: true })
            cy.get(addressName_tb).should('have.text', addressName)
            cy.get(completeAddress_tb).should('have.text', memberAddress)

        })
    })
})


//Variable
const desc = 'Reward Reward Reward Reward Reward'
const receiverName = 'Putra Herlambang'
const receiverPhone = '085645213987'
const receiverAddress = 'Jl. Awas Banyak Anak Kecil No. 45A-B'
const qty2 = '2'
const totalPoint = 'Total Point:  2.000'
const waitingStatus = 'waiting'
const processStatus = 'process'
const shippingStatus = 'shipping'
const completedStatus = 'completed'
const rejectedStatus = 'rejected'
const memberAddress = 'Jl. Awas Banyak Anak Kecil'
const addressName = 'Rumah'

//Object
const user_form = '.mb-3 > .form-control'
const pass_form = '.mb-4 > .form-control'
const login_btn = ':nth-child(1) > .btn'
const mng_redeem = ':nth-child(7) > .nav-group-toggle'
const redeem_menu = '.show > .nav-group-items > :nth-child(2) > .nav-link'
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
const enter = '{enter}'
const totalPoint_obj = '.col-12 > .d-flex'
const submit_btn = '.btn'
const member_tb = 'tbody > :nth-child(1) > :nth-child(3)'
const receiverName_tb = 'tbody > :nth-child(1) > :nth-child(4)'
const totalPoint_tb = 'tbody > :nth-child(1) > :nth-child(9)'
const status_tb = 'tbody > :nth-child(1) > :nth-child(10)'
const edit_btn = '[href="#/redemptions/moderate/149"] > .btn'
const status_form = '.form-select'
const mng_member = ':nth-child(3) > .nav-group-toggle'
const member_menu = '.show > .nav-group-items > .nav-item > .nav-link'
const pointHistory_detail ='.nav > :nth-child(2) > .nav-link'
const transactionHistory_detail = '.nav > :nth-child(3) > .nav-link'
const redemtionHistory_detaail = '.nav > :nth-child(4) > .nav-link'
const members_detail = '[href="#/members/detail/440"] > .btn'
const updateRedeem = '#btn btn-outline-success btn-sm'
const address_menu = '.nav > :nth-child(5) > .nav-link'
const addressName_tb = 'tbody > tr > :nth-child(1)'
const completeAddress_tb = 'tbody > tr > :nth-child(2)'
const detail_btn = '#root > div:nth-child(2) > div.wrapper.d-flex.flex-column.min-vh-100.bg-light > div.body.flex-grow-1.px-3 > div > div > div:nth-child(2) > div > div > div.my-4 > div.row.gap-2 > div.table-responsive > table > tbody > tr:nth-child(1) > td:nth-child(7) > div > a:nth-child(2) > button'


const point_tb = '.active > .gap-3 > :nth-child(2) > .card > .card-body > :nth-child(2) > .row.gap-2 > .table-responsive > .table > tbody > :nth-child(1) > :nth-child(2)'
const totalblnc_tb = '.active > .gap-3 > :nth-child(2) > .card > .card-body > :nth-child(2) > .row.gap-2 > .table-responsive > .table > tbody > :nth-child(1) > :nth-child(3)'
const totaltranc_tb = '.active > .gap-3 > :nth-child(2) > .card > .card-body > :nth-child(2) > .row.gap-2 > .table-responsive > .table > tbody > tr > :nth-child(2)'
const statustransc_tb = '.active > .gap-3 > :nth-child(2) > .card > .card-body > :nth-child(2) > .row.gap-2 > .table-responsive > .table > tbody > tr > :nth-child(5)'
const typetransc_tb = '.active > .gap-3 > :nth-child(2) > .card > .card-body > :nth-child(2) > .row.gap-2 > .table-responsive > .table > tbody > tr > :nth-child(6)'
const totalpoint_tb = '.active > .gap-3 > :nth-child(2) > .card > .card-body > :nth-child(2) > .row.gap-2 > .table-responsive > .table > tbody > :nth-child(1) > :nth-child(7)'
const statusredeem_tb = 'tbody > :nth-child(1) > :nth-child(9)'