import { elements as el } from "./elements";
import { elements as elMinhaConta } from "../minhaContaPage/elements";

class EnderecoFaturamentoPage {


    preencherEnderecoFaturamento(enderecoFaturamento) {
        cy.get(elMinhaConta.botaoEndereco).click()
        cy.get(elMinhaConta.botaoEditarEnderecos).eq(0).click()
        cy.get(el.campoNomeFaturamento).clear().type(enderecoFaturamento.nome)
        cy.get(el.campoSobrenomeFaturamento).clear().type(enderecoFaturamento.sobrenome)
        cy.get(el.campoNomeEmpresaFaturamento).clear().type(enderecoFaturamento.nome + ' ' + enderecoFaturamento.sobrenome)
        cy.get(el.campoSelecionarPaisFaturamento).click().type(enderecoFaturamento.pais + '{enter}')
        cy.get(el.campoEnderecoFaturamento).clear().type(enderecoFaturamento.endereco)
        cy.get(el.campoComplementoFaturamento).clear().type(enderecoFaturamento.complemento)
        cy.get(el.campoCidadeFaturamento).clear().type(enderecoFaturamento.cidade)
        cy.get(el.campoSelecionarEstadoFaturamento).type(enderecoFaturamento.estado + '{enter}')
        cy.get(el.campoCepFaturamento).clear().type(enderecoFaturamento.cep)
        cy.get(el.campoTelefoneFaturamento).clear().type(enderecoFaturamento.telefone)
        cy.get(el.campoEmailFaturamento).clear().type(enderecoFaturamento.emailCadastro)
        cy.get(el.botaoSalvarEndereco).click()
    }
    salvarEnderecoFaturamentoSemPreencher() {
        cy.get(elMinhaConta.botaoEndereco).click()
        cy.get(elMinhaConta.botaoEditarEnderecos).eq(0).click()

        cy.get(el.campoNomeFaturamento).clear()
        cy.get(el.campoSobrenomeFaturamento).clear()
        cy.get(el.campoNomeEmpresaFaturamento).clear()
        cy.get(el.campoEnderecoFaturamento).clear()
        cy.get(el.campoComplementoFaturamento).clear()
        cy.get(el.campoCidadeFaturamento).clear()
        cy.get(el.campoCepFaturamento).clear()
        cy.get(el.campoTelefoneFaturamento).clear()
        cy.get(el.campoEmailFaturamento).clear()
       
        cy.get(el.botaoSalvarEndereco).click()
    }

    salvarEnderecoFaturamentoSemCEP(enderecoFaturamento) {
        cy.get(elMinhaConta.botaoEndereco).click()
        cy.get(elMinhaConta.botaoEditarEnderecos).eq(0).click()
        cy.get(el.campoNomeFaturamento).clear().type(enderecoFaturamento.nome)
        cy.get(el.campoSobrenomeFaturamento).clear().type(enderecoFaturamento.sobrenome)
        cy.get(el.campoNomeEmpresaFaturamento).clear().type(enderecoFaturamento.nome + ' ' + enderecoFaturamento.sobrenome)
        cy.get(el.campoSelecionarPaisFaturamento).click().type(enderecoFaturamento.pais + '{enter}')
        cy.get(el.campoEnderecoFaturamento).clear().type(enderecoFaturamento.endereco)
        cy.get(el.campoComplementoFaturamento).clear().type(enderecoFaturamento.complemento)
        cy.get(el.campoCidadeFaturamento).clear().type(enderecoFaturamento.cidade)
        cy.get(el.campoSelecionarEstadoFaturamento).type(enderecoFaturamento.estado + '{enter}')
        cy.get(el.campoCepFaturamento).clear()
        cy.get(el.campoTelefoneFaturamento).clear().type(enderecoFaturamento.telefone)
        cy.get(el.campoEmailFaturamento).clear().type(enderecoFaturamento.emailCadastro)

        cy.get(el.botaoSalvarEndereco).click()
    }

    salvarEnderecoFaturamentoSemTelefone(enderecoFaturamento) {
        cy.get(elMinhaConta.botaoEndereco).click()
        cy.get(elMinhaConta.botaoEditarEnderecos).eq(0).click()
        cy.get(el.campoNomeFaturamento).clear().type(enderecoFaturamento.nome)
        cy.get(el.campoSobrenomeFaturamento).clear().type(enderecoFaturamento.sobrenome)
        cy.get(el.campoNomeEmpresaFaturamento).clear().type(enderecoFaturamento.nome + ' ' + enderecoFaturamento.sobrenome)
        cy.get(el.campoSelecionarPaisFaturamento).click().type(enderecoFaturamento.pais + '{enter}')
        cy.get(el.campoEnderecoFaturamento).clear().type(enderecoFaturamento.endereco)
        cy.get(el.campoComplementoFaturamento).clear().type(enderecoFaturamento.complemento)
        cy.get(el.campoCidadeFaturamento).clear().type(enderecoFaturamento.cidade)
        cy.get(el.campoSelecionarEstadoFaturamento).type(enderecoFaturamento.estado + '{enter}')
        cy.get(el.campoCepFaturamento).clear().type(enderecoFaturamento.cep)
        cy.get(el.campoTelefoneFaturamento).clear()
        cy.get(el.campoEmailFaturamento).clear().type(enderecoFaturamento.emailCadastro)

        cy.get(el.botaoSalvarEndereco).click()
    }
    preencherEnderecoFaturamentoSemEndereco(enderecoFaturamento) {
        cy.get(elMinhaConta.botaoEndereco).click()
        cy.get(elMinhaConta.botaoEditarEnderecos).eq(0).click()
        cy.get(el.campoNomeFaturamento).clear().type(enderecoFaturamento.nome)
        cy.get(el.campoSobrenomeFaturamento).clear().type(enderecoFaturamento.sobrenome)
        cy.get(el.campoNomeEmpresaFaturamento).clear().type(enderecoFaturamento.nome + ' ' + enderecoFaturamento.sobrenome)
        cy.get(el.campoSelecionarPaisFaturamento).click().type(enderecoFaturamento.pais + '{enter}')
        cy.get(el.campoEnderecoFaturamento).clear()
        cy.get(el.campoComplementoFaturamento).clear().type(enderecoFaturamento.complemento)
        cy.get(el.campoCidadeFaturamento).clear().type(enderecoFaturamento.cidade)
        cy.get(el.campoSelecionarEstadoFaturamento).type(enderecoFaturamento.estado + '{enter}')
        cy.get(el.campoCepFaturamento).clear().type(enderecoFaturamento.cep)
        cy.get(el.campoTelefoneFaturamento).clear().type(enderecoFaturamento.telefone)
        cy.get(el.campoEmailFaturamento).clear().type(enderecoFaturamento.emailCadastro)
        cy.get(el.botaoSalvarEndereco).click()
    }

}

export default new EnderecoFaturamentoPage();