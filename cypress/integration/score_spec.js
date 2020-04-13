describe('The Score App Component', () => {
    it('successfully loads', () => {
        cy.visit('/')
    })

    it('successfully calls score data request', () => {
        cy.request('GET', 'https://api.github.com/users/dhh/events')
        .then((resp) => {
            expect(resp.status).to.eq(200)
        })
    })

    it('renders both columns', () => {
        cy.get('.Score_App')
        .find('.col')
        .should(($columns) => {
            expect($columns, '2 columns').to.have.length(2)
        })
    })

    it('describes the left column', () => {
        cy.get('.App_score_txt_header').should('contain', 'Score is added up by types that come back from data:')
        cy.get('.App_score_txt').should('be.not.empty')
    })

    it('describes the right column', () => {
        cy.get('.App_score').should('contain', 'n/a')
    })

    it('describes the get score button', () => {
        cy.get('.App_button').should('contain', 'Get Score').click()
        cy.get('.App_score').should('contain', 89)
    })

    it('describes the reset score button', () => {
        cy.get('.App_button_reset').should('contain', 'Reset Score').click()
        cy.get('.App_score').should('contain', 'n/a')
    })
})