import OverwatchElements from "../elements/overwatchElements";

const overwatchElements = new OverwatchElements

class Overwatch { 
    AcessarURL(){
        cy.visit(overwatchElements.URL(),{timeout:60000})
    }

    BotaoComunidade(){
        cy.get(overwatchElements.botaoComunidade())
       .realHover().get(overwatchElements.botaoPerfilJogadores())
       .click()
       cy.get('blz-header').realHover()
    }

    BotaoPerfilJogadores(){
        cy.get(overwatchElements.botaoPerfilJogadores())
        .click()
    }

    BotaoPesquisar(nome){
        cy.get(overwatchElements.botaoPesquisar())
        .click()
        cy.get(overwatchElements.botaoPesquisar(),{timeout:60000000})
        .type(nome)
       
    }

    BotaoBuscar(){
        cy.get(overwatchElements.botaoBuscar(),{timeout:999990000})
        .click(),{timeout:999990000}
        cy.wait(3000);
    }
}

export default Overwatch

