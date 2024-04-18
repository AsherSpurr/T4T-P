describe('landing page', () => {
  beforeEach(() => {
 const key = process.env.REACT_APP_GOOGLE
 //Delete this empty fetch after fixing known issue
    cy.intercept('GET', 'https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=0&per_page=30&offset=0&lat=&lng=', {
    statusCode: 200,
    }).as('getEmptyBathrooms')
    cy.intercept('GET', 'https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=0&per_page=30&offset=0&lat=39.6702347&lng=-104.4714657', {
      statusCode: 200,
      fixture: 'bathrooms'
    }).as('getBathrooms')
    cy.intercept('GET', `https://maps.googleapis.com/maps/api/geocode/json?address=44301EIlifftrail%20Bennett%20CO&key=${key}`, {
      statusCode: 200,
      fixture: 'bennett'
    }).as('getBennett')
    cy.visit('http://localhost:3000/')
  })

  it('should show landing page ui', () => {
    cy.get('nav').contains('T4Tp')
    .get('nav').get('a').contains('About') 
    .get('nav').get('img').should('have.attr', 'src').should('include', '/static/media/distance-blue')
    .get('main').get('h2').contains('Where do you want to')
    
    //Test Search Inputs
    .get('.Search_form').children().should('have.length', '4')
    .get('.Search_input').should('have.length', '3')
    .get('.Search_icon').should('have.attr', 'src').should('include', '/static/media/search')

    //Test Filterform
    .get('.Filter_div_wrapper').children().should('have.length', '7')
    .get('.Filter_input').should('have.length', '3')

    //Test Button more thuroughly after aadding specs
    .get('button')

    //Map placeholder
    .get('.Map_div_wrapper').get('.Map_img').should('have.attr', 'src').should('include', '/static/media/placeholder-gray2')
  })

})