describe('The Weather App Component', () => {
    it('successfully loads', () => {
        cy.visit('/')
    })

    it('successfully calls weather request', () => {
        cy.request('GET', 'https://api.openweathermap.org/data/2.5/weather?q=Omaha,US&appid=5f24adf9b82f6919270d8d3e8abefcc3&units=imperial&mode=html')
            // .its('body')
            // .as('data')
        .then((resp) => {
            expect(resp.status).to.eq(200)
        })
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