describe('LOGIN do usuario', ()=>{
    beforeEach(()=>{
        cy.visit('https://alura-fotos.herokuapp.com');
    })

    it('Teste Usuario com Usuario errado', ()=>{
        cy.get(':nth-child(1) > .form-control').type('usdbciudkzj');
        cy.get(':nth-child(2) > .form-control').type('g30101989a');
        cy.get('.btn').click();
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
    })

    it('Teste Usuario com Usuario vazio', ()=>{
        cy.get(':nth-child(1) > .form-control').type(' ');
        cy.get(':nth-child(2) > .form-control').type('g30101989a');
        cy.get('.btn').click();
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
    })

    it('Teste Usuario com senha errada', ()=>{
        cy.get(':nth-child(1) > .form-control').type('usdbciudkzj');
        cy.get(':nth-child(2) > .form-control').type('g30101989aa');
        cy.get('.btn').click();
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
    })

    it('Teste Usuario com senha vazia', ()=>{
        cy.get(':nth-child(1) > .form-control').type('usdbciudkzj');
        cy.get(':nth-child(2) > .form-control').type(' ');
        cy.get('.btn').click();
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
    })

    it('Teste necessidade do botão', ()=>{
        cy.get('.navbar-brand > .fa').click();
        cy.get('.menu-bar > .fa').click();
    })

    it('Teste Login', ()=>{
        cy.get(':nth-child(1) > .form-control').type('guilhermeeee');
        cy.get(':nth-child(2) > .form-control').type('g30101989a');
        cy.get('.btn').click();
    })
})