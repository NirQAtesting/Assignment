describe('Assignment Nir Amar', () => {
  it('passes', () => {

    // Go to https://example.cypress.io/ 

    cy.visit('https://example.cypress.io')        
	
	// Go to Top bar >  Commands menu > Click on the Querying menu item to get to the Querying page
	
	cy.get('.dropdown-toggle').click() 
	
	cy.get('li ul.dropdown-menu li a[href$="/commands/querying"]').click() 
	
	// Verify that it is a hyperlink by attribute
	
	cy.get('a:contains("Best Practices: Selecting elements")').isClickable
	
	// Verify that the URL address is: https://on.cypress.io/best-practices#Selecting-Elements
	
	cy.get('h4[id="best-practices"] a')
	.should('have.text', 'Best Practices: Selecting elements') 
	
    // Call http end-point    

	 cy.request('https://api.jsonbin.io/v3/b/62e129e3248d43754f074152').as('checkStatus')
	 
	// Verify response status is 200 
	 cy.get('@checkStatus').its('status')
     .should('equal', 200)
	 
	// Verify the array in the response contains 5 elements.
	 cy.get('@checkStatus').its('body')
	cy.expect('.body').to.have.lengthOf(5)
	
	// I'm sorry for not finishing all the tasks, the last 2 were challanging for me as it was my first task usying Cypress and js. 
	
  })
})