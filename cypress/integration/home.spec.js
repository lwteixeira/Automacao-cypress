

describe('home page', ()=>{
    it('App deve estar online', ()=>{
        cy.viewport(1440, 900)
        cy.visit('http://buger-eats.vercel.app')
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    })
})