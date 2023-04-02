describe('Registro de usuário', ()=>{
  beforeEach(()=> {
      cy.visit('https://alura-fotos.herokuapp.com');
  })

  it('verifica mensagens de validação', ()=> {
      cy.contains('a', 'Register now').click();
      cy.contains('button', 'Register').click();
      cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
      cy.contains('button', 'Register').click();
      cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
      cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
      cy.contains('ap-vmessage', 'Password is required!').should('be.visible');

  })

  it('verificadorr de validação de email', ()=> {
      cy.contains('a', 'Register now').click();
      cy.contains('button', 'Register').click();
      cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
      cy.get(':nth-child(1) > .form-control').type('souqa');
      cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
  })

  it('verificar de email invalido', ()=> {
    cy.contains('a', 'Register now').click();
    cy.contains('button', 'Register').click();
    cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
    cy.get(':nth-child(1) > .form-control').type('sdAu9dsE3298saAid89@gmail.com');
    cy.contains('button', 'Register').click();
    cy.contains('ap-vmessage', 'Invalid e-mail').should('not.exist');
})

  it('verificar  mínimo de caracteres no nome do usuario', ()=>{
      cy.contains('a', 'Register now').click();
      cy.contains('button', 'Register').click();
      cy.get(':nth-child(2) > .form-control').type('a');
      cy.contains('button', 'Register').click();
      cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');

  })

  it('verificar possibilidade de numeros no nome do usuario', ()=>{
    cy.contains('a', 'Register now').click();
    cy.contains('button', 'Register').click();
    cy.get(':nth-child(2) > .form-control').type('123');
    cy.contains('button', 'Register').click();
    cy.get(':nth-child(2) > .form-control').should('have.value', '123');
  })

  it('verificar se campo permite valores sem espaço', () => {
    cy.contains('a', 'Register now').click();
    cy.contains('button', 'Register').click();
    cy.get(':nth-child(2) > .form-control').type('Guilherme');
    cy.contains('button', 'Register').click();
    cy.get(':nth-child(2) > .form-control').should('have.value', 'Guilherme');
  });

  it('Teste necessidade do botão', ()=>{
    cy.get('.navbar-brand > .fa').click();
    cy.get('.menu-bar > .fa').click();
  })
})