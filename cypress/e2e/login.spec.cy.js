import loginPage from '../pages/loginPage'
import cadastroPage from '../pages/cadastroPage'
import { dadosNovoUsuario } from '../factories/criarNovoUsuario'
import { elements as elLogin } from '../pages/loginPage/elements'
import { elements as elMinhaConta } from '../pages/minhaContaPage/elements'

describe('Autenticação', () => {
  const usuario = dadosNovoUsuario()


  before(() => {
    cadastroPage.acessarPaginaCadastro()
    cadastroPage.realizarRegistroNovoUsuario(usuario.email, usuario.senha)
    loginPage.realizarLogout()
  });

  beforeEach(() => {
    loginPage.acessarPaginaLogin();
  });

  context('Quando o usuário na tela de login', () => {
    context('E informa credenciais válidas', () => {
      it('Deve efetuar login com sucesso', () => {

        loginPage.realizarLogin(usuario.email, usuario.senha)

        cy.get(elMinhaConta.mensagemOlaUsuarioLogin)
          .should('be.visible')
          .and('contain', 'Olá, ')
      })
    });

    context('E informa credenciais inválidas', () => {
      it('Deve exibir mensagem de erro ao informar senha incorreta', () => {

        loginPage.realizarLogin(usuario.email, usuario.senha + '2222')

        cy.get(elLogin.mensagemErroLogin)
          .should('be.visible')
          .and('contain', 'A senha fornecida')
          .and('contain', 'está incorreta')
      });

      it('Deve exibir erro ao informar usuario inexistente', () => {

        loginPage.realizarLogin(usuario.email + 'aaa', usuario.senha);

        cy.get(elLogin.mensagemErroLogin)
          .should('be.visible')
          .and('contain', 'Endereço de e-mail desconhecido')
          .and('contain', 'Verifique novamente ou tente seu nome de usuário')
      });
      it('Deve exibir erro ao informar e-mail inválido', () => {

        loginPage.realizarLogin('asdg@#.com@.br', usuario.senha);

        cy.get(elLogin.mensagemErroLogin)
          .should('be.visible')
          .and('contain', 'não está registrado')
      });
    })


    context('E não informa credenciais obrigatórias', () => {
      it('Deve exibir erro ao tentar logar sem preencher e-mail e senha', () => {

        loginPage.realizarLoginSemCredenciais();

        cy.get(elLogin.mensagemErroLogin)
          .should('be.visible')
          .and('contain', 'Nome de usuário é obrigatório')
      });
    })


  })
  context('Quando o usuário está logado', () => {
    it('Deve realizar logout com sucesso', () => {

      loginPage.realizarLogin(usuario.email, usuario.senha);

      loginPage.realizarLogout()

      cy.get(elLogin.mensagemPolicyTextRegistro)
        .should('be.visible')
      cy.get(elLogin.botaoLogin).should('be.visible')

    });

  })
})