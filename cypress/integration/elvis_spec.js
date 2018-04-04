const Url = 'http://localhost:3000/'
const profileUrl = 'http://localhost:3000/profile'
const mapUrl = 'http://localhost:3000/map'


describe('testing urls', function(){
    it('should take us to home', function() {
cy.visit(Url)
    })
    it('should take us to profile', function() {
cy.visit(profileUrl)
    })
    it('should take us to map', function() {
cy.visit(mapUrl)
    })
  });

  describe('testing navbar', function(){
    it('should take us to profile', function() {
cy.visit(Url)
    cy.contains('type').click()
    cy.url().should('include', '/profile')
  })
  it('should take us to map', function() {
cy.visit(Url)
    cy.contains('button').click()
    cy.url().should('include', '/profile')
  })
});