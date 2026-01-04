import catalogoPage from "../pages/catalogoPage";
import { elements as el } from "../pages/catalogoPage/elements";
import { elements as elProduto } from "../pages/produtoPage/elements";
describe('Catálogo de produtos', () => {
    beforeEach(() => {

        catalogoPage.acessarPaginaPrincipal()

    });
    context('Quando o usuário acessa a página principal da aplicação', () => {
        it('Deve está visível produtos em destaque', () => {

            cy.get(el.catalogoDeProduto)
                .should('be.visible')
                .and('contain', 'destaque')

        });

        it('Deve exibir imagem, nome, preço', () => {

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
        });

        it('Deve navegar para a PDP ao selecionar um produto', () => {

            cy.get(el.nomeProduto).eq(0).click()
            cy.url().should('include', '/product')

        });
    });

    context('Quando o usuário clica em "view all"', () => {

        it('Deve exibir catálogo de produtos', () => {

            catalogoPage.acessarCatalogoDeProdutoCompleto()
            cy.get(elProduto.tituloPaginaProduto)
                .should('be.visible')
                .and('contain', 'Produtos')

        });
    })
    context('Quando o usuário estiver no catálogo de produto', () => {
         beforeEach(() => {

            catalogoPage.acessarCatalogoDeProdutoCompleto()

        })

        it('Deve permitir ordenar por menor preço', () => {


            catalogoPage.selecionarOrdenacaoMenorPreco()

            cy.get(el.identificadorOrdenacao).should('be.visible')
            catalogoPage.validarOrdenacaoPrecoMenorParaMaior()

        });
        it('Deve permitir ordenar por maior preço', () => {


            catalogoPage.selecionarOrdenacaoMaiorPreco()

            cy.get(el.identificadorOrdenacao).should('be.visible')

            catalogoPage.validarOrdenacaoPrecoMaiorParaMenor()

        });
        it('Deve persistir ordenação quando voltar do PDP para catálogo', () => {


            catalogoPage.selecionarOrdenacaoMaiorPreco()   

            catalogoPage.validarOrdenacaoPrecoMaiorParaMenor()

            catalogoPage.selecionarProdutoNaLista()

            cy.go('back')

            catalogoPage.validarOrdenacaoPrecoMaiorParaMenor()

        });
        it('Deve acessar a próxima página com sucesso', () => {



            catalogoPage.obterNomeProduto().then((nomeProdutoPagina1) => {

                catalogoPage.selecionarProximaPaginaDeProduto()

                catalogoPage.validarMudancaListaProduto(nomeProdutoPagina1)

            })
            cy.get(el.identificadoDaPagina).should('contain', 'Página 2')

        })
        context('E o usuário seleciona um produto na lista', () => {
            it('Deve acessar a página de detalhes do produto', () => {

                catalogoPage.selecionarProdutoNaLista()

                cy.get(elProduto.tituloProduto)
                    .should('be.visible')

            });
        });

    });

})


