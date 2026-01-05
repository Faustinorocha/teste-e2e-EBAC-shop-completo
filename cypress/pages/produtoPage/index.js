import { elements as el } from "./elements";

class ProdutoPage {
    obterNomeProduto() {
        return cy.get(el.tituloProduto)
            .invoke('text')
            .then((nome) => nome.trim())
    }
    obterPrecoProduto() {
        return cy.get(el.precoProduto)
            .invoke('text')
            .then(text => Number(text.replace('R$', '').replace(',', '.').trim()))
    }
    obterImagemProduto() {
        return cy.get(el.imagemProduto)
            .invoke('attr', 'src')
            .then((src) => src)
    }

    alterarQuantidade(qtd) {
        cy.get(el.campoQuantidade).clear().type(qtd)
    }

    adicionarAoCarrinho() {
        cy.get(el.botaoComprar).click()
    }
    selecionarCor(cor) {
        cy.get(el.seletorCor).select(cor)
    }
    selecionarTamanho(tamanho) {
        cy.get(el.tamanho).select(tamanho)
    }
}

export default new ProdutoPage()