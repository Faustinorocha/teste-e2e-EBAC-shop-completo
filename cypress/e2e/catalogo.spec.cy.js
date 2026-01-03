import catalogoPage from "../pages/catalogoPage";
import { elements as el } from "../pages/catalogoPage/elements";
import { elements as elProduto } from "../pages/produtoPage/elements";
describe('Catálogo de produtos', () => {
    beforeEach(() => {

        catalogoPage.acessarPaginaPrincipal()

    });
    context('Quando o usuário acessa a página principal da aplicação', () => {
        it('Deve exibir produtos em destaque', () => {

            cy.get(el.catalogoDeProduto)
                .should('be.visible')
                .and('contain', 'destaque')

        });
    });
    context('Quando o usuário visualizar o catálogo de produto', () => {
        it('Deve exibir imagem, nome, preço e link para PDP', () => {

            cy.get(el.imagemProduto)
                .eq(0)
                .should('be.visible')
            cy.get(el.nomeProduto)
                .eq(0)
                .should('be.visible')
            cy.get(el.precoProduto)
                .eq(0)
                .should('be.visible')
                .and('contain', 'R$')
            cy.get(el.nomeProduto)
                .eq(0)
                .should('be.visible')
                .click()
            cy.url().should('include', '/product')

        });
    });

    context('Quando o usuário clicar em "view all"', () => {
        
        beforeEach(() => {
            catalogoPage.acessarCatalogoDeProdutoCompleto()
        })

        it('Deve exibir a listagem completa de produtos', () => {

            //catalogoPage.acessarCatalogoDeProdutoCompleto()
            cy.get(elProduto.tituloPaginaProduto)
                .should('be.visible')
                .and('contain', 'Produtos')

        });
        it('Deve permitir ordenar por menor preço', () => {

           // catalogoPage.acessarCatalogoDeProdutoCompleto()
            catalogoPage.selecionarOrdenacaoMenorPreco()

            cy.get(el.identificadorOrdenacao).should('be.visible')
            catalogoPage.validarOrdenacaoPrecoMenorParaMaior()

        });
        it('Deve permitir ordenar por maior preço', () => {

           // catalogoPage.acessarCatalogoDeProdutoCompleto()
            catalogoPage.selecionarOrdenacaoMaiorPreco()

            cy.get(el.identificadorOrdenacao).should('be.visible')

            catalogoPage.validarOrdenacaoPrecoMaiorParaMenor()

        });
        it('Deve persistir ordenação quando voltar do PDP para catálogo', () => {

          //  catalogoPage.acessarCatalogoDeProdutoCompleto()
            catalogoPage.selecionarOrdenacaoMaiorPreco()

            cy.get(el.identificadorOrdenacao).should('contain', 'price high to low')

            catalogoPage.validarOrdenacaoPrecoMaiorParaMenor()

            catalogoPage.selecionarProdutoNaLista()

            cy.go('back')

            cy.get(el.identificadorOrdenacao).should('contain', 'price high to low')

            catalogoPage.validarOrdenacaoPrecoMaiorParaMenor()

        });
    });
    context('Quando o usuário estiver na página 1 do catálogo de produtos', () => {
        it('Deve acessar a próxima página com sucesso', () => {

            catalogoPage.acessarCatalogoDeProdutoCompleto()

            catalogoPage.obterNomeProduto().then((nomeProdutoPagina1) => {

                catalogoPage.selecionarProximaPaginaDeProduto()

                catalogoPage.validarMudancaListaProduto(nomeProdutoPagina1)

            })
            cy.get(el.identificadoDaPagina).should('contain', 'Página 2')

        })

    });

    context('Quando o usuário seleciona um produto na lista', () => {
        it('Deve acessar a página de detalhes do produto', () => {

            catalogoPage.acessarCatalogoDeProdutoCompleto()
            catalogoPage.selecionarProdutoNaLista()

            cy.get(elProduto.tituloProduto)
                .should('be.visible')

        });
    });
});