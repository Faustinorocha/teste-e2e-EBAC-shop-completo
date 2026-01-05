import { elements as el } from "./elements";


class CatalogoPage {

    acessarPaginaPrincipal() {
        cy.visit('/')
    }

    acessarCatalogoDeProdutoCompleto() {

        cy.get(el.botaoViewAll).contains(/view all/i).click()

    }
    selecionarProdutoNaLista() {
        cy.get(el.listaDeProduto).eq(0).click()

    }
    selecionarOrdenacaoMenorPreco() {
        cy.get(el.ordenacaoProduto).select('price')

    }
    selecionarOrdenacaoMaiorPreco() {
        cy.get(el.ordenacaoProduto).select('price-desc')

    }
    obterNomeProduto() {
        return cy.get(el.listaDeProduto)
            .first()
            .find('.name')
            .invoke('text')
            .then(text => text.trim())
    }

    obterPrecoPrimeiroProduto() {
        return cy.get(el.listaDeProduto)
            .first()
            .find('.price')
            .invoke('text')
            .then(text => Number(text.replace('R$', '').replace(',', '.')))
    }
    obterPrecoSegundoProduto() {
        return cy.get(el.listaDeProduto)
            .eq(1)
            .find('.price')
            .invoke('text')
            .then(text => Number(text.replace('R$', '').replace(',', '.')))
    }
    validarMudancaListaProduto(nomeProdutoPagina1) {

        this.obterNomeProduto().should((nomeAtual) => {
            expect(nomeAtual).to.not.equal(nomeProdutoPagina1)
        })

    }
    validarOrdenacaoPrecoMaiorParaMenor() {
        this.obterPrecoPrimeiroProduto().then((preco1) => {
            this.obterPrecoSegundoProduto().then((preco2) => {
                expect(preco1).to.be.at.least(preco2)
            })
        })
    }
    validarOrdenacaoPrecoMenorParaMaior() {
        this.obterPrecoPrimeiroProduto().then((preco1) => {
            this.obterPrecoSegundoProduto().then((preco2) => {
                expect(preco1).to.be.at.most(preco2)
            })
        })
    }
    selecionarProximaPaginaDeProduto() {
        cy.get(el.proximaPaginaProduto).click()
    }
}

export default new CatalogoPage();