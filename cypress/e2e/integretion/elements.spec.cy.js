///<reference types="cypress" />

describe('Work with basic elements', () => {
    beforeEach(() =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() =>{
        cy.reload()
    })


    it('Text', () => {
        
        cy.get('body').should('contain', 'Cuidado')
        cy.get('span').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })

    it('Links', ()=>{       
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text','Voltou!')

        cy.reload()
        cy.get('#resultado').should('have.not.text','Voltou!')
        cy.contains('Voltar').click().click()
        cy.get('#resultado').should('have.text','Voltou!')

    })

    it('TextFilds', () => {
        cy.get('#formNome').type('Cypress Test')
        cy.get('#formNome').should('have.value', 'Cypress Test')

        cy.get('#elementosForm\\:sugestoes')
            .type('textarea')
            .should('have.value', 'textarea')

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
                .type('???')

        cy.get('[data-cy="dataSobrenome"]') 
            .type('Teste12345{backspace}{backspace}')
            .should('have.value', 'Teste123')   

        cy.get('#elementosForm\\:sugestoes')
            .clear()
            .type('Erro{selectall}acerto',{delay:100})
            .should('have.value','acerto')
        })

    it('RadioButton', () => {
        cy.get('#formSexoFem')
        .click()
        .should('be.checked')
        cy.get('#formSexoMasc').should('not.be.checked')
        cy.get("[name='formSexo']").should('have.length', 2)
    })

    it('CheckBox', () => {
        cy.get('#formComidaPizza')
        .click()
        .should('be.checked')

        cy.get('[name=formComidaFavorita]').click({ multiple: true })
        cy.get('#formComidaPizza').should('not.be.checked')
        cy.get('#formComidaVegetariana').should('be.checked')
     })

     it('Combo', () => {
        cy.get('[data-test="dataEscolaridade"]')
        .select('1graucomp')
        .should('have.value', '1graucomp')       
     })

     it.only('Combo Multiplo', () => {
        cy.get('[data-testid=dataEsportes]')
            .select(['natacao', 'Corrida','nada'])
        //TODO validar opções selecionadas do combo multiplo   
     })

     

   
})