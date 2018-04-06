const loginUrl = 'http://localhost:3000/login'
const analyzeText = 'http://localhost:3000/Analyze'

describe('testing urls', function () {
    it('should take us to Analyze text page', function () {
        cy.visit(analyzeText)
    })

    it('should not work', function () {
        cy.visit(analyzeText)
        cy.get('.text_input')
            .first()
            .click()
            .type(' ')
        cy.get('.button_text')
            .first()
            .click()
    })

    it('should work and show a card', function () {
        cy.visit(analyzeText)
        cy.get('.text_input')
            .first()
            .click()
            .type('I am happy today. But I am also sad and mad.')
        cy.get('.button_text')
            .first()
            .click()
    })

    it('should break, text is short to be analyzed', function () {
        cy.visit(analyzeText)
        cy.get('.text_input')
            .first()
            .click()
            .type('Hi')
        cy.get('.button_text')
            .first()
            .click()
    })

        it('should break, text is short to be analyzed', function () {
            cy.visit(analyzeText)
            cy.get('.text_input')
                .first()
                .click()
                .type('Hi')
            cy.get('.button_text')
                .first()
                .click()
        })

                it('should break, text is in spanish', function () {
                    cy.visit(analyzeText)
                    cy.get('.text_input')
                        .first()
                        .click()
                        .type('Para los siguientes días de abril Acuario deberá realizar un viaje para fomentar su trabajo en nuevos horizontes, esto le dará la oportunidad de generar nuevos contactos profesionales que le abrirán las puertas hacia proyectos que les darán a los nacidos bajo este signo del Zodiaco la estabilidad laboral y económica que busca para este año.')
                    cy.get('.button_text')
                        .first()
                        .click()

        })




    })