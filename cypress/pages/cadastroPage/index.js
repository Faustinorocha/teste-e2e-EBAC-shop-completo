import { elements as el } from "../cadastroPage/elements"


class CadastroPage {

    acessarPaginaCadastro() {
            cy.visit('/');
            cy.get(el.iconeAcessarLogin).click()
        }

    realizarRegistroNovoUsuario(email, senha) {
           // cy.get(th.campoEmailRegistro).type(email)
           cy.get(el.campoEmailRegistro).type(email)
            cy.get(el.campoSenhaRegistro).type(senha)
            cy.get(el.botaoRegistro).click()
        }
}

export default new CadastroPage();


