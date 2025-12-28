import login from '../pages/loginPage'
import { faker } from '@faker-js/faker'
import minhaConta from '../pages/minhaContaPage'
import { elements as elMinhaConta } from '../pages/minhaContaPage/elements'
import detalhesContaPage from '../pages/detalhesContaPage/index'


describe('Finalizar pré cadastro', () => {
    const nome = faker.person.firstName()
    const sobrenome = faker.person.lastName()
    const email = faker.internet.email(nome + sobrenome)
    const senha = faker.internet.password()

    before(() => {

        login.acessarPaginaLogin()
        login.realizarRegistroNovoUsuario(email, senha)
        login.realizarLogout()
        
    });
    beforeEach(() => {
        login.realizarLogin(email, senha) 
    });
    

    context('Quando o usuário está logado', () => {
        it('Deve preencher dados para concluir cadastro', () => {

            
            detalhesContaPage.atualizarDadosDaConta(nome, sobrenome)

            cy.get(elMinhaConta.mensagemMinhaContaAlterada).should('be.visible')
        });

        it('Deve preencher dados de endereço de cobrança', () => {
               
            minhaConta.preencherEnderecoCobranca()
            
        })
    });

});