describe('City Search site', () => {

  it('Should display a title', () => {
    cy.intercept('GET', 'https://api.teleport.org/api/urban_areas/', { fixture: 'example.json' })
    cy.visit('http://localhost:3000/')
    cy.get('.logo').should('contain', 'CitySearch')
  })

  it('Should have a form visible', () => {
    cy.intercept('GET', 'https://api.teleport.org/api/urban_areas/', { fixture: 'example.json' })
    cy.visit('http://localhost:3000/')
    cy.get('form').should('be.visible')
  })

  it('Should allow a user to type and submit a form', () => {
    cy.intercept('GET', 'https://api.teleport.org/api/urban_areas/', { fixture: 'example.json' })
    cy.visit('http://localhost:3000/')
    cy.get('form').within(() => {
      cy.get('input[name="homeCity"]').type('Aarhus, Denmark').should('have.value', 'Aarhus, Denmark')
      cy.get('input[name="desiredCity"]').type('Almaty, Kazakhstan').should('have.value', 'Almaty, Kazakhstan')
      cy.get('button').click()
    })
    cy.url().should('eq', 'http://localhost:3000/aarhus+almaty')
    cy.intercept('GET', 'https://api.teleport.org/api/urban_areas/slug:almaty/scores/', { fixture: 'desiredCityInfo' })
    cy.intercept('GET', 'https://api.teleport.org/api/urban_areas/slug:aarhus/scores/', { fixture: 'homeCityInfo' })
  })

  it('Should display two  cities information', () => {
    cy.intercept('GET', 'https://api.teleport.org/api/urban_areas/', { fixture: 'example.json' })
    cy.visit('http://localhost:3000/')
    cy.get('form').within(() => {
      cy.get('input[name="homeCity"]').type('Aarhus, Denmark').should('have.value', 'Aarhus, Denmark')
      cy.get('input[name="desiredCity"]').type('Almaty, Kazakhstan').should('have.value', 'Almaty, Kazakhstan')
      cy.get('button').click()
    })
    cy.url().should('eq', 'http://localhost:3000/aarhus+almaty')
    cy.intercept('GET', 'https://api.teleport.org/api/urban_areas/slug:almaty/scores/', { fixture: 'desiredCityInfo' })
    cy.intercept('GET', 'https://api.teleport.org/api/urban_areas/slug:aarhus/scores/', { fixture: 'homeCityInfo' })
    cy.intercept('GET', 'https://api.teleport.org/api/urban_areas/slug:almaty/images/', { fixture: 'desiredImage' })
    cy.intercept('GET', 'https://api.teleport.org/api/urban_areas/slug:aarhus/images/', { fixture: 'homeImage' })

    cy.get('.card-content').should('be.visible')
    cy.get('.card-front').children('img').should('have.length', 2)
    cy.get('.info-display').children('h2').should('have.length', 16)
  })

  it('Should allow a user to go back to the home page when the home button is clicked', () => {
    cy.intercept('GET', 'https://api.teleport.org/api/urban_areas/', { fixture: 'example.json' })
    cy.visit('http://localhost:3000/')
    cy.get('form').within(() => {
      cy.get('input[name="homeCity"]').type('Aarhus, Denmark').should('have.value', 'Aarhus, Denmark')
      cy.get('input[name="desiredCity"]').type('Almaty, Kazakhstan').should('have.value', 'Almaty, Kazakhstan')
      cy.get('button').click()
    })
    cy.url().should('eq', 'http://localhost:3000/aarhus+almaty')
    cy.intercept('GET', 'https://api.teleport.org/api/urban_areas/slug:almaty/scores/', { fixture: 'desiredCityInfo' })
    cy.intercept('GET', 'https://api.teleport.org/api/urban_areas/slug:aarhus/scores/', { fixture: 'homeCityInfo' })
    cy.intercept('GET', 'https://api.teleport.org/api/urban_areas/slug:almaty/images/', { fixture: 'desiredImage' })
    cy.intercept('GET', 'https://api.teleport.org/api/urban_areas/slug:aarhus/images/', { fixture: 'homeImage' })
    cy.get('.card-content').should('be.visible')
    cy.get('.card-front').children('img').should('have.length', 2)
    cy.get('.info-display').children('h2').should('have.length', 16)
    cy.get('.home-btn').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it("Should be displaying relevant information per home card", () => {
    cy.intercept('GET', 'https://api.teleport.org/api/urban_areas/', { fixture: 'example.json' })
    cy.visit('http://localhost:3000/')
    cy.get('form').within(() => {
      cy.get('input[name="homeCity"]').type('Aarhus, Denmark').should('have.value', 'Aarhus, Denmark')
      cy.get('input[name="desiredCity"]').type('Almaty, Kazakhstan').should('have.value', 'Almaty, Kazakhstan')
      cy.get('button').click()
    })
    cy.url().should('eq', 'http://localhost:3000/aarhus+almaty')
    cy.intercept('GET', 'https://api.teleport.org/api/urban_areas/slug:almaty/scores/', { fixture: 'desiredCityInfo' })
    cy.intercept('GET', 'https://api.teleport.org/api/urban_areas/slug:aarhus/scores/', { fixture: 'homeCityInfo' })
    cy.intercept('GET', 'https://api.teleport.org/api/urban_areas/slug:almaty/images/', { fixture: 'desiredImage' })
    cy.intercept('GET', 'https://api.teleport.org/api/urban_areas/slug:aarhus/images/', { fixture: 'homeImage' })
    cy.get('.card-content').should('be.visible')
    cy.get('.card-back').first().children().children().should('be.visible')
  })

  it("Should be showing an error if a user does not put in the correct home City input", () => {
    cy.intercept('GET', 'https://api.teleport.org/api/urban_areas/', { fixture: 'example.json' })
    cy.visit('http://localhost:3000/')
    cy.get('form').within(() => {
      cy.get('input[name="homeCity"]').type('children,children').should('have.value', 'children,children')
      cy.get('input[name="desiredCity"]').type('Almaty, Kazakhstan').should('have.value', 'Almaty, Kazakhstan')
      cy.get('button').click()
    })
    cy.get('.swal-modal').should('contain', 'Starting city input is invalid')
  })

  it("Should be showing an error if a user does not put in the correct desired City input", () => {
    cy.intercept('GET', 'https://api.teleport.org/api/urban_areas/', { fixture: 'example.json' })
    cy.visit('http://localhost:3000/')
    cy.get('form').within(() => {
      cy.get('input[name="homeCity"]').type('Aarhus, Denmark').should('have.value', 'Aarhus, Denmark')
      cy.get('input[name="desiredCity"]').type('arg matey').should('have.value', 'arg matey')
      cy.get('button').click()

    })
    cy.get('.swal-modal').should('contain', 'Desired city input is invalid')
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it("Should be showing an error if a user does not put in the correct desired City input", () => {
    cy.intercept('GET', 'https://api.teleport.org/api/urban_areas/', { fixture: 'example.json' })
    cy.visit('http://localhost:3000/')
    cy.get('form').within(() => {
      cy.get('input[name="homeCity"]').type('umph').should('have.value', 'umph')
      cy.get('input[name="desiredCity"]').type('huh').should('have.value', 'huh')
      cy.get('button').click()
      cy.url().should('eq', 'http://localhost:3000/')
    })
    cy.get('.swal-modal').should('contain', 'Both city inputs are invalid')
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('Should display an error messsage on a broken city display link', () => {
    cy.visit('http://localhost:3000/abc+almaty')
    cy.get('.error-image').should('be.visible')
  })

  it('Should retain info when page is refreshed', () => {
    cy.visit('http://localhost:3000/abc+almaty')
    cy.reload()
    cy.get('.error-image').should('be.visible')
    cy.get('.card-content').last().should('contain', 'Almaty, Kazakhstan')
  })
})