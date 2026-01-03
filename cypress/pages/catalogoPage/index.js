import { elements as el } from "./elements";


class CatalogoPage {

    acessarPaginaPrincipal() {
        cy.visit('/')
        
    }

    acessarCatalogoDeProdutoCompleto(){
        
        cy.get(el.botaoViewAll).contains(/view all/i).click()

        
    }
    selecionarProdutoNaLista() {
        cy.get(el.listaDeProduto).eq(0).click()
    }
}

export default new CatalogoPage();