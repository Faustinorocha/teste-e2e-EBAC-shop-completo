import { elements as el } from "./elements"

class LoginPage {
    acessarPaginaLogin() {
        cy.visit('/');
        cy.get(el.iconeAcessarLogin).should('be.visible').click()
    };

    realizarLogin(email, senha) {
        
        cy.get(el.campoUsuarioLogin).type(email);
        cy.get(el.campoSenhaLogin).type(senha);
        cy.get(el.botaoLogin).click();
    };

    realizarLogout() {
        cy.get(el.botaoSair).click()
    }
    realizarLoginSemCredenciais() {
        
      
        cy.get(el.botaoLogin).click();
    };

};

export default new LoginPage();