import { elements as el } from "./elements";

class ProdutoPage {
    obterNomeProduto() {
        return cy.get()
        .first()
        .invoke('text')
        .then((nome) => nome.trim())
    }

    obterPrecoProduto() {

    }

    obterImagemProduto() {

    }

    alterarQuantidade(qtd) {

    }

    adicionarAoCarrinho() {
        
    }
}