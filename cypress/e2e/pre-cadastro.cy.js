import loginPage from '../pages/loginPage'
import cadastroPage from '../pages/cadastroPage'
import enderecoFaturamentoPage from '../pages/enderecoFaturamentoPage'
import { elements as elMinhaConta } from '../pages/minhaContaPage/elements'
import { elements as elEnderecoFaturmaneto } from '../pages/enderecoFaturamentoPage/elements'
import detalhesContaPage from '../pages/detalhesContaPage/index'
import enderecoEntregaPage from '../pages/enderecoEntregaPage'
import { criarEndereco } from '../factories/enderecoFactory'
import { dadosNovoUsuario } from '../factories/criarNovoUsuario'


describe('Pré cadastro', () => {

    const dadosUsuario = dadosNovoUsuario()
    const endereco = criarEndereco()

    before(() => {

        cadastroPage.acessarPaginaCadastro()
        cadastroPage.realizarRegistroNovoUsuario(dadosUsuario.email, dadosUsuario.senha)
        loginPage.realizarLogout()

    });
    beforeEach(() => {
        loginPage.acessarPaginaLogin()
        loginPage.realizarLogin(dadosUsuario.email, dadosUsuario.senha)
    });

    context('Quando o usuário possui cadastro incompleto', () => {
        context('E informa dados válidos', () => {
            it('Deve preencher nome e sobrenome para concluir cadastro', () => {

                detalhesContaPage.atualizarDadosDaConta(dadosUsuario.nome, dadosUsuario.sobrenome)

                cy.get(elMinhaConta.mensagemMinhaContaAlterada).should('be.visible')
                    .and('contain', 'Detalhes da conta modificados com sucesso')

            })

            it('Deve preencher dados de endereço de faturamento válidos', () => {

                enderecoFaturamentoPage.preencherEnderecoFaturamento(endereco)

                cy.get(elMinhaConta.mensagemMinhaContaAlterada).should('be.visible')

            })

            it('Deve preencher dados de endereço de entrega válidos', () => {

                enderecoEntregaPage.preencherEnderecoEntrega(endereco)

                cy.get(elMinhaConta.mensagemMinhaContaAlterada).should('be.visible')

            });

        })

        context('E informa dados inválidos', () => {
            it('Deve deixar os dados de endereço de faturamento em branco', () => {

                enderecoFaturamentoPage.salvarEnderecoFaturamentoSemPreencher()

                cy.get(elEnderecoFaturmaneto.mensagemErroCadastro).should('be.visible')
                    .and('contain', 'Nome é um campo obrigatório')
                    .and('contain', 'Sobrenome é um campo obrigatório')
                    .and('contain', 'Endereço é um campo obrigatório')
                    .and('contain', 'Cidade é um campo obrigatório')
                    .and('contain', 'CEP é um campo obrigatório')
                    .and('contain', 'Telefone é um campo obrigatório')
            });

            it('Deve exibir erro ao salvar endereço de faturamento sem CEP', () => {

                enderecoFaturamentoPage.salvarEnderecoFaturamentoSemCEP(endereco)

                cy.get(elEnderecoFaturmaneto.mensagemErroCadastro)
                    .should('be.visible')
                    .and('contain', 'CEP é um campo obrigatório')

            });

            it('Deve exibir erro ao salvar endereço faturamento sem telefone', () => {

                enderecoFaturamentoPage.salvarEnderecoFaturamentoSemTelefone(endereco)
                cy.get(elEnderecoFaturmaneto.mensagemErroCadastro)
                    .should('be.visible')
                    .and('contain', 'Telefone é um campo obrigatório')
            });

            it('Deve deixar erro ao salvar endereço de faturamento sem o campo endereço', () => {

                enderecoFaturamentoPage.preencherEnderecoFaturamentoSemEndereco(endereco)

                cy.get(elEnderecoFaturmaneto.mensagemErroCadastro)
                    .should('be.visible')
                    .and('contain', 'Endereço é um campo obrigatório')
            });
        })
    });

});