import { elements as el } from "./elements"

class MinhaContaPage {
    

    acessarDetalheConta(){
        cy.get(el.botaoDetalhesConta).click()
    }

  
}

export default new MinhaContaPage();
