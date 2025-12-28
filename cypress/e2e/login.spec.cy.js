import login from '../pages/loginPage'
import { faker } from '@faker-js/faker'
import { elements as elLogin } from '../pages/loginPage/elements'
import { elements as elMinhaConta } from '../pages/minhaContaPage/elements'

describe('Autenticação', () => {

  beforeEach(() => {
    login.acessarPaginaLogin();
  });
  context('Quando usuário acessa a página de cadastro', () => {
    const email = faker.internet.email();
    const senha = faker.internet.password()
    it('Deve registar um novo usuário com sucesso', () => {

      login.realizarRegistroNovoUsuario(email, senha)

      cy.get(elMinhaConta.mensagemOlaUsuarioLogin).should('be.visible')
      cy.get(elMinhaConta.mensagemBemVindoLogin).should('contain', 'Welcome')
    });

    it('Com usuário cadastrado finaliza cadastro', () => {


    });
  });

  context('Quando o usuário na tela de login informa credenciais válidas', () => {
    it.only('Deve efetuar login', () => {

      login.realizarLogin('a@sa.com', 'Oeste1313@')

      cy.get(elMinhaConta.mensagemOlaUsuarioLogin).should('be.visible')
      cy.get(elMinhaConta.mensagemBemVindoLogin).should('contain', 'Welcome')
    })
  });

  context('Quando o usuário na tela de login informa senha inválida', () => {
    it.only('Deve exibir mensagem de senha incorreta', () => {


      login.realizarLogin('a@sa.com', 'Oeste1313@123')

      cy.get(elLogin.mensagemErroLogin).should('be.visible')

    });

  });
  context('Quando usuário na tela de login não preenche email e senha', () => {
    it('Deve exibir mensagem de erro', () => {

      login.realizarLogin(' ', ' ');

      cy.get(elLogin.mensagemErroLogin).should('be.visible')
    });
  })
  context('Quando usuário na tela de login preenche email inválido', () => {
    it('Deve exibir mensagem de erro', () => {

      login.realizarLogin(' ', ' ');

      cy.get(elLogin.mensagemErroLogin).should('be.visible')
    });
  })
  context('Quando o usuário está logado', () => {
    it('Deve realizar logout com sucesso', () => {

      login.realizarLogin('a@sa.com', 'Oeste1313@');

      login.realizarLogout()

      cy.get(elLogin.mensagemPolicyTextRegistro).should('be.visible')

    });
  })


})