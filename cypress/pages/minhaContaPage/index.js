import { elements as el } from "./elements"

class MinhaContaPage {
    

    acessarDetalheConta(){
        cy.get(el.botaoDetalhesConta).click()
    }

    preencherEnderecoCobranca() {
        cy.visit('/minha-conta/edit-address/')
        cy.get(el.botaoEditarEnderecos).eq(0).click()
    }
}

export default new MinhaContaPage();
