import { elements as el } from "../enderecoEntregaPage/elements";
import { elements as elMinhaConta } from "../minhaContaPage/elements";

class EnderecoEntregaPage {

    preencherEnderecoEntrega(endereco) {
        cy.get(elMinhaConta.botaoEndereco).click()
        cy.get(elMinhaConta.botaoEditarEnderecos).eq(1).click()
        cy.get(el.campoNomeEntrega).clear().type(endereco.nome)
        cy.get(el.campoSobrenomeEntrega).clear().type(endereco.sobrenome)
        cy.get(el.campoNomeEmpresaEntrega).clear().type(endereco.nome + ' ' + endereco.sobrenome)
        cy.get(el.campoPaisEntrega).click().type(endereco.pais + '{enter}')
        cy.get(el.campoEnderecoEntrega).clear().type(endereco.endereco)
        cy.get(el.campoComplementoEntrega).clear().type(endereco.complemento)
        cy.get(el.campoCidadeEntrega).clear().type(endereco.cidade)
        cy.get(el.campoEstadoEntrega).click().type('Amazonas' + '{enter}')
        cy.get(el.campoCepEntrega).clear().type(endereco.cep)
        cy.get(el.botaoSalvarEndereco).click()

    }

    salvarEnderecoEntregaSemPreencher() {
        cy.get(elMinhaConta.botaoEndereco).click()
        cy.get(elMinhaConta.botaoEditarEnderecos).eq(1).click()
        cy.get(el.campoNomeEntrega).clear().type()
        cy.get(el.campoSobrenomeEntrega).clear().type()
        cy.get(el.campoNomeEmpresaEntrega).clear().type()
        //cy.get(el.campoPaisEntrega).click().type(endereco.pais + '{enter}')
        cy.get(el.campoEnderecoEntrega).clear().type()
        cy.get(el.campoComplementoEntrega).clear().type()
        cy.get(el.campoCidadeEntrega).clear().type()
        cy.get(el.campoEstadoEntrega).click().type()
        cy.get(el.campoCepEntrega).clear().type()
        cy.get(el.botaoSalvarEndereco).click()
    }
}

export default new EnderecoEntregaPage();