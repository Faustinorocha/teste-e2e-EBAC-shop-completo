import { elements as el } from "./elements"

class LoginPage {
    acessarPaginaLogin() {
        cy.visit('/minha-conta/');
    };

    realizarLogin(email, senha) {
        this.acessarPaginaLogin()
        cy.get(el.campoUsuarioLogin).type(email);
        cy.get(el.campoSenhaLogin).type(senha);
        cy.get(el.botaoLogin).click();
    };

    realizarLogout() {
        cy.get(el.botaoSair).click()
    }

    realizarRegistroNovoUsuario(email, senha) {
        cy.get(el.campoEmailRegistro).type(email)
        cy.get(el.campoSenhaRegistro).type(senha)
        cy.get(el.botaoRegistro).click()
    }
};

export default new LoginPage();