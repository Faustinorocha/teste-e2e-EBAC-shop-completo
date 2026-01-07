import catalogoPage from "../pages/catalogoPage"
import produtoPage from "../pages/produtoPage"

describe('Produto (PDP)', () => {
    

 beforeEach(() => {
    catalogoPage.acessarPaginaPrincipal()
    catalogoPage.acessarCatalogoDeProdutoCompleto()
    catalogoPage.selecionarProdutoNaLista()

  })

  context('Quando o usuário acessa a página de detalhes do produto', () => {
    it.only('Deve exibir nome, preço e imagem', () => {
        produtoPage.obterNomeProduto().should('be.visible')
    })
  })

  context('Quando o usuário altera a quantidade', () => {
    it('Deve permitir alterar a quantidade do produto', () => {})
  })

  context('Quando o usuário adiciona o produto ao carrinho', () => {
    it('Deve adicionar o produto ao carrinho com sucesso', () => {})
  })
})