describe('City Search site', () => {
  beforeEach(() => {
    cy.intercept('GET','https://api.teleport.org/api/urban_areas/',
    { fixture: 'example.json' } )

    cy.visit('http://localhost:3000/')
    
  })

  it('Should display a title', function() {
    cy.get('.logo').should('contain', 'CitySearch')
  })
  
  it('Should have a form visible', function() {
    cy.get('form').should('be.visible')
  })
  
  it('Should allow a user to type and submit a form', function(){
    cy.get('form').within(() => {
    cy.get('input[name="homeCity"]').type('Aarhus, Denmark').should('have.value', 'Aarhus, Denmark')
    cy.get('input[name="desiredCity"]').type('Almaty, Kazakhstan').should('have.value', 'Almaty, Kazakhstan')
    cy.get('button').click()
    })
    cy.url().should('eq','http://localhost:3000/cities') 
  })
  

})


/*
user - goes to page
should see a form
i should be able o type into an input box
should be able to click submit
should be able to see card componets
image visable
stats visible 
click home to go back to home
... 

* */

