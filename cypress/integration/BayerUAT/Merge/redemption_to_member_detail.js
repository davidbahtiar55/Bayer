beforeEach(() => {
    cy.visit(Cypress.env("baseUrl"));
    cy.get(user_form).type(Cypress.env("username"))
    cy.get(pass_form).type(Cypress.env("password"))
    cy.get(login_btn).click()
})

describe('Redemption', () => {
    context('Add Redeemption', function () {
        it('Add Redemption With Valid Data', function () {
            //Redeem
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
            // cy.get(members_menu).click()
            // cy.get(members_detail).click()
            // cy.wait(3000)
            // cy.get(pointHistory_detail).click()
            // cy.wait(3000)
            // cy.get(transactionHistory_detail).click()
            // cy.wait(3000)
            // cy.get(redemtionHistory_detaail).click()
            // cy.wait(3000)
        })
    })
})


//Variable
const member = 'Tuti 302'
const desc = 'Reward Reward Reward Reward Reward'
const receiverName = 'Putra Herlambang'
const receiverPhone = '085645213987'
const receiverAddress = 'Jl. Awas Banyak Anak Kecil No. 45A-B'
const reward_1 = 'Medali 302'
const qty2 = '2'
const totalPoint = 'Total Point:  2.000'
const waitingStatus = 'waiting'
const processStatus = 'process'
const shippingStatus = 'shipping'
const completedStatus = 'completed'
const rejectedStatus = 'rejected'



//Object
const user_form = '.mb-3 > .form-control'
const pass_form = '.mb-4 > .form-control'
const login_btn = ':nth-child(1) > .btn'
const redeem_menu = ':nth-child(10) > .nav-link'
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
const members_menu = ':nth-child(2) > .nav-link'
const pointHistory_detail ='.nav > :nth-child(2) > .nav-link'
const transactionHistory_detail = '.nav > :nth-child(3) > .nav-link'
const redemtionHistory_detaail = '.nav > :nth-child(4) > .nav-link'
const members_detail = '[href="#/members/detail/440"] > .btn'
const updateRedeem = '#btn btn-outline-success btn-sm'