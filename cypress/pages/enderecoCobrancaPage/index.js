import { elements as el } from "./elements";
import { elements as elMinhaConta } from "../minhaContaPage/elements";

class EnderecoCobrancaPage {


    preencherEnderecoCobranca(enderecoCobranca) {
        cy.get(elMinhaConta.botaoEndereco).click()
        cy.get(elMinhaConta.botaoEditarEnderecos).eq(0).click()
        cy.get(el.campoNomeFaturamento).clear().type(enderecoCobranca.nome)
        cy.get(el.campoSobrenomeFaturamento).clear().type(enderecoCobranca.sobrenome)
        cy.get(el.campoNomeEmpresaFaturamento).clear().type(enderecoCobranca.nome + ' ' + enderecoCobranca.sobrenome)
        cy.get(el.campoSelecionarPaisFaturamento).click().type(enderecoCobranca.pais + '{enter}')
        cy.get(el.campoEnderecoFaturamento).clear().type(enderecoCobranca.endereco)
        cy.get(el.campoComplementoFaturamento).clear().type(enderecoCobranca.complemento)
        cy.get(el.campoCidadeFaturamento).clear().type(enderecoCobranca.cidade)
        cy.get(el.campoSelecionarEstadoFaturamento).type(enderecoCobranca.estado + '{enter}')
        cy.get(el.campoCepFaturamento).clear().type(enderecoCobranca.cep)
        cy.get(el.campoTelefoneFaturamento).clear().type(enderecoCobranca.telefone)
        cy.get(el.campoEmailFaturamento).clear().type(enderecoCobranca.emailCadastro)
        cy.get(el.botaoSalvarEndereco).click()
    }
    salvarEnderecoCobrancaSemPreencher() {
        cy.get(elMinhaConta.botaoEndereco).click()
        cy.get(elMinhaConta.botaoEditarEnderecos).eq(0).click()
        /*cy.get(el.campoNomeEntrega).clear()
        cy.get(el.campoSobrenomeEntrega).clear()
        cy.get(el.campoNomeEmpresaEntrega).clear()
        //cy.get(el.campoPaisEntrega).click().type(endereco.pais + '{enter}')
        cy.get(el.campoEnderecoEntrega).clear().type()
        cy.get(el.campoComplementoEntrega).clear().type()
        cy.get(el.campoCidadeEntrega).clear().type()
        cy.get(el.campoEstadoEntrega).click().type()
        cy.get(el.campoCepEntrega).clear().type()*/
        cy.get(el.botaoSalvarEndereco).click()
    }


}

export default new EnderecoCobrancaPage();