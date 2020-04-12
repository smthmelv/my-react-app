describe('The Random Display App', () => {
    it('successfully loads', () => {
        cy.visit('/') // change URL to match your dev URL
    })

    it('loads the header', () => {
        cy.get('.App_header').contains('The Random Display App');
    })

    it('loads Weather component', () => {
        cy.get('.Weather_App');
    })

    it('loads Score component', () => {
        cy.get('.Score_App');
    })
})