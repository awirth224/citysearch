describe('City Search site', () => {

  it('Should display a title', function() {
    cy.intercept('GET','https://api.teleport.org/api/urban_areas/',{ fixture: 'example.json' } )
    cy.visit('http://localhost:3000/')
    cy.get('.logo').should('contain', 'CitySearch')
  })
  
  it('Should have a form visible', function() {
    cy.intercept('GET','https://api.teleport.org/api/urban_areas/',{ fixture: 'example.json' } )
    cy.visit('http://localhost:3000/')
    cy.get('form').should('be.visible')
  })
  
  it('Should allow a user to type and submit a form', function(){
    cy.intercept('GET','https://api.teleport.org/api/urban_areas/',{ fixture: 'example.json' } )
    cy.visit('http://localhost:3000/')
    cy.get('form').within(() => {
    cy.get('input[name="homeCity"]').type('Aarhus, Denmark').should('have.value', 'Aarhus, Denmark')
    cy.get('input[name="desiredCity"]').type('Almaty, Kazakhstan').should('have.value', 'Almaty, Kazakhstan')
    cy.get('button').click()
    })
    cy.url().should('eq','http://localhost:3000/cities') 
    cy.intercept('GET','https://api.teleport.org/api/urban_areas/slug:almaty/scores/',{ fixture:'desiredCityInfo'} )
    cy.intercept('GET','https://api.teleport.org/api/urban_areas/slug:aarhus/scores/',{ fixture:'homeCityInfo'})
  })
  it('Should display two  cities information', function(){
    cy.intercept('GET','https://api.teleport.org/api/urban_areas/',{ fixture: 'example.json' } )
    cy.visit('http://localhost:3000/')
    cy.get('form').within(() => {
    cy.get('input[name="homeCity"]').type('Aarhus, Denmark').should('have.value', 'Aarhus, Denmark')
    cy.get('input[name="desiredCity"]').type('Almaty, Kazakhstan').should('have.value', 'Almaty, Kazakhstan')
    cy.get('button').click()
    })
    cy.url().should('eq','http://localhost:3000/cities') 
    cy.intercept('GET','https://api.teleport.org/api/urban_areas/slug:almaty/scores/',{ fixture:'desiredCityInfo'} )
    cy.intercept('GET','https://api.teleport.org/api/urban_areas/slug:aarhus/scores/',{ fixture:'homeCityInfo'})
    cy.intercept('GET','https://api.teleport.org/api/urban_areas/slug:almaty/images/',{fixture:'desiredImage'})
    cy.intercept('GET','https://api.teleport.org/api/urban_areas/slug:aarhus/images/',{fixture:'homeImage'})

    cy.get('.card-content').should('be.visible')
    cy.get('.card-front').children('img').should('have.length', 2)
    cy.get('.info-display').children('h2').should('have.length',16) 
  })
   
  it('Should allow a user to go back to the home page when the home button is clicked',function(){
    cy.intercept('GET','https://api.teleport.org/api/urban_areas/',{ fixture: 'example.json' } )
    cy.visit('http://localhost:3000/')
    cy.get('form').within(() => {
    cy.get('input[name="homeCity"]').type('Aarhus, Denmark').should('have.value', 'Aarhus, Denmark')
    cy.get('input[name="desiredCity"]').type('Almaty, Kazakhstan').should('have.value', 'Almaty, Kazakhstan')
    cy.get('button').click()
    })
    cy.url().should('eq','http://localhost:3000/cities') 
    cy.intercept('GET','https://api.teleport.org/api/urban_areas/slug:almaty/scores/',{ fixture:'desiredCityInfo'} )
    cy.intercept('GET','https://api.teleport.org/api/urban_areas/slug:aarhus/scores/',{ fixture:'homeCityInfo'})
    cy.intercept('GET','https://api.teleport.org/api/urban_areas/slug:almaty/images/',{fixture:'desiredImage'})
    cy.intercept('GET','https://api.teleport.org/api/urban_areas/slug:aarhus/images/',{fixture:'homeImage'})
    cy.get('.card-content').should('be.visible')
    cy.get('.card-front').children('img').should('have.length', 2)
    cy.get('.info-display').children('h2').should('have.length',16) 
    cy.get('.home-btn').click()
    cy.url().should('eq','http://localhost:3000/')
  })
    

})

