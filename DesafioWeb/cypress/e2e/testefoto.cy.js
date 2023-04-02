describe('Publicando foto', ()=>{
    beforeEach(()=>{
        cy.visit('https://alura-fotos.herokuapp.com')
    })

    it('Teste Login', ()=>{
        cy.get(':nth-child(1) > .form-control').type('guilhermeeee');
        cy.get(':nth-child(2) > .form-control').type('g30101989a');
        cy.get('.btn').click();
    })

    it('Publicar fato sem comentario', ()=>{
        cy.get(':nth-child(2) > a > .fa').click();
        cy.wait('');
        cy.get('.btn-primary').click();
    })

    it('Publicar foto com comentario', ()=>{
        cy.get(':nth-child(2) > a > .fa').click();
        cy.get('.photo-list-item').should('be.visible');
        cy.get('.photo-details-comments-add-form').within(() => {
          cy.get('.form-control').should('be.visible');
          cy.get('.form-control').type('Sonic!');
          cy.get('.btn-primary').click();
        });
      })

    it('Teste foto postada', ()=>{   
        cy.get('.img-thumbnail').should('be.visible');
    })
    
    it('Detalhes da foto', ()=>{
        cy.get('.img-thumbnail').click();
        cy.get('.fa-trash-o').click();
    })

    it('Teste barra de pesquisa', ()=>{
        cy.get('.rounded').type('Sonic!')
        cy.get('.img-thumbnail').should('be.visible');
    })

    it('Remover foto', ()=>{
        cy.get('.img-thumbnail').click();
        cy.get('.fa-trash-o').click();
        cy.get('.img-thumbnail').should('be.visible');
    })


})