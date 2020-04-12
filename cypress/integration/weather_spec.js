describe('The Weather App Component', () => {
    it('successfully loads', () => {
        cy.visit('/') // change URL to match your dev URL
    })

    let $cols
    it('renders both columns', () => {
        cy.get('.Weather_App')
        .find('.col')
        .should(($columns) => {
            $cols = $columns;
            expect($columns, '2 columns').to.have.length(2)
        })
    })

    it('describes the left column', () => {
        cy.get($cols.eq(0)).find('h3').should('contain', 'Input City')
        cy.get($cols.eq(0)).find('input').type('Omaha,US').should('have.value', 'Omaha,US')
        cy.get($cols.eq(0)).find('div').should('contain', 'change happens on input blur.')
    })

    it('describes the right column', () => {
        cy.get($cols.eq(1)).find('.App_weather_txt').should('contain', "Today's Weather")
        cy.get($cols.eq(1)).find('.App_weather_component')
    })
})