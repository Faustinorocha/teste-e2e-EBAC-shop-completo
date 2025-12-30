import cadastroPage from '../pages/cadastroPage/index'
import { dadosNovoUsuario } from '../factories/criarNovoUsuario'
import { elements as elMinhaConta } from '../pages/minhaContaPage/elements';

describe('Cadastro de usuário', () => {
    
    context('Quando usuário não tem cadastro', () => {

        it('Deve registar um novo usuário com sucesso', () => {
            const dadosUsuario = dadosNovoUsuario()
            cadastroPage.acessarPaginaCadastro()
            cadastroPage.realizarRegistroNovoUsuario(dadosUsuario.email, dadosUsuario.senha)

            cy.get(elMinhaConta.mensagemOlaUsuarioLogin)
            .should('be.visible')
            .and('contain', 'Olá, ')
           
        });
    });
});