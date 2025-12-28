import { elements as el } from "./elements";
import minhaConta from '../minhaContaPage/index'

class DetalhesContaPage {
    
    atualizarDadosDaConta(nome, sobrenome){
            
            minhaConta.acessarDetalheConta()
            cy.get(el.campoFistNameDetalheConta).clear().type(nome)
            cy.get(el.campoLastNameDetalheConta).clear().type(sobrenome)
            cy.get(el.campoDisplayNameDetalheConta).clear().type(nome + sobrenome)
            cy.get(el.botaoSalvarAlteracoes).click()
        }
}

export default new DetalhesContaPage();