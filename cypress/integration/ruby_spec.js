const loginUrl = 'http://localhost:3000/login'

describe('hello world', function(){
    it('should take us to login', function() {
        // cy.visit(loginUrl)
        // cy.get('input')
        //   .first()
        //   .click()
        //   .type('testdevbot')
        // cy.get('button')
        //   .first()
        //   .click()

    })
        
    it('should break', function() {
        // cy.visit(loginUrl)
        // cy.get('input')
        //   .first()
        //   .click()
        //   .type('testdevbotshouldbreak')
        // cy.get('button')
        //   .first()
        //   .click()

    })

    it('should break again', function() {
    //     cy.visit(loginUrl)
    //     cy.get('input')
    //       .first()
    //       .click()
    //       .type(' ')
    //     cy.get('button')
    //       .first()
    //       .click()
    })

    it('should take me home', () => {
        // cy.visit(loginUrl)
        // cy.get('.nav-link-map')
        //   .first()
        //   .click()
    })

    it('should take me home', () => {
        // cy.visit(loginUrl)
        // cy.get('.nav-link-profile')
        //   .first()
        //   .click()
    })
})

const snoowrap = require('snoowrap')

const {
    SERVER_PORT,
    CLIENT_ID,
    CLIENT_SECRET,
    REFRESH_TOKEN,
    USER_AGENT,
    WATSON_USERNAME,
    PASSWORD
} = process.env;

r.getUser('spez').fetch()