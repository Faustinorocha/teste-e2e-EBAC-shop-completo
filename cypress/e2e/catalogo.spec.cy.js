import catalogoPage from "../pages/catalogoPage";
import { elements as el } from "../pages/catalogoPage/elements";
import { elements as elProduto } from "../pages/produtoPage/elements";
describe('Catálogo de produtos', () => {
    beforeEach(() => {

        catalogoPage.acessarPaginaPrincipal()
    });
    context('Quando o usuário acessa a página principal da aplicação', () => {
        it('Deve exibir produtos em destaque', () => {

            cy.get(el.mainTelaPrincipal)
                .should('be.visible')
                .and('contain', 'destaque')

        });
    });
    context('Quando o usuário clicar em "view all"', () => {
        it('Deve exibir a listagem completa de produtos', () => {

            catalogoPage.acessarCatalogoDeProdutoCompleto()
            cy.get(elProduto.tituloPaginaProduto).should('contain', 'Produtos')

        });

    });
    context('Quando o usuário seleciona um produto', () => {
        it('Deve acessar a página de detalhes do produto', () => {

            catalogoPage.acessarCatalogoDeProdutoCompleto()
            catalogoPage.selecionarProdutoNaLista()
            cy.get(elProduto.tituloProduto).should('be.visible')
        });
    });
});